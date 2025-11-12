#!/bin/bash

echo "🚀 Binfab Bins - GitHub & Vercel Deployment Script"
echo "=================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the binfabbins-site directory."
    exit 1
fi

echo "📂 Current directory: $(pwd)"
echo ""

# Check git status
echo "📊 Checking git status..."
git status
echo ""

# Ask for GitHub username
echo "🔑 GitHub Setup"
echo "---------------"
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Error: GitHub username cannot be empty"
    exit 1
fi

REPO_URL="https://github.com/${GITHUB_USERNAME}/binfabbins-site.git"

echo ""
echo "📋 Setup Summary"
echo "----------------"
echo "GitHub Username: $GITHUB_USERNAME"
echo "Repository URL: $REPO_URL"
echo ""

read -p "Have you created the GitHub repository at https://github.com/$GITHUB_USERNAME/binfabbins-site? (y/n): " REPO_CREATED

if [ "$REPO_CREATED" != "y" ]; then
    echo ""
    echo "⚠️  Please create the repository first:"
    echo "   1. Go to https://github.com/new"
    echo "   2. Repository name: binfabbins-site"
    echo "   3. Choose Public or Private"
    echo "   4. Do NOT initialize with README"
    echo "   5. Click 'Create repository'"
    echo ""
    echo "   Then run this script again."
    exit 0
fi

echo ""
echo "🔗 Adding remote and pushing..."

# Check if remote already exists
if git remote | grep -q origin; then
    echo "⚠️  Remote 'origin' already exists. Removing..."
    git remote remove origin
fi

# Add remote
git remote add origin "$REPO_URL"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 View your repository:"
    echo "   https://github.com/$GITHUB_USERNAME/binfabbins-site"
    echo ""
    echo "📋 Next Steps:"
    echo "-------------"
    echo "1. Open: https://vercel.com"
    echo "2. Click 'Add New...' → 'Project'"
    echo "3. Import 'binfabbins-site' repository"
    echo "4. Add environment variables:"
    echo "   - NEXT_PUBLIC_SITE_URL=https://binfabbins.com.au"
    echo "   - CONTACT_PROVIDER=web3forms"
    echo "   - CONTACT_API_KEY=your_api_key_here"
    echo "5. Click 'Deploy'"
    echo ""
    echo "📖 For detailed instructions, see: GITHUB_SETUP.md"
    echo ""
else
    echo ""
    echo "❌ Error: Failed to push to GitHub"
    echo ""
    echo "Common issues:"
    echo "1. Authentication failed - Set up SSH key or Personal Access Token"
    echo "2. Repository doesn't exist - Create it at https://github.com/new"
    echo "3. Permission denied - Check repository permissions"
    echo ""
    echo "For help, see: GITHUB_SETUP.md"
    exit 1
fi
