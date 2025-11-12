#!/bin/bash

echo "🖼️  Bin Fab Bins - Image Setup Helper"
echo "======================================"
echo ""

# Create the products directory if it doesn't exist
mkdir -p public/images/products

echo "Please save your product images with these exact filenames:"
echo ""
echo "1. Green hooklift (rib sided) → rib-sided-hooklifts.png"
echo "2. Red hooklift (rolled sided) → rolled-sided-hooklifts.png"
echo "3. Yellow/tan marrell bin → marrell-bins.png"
echo "4. Yellow forklift bins → forklift-bins.png"
echo "5. Blue tipping bin → tipping-bins.png"
echo "6. Green rear lift bin → rear-lift-bins.png"
echo "7. White frontlift bin → frontlift-bins.png"
echo "8. Green MGB plastic bin → mgb-plastic-bins.png"
echo "9. Green crane/skip bin → crane-bins.png"
echo ""
echo "📁 Save location: ~/binfabbins-site/public/images/products/"
echo ""

# Check which images are present
echo "Current images in products folder:"
ls -1 public/images/products/*.png public/images/products/*.jpg 2>/dev/null || echo "  (none yet)"
echo ""

# Count how many we have
COUNT=$(ls -1 public/images/products/*.png public/images/products/*.jpg 2>/dev/null | wc -l | tr -d ' ')
echo "Images found: $COUNT / 9"
echo ""

if [ "$COUNT" -eq 9 ]; then
    echo "✅ All 9 images are present!"
    echo ""
    echo "Ready to deploy? (y/n)"
    read -r DEPLOY
    if [ "$DEPLOY" = "y" ]; then
        echo "🚀 Deploying to Vercel..."
        git add public/images/products/
        git commit -m "Add product images"
        vercel --prod
    fi
else
    echo "⚠️  Missing $(( 9 - COUNT )) images"
    echo ""
    echo "Please add the missing images to: public/images/products/"
fi
