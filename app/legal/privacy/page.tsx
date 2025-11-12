import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Binfab Bins',
  description: 'Privacy policy for Binfab Bins website.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#1a2847] text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <p className="text-sm text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you contact us through our website, we collect the following information:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Message content</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information you provide to:
          </p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Provide information about our products and services</li>
            <li>Improve our customer service</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties.
            Your information is used solely for the purpose of responding to your inquiry.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Request correction of your personal information</li>
            <li>Request deletion of your personal information</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Phone: <a href="tel:0478598242" className="text-[#1a2847]">0478 598 242</a>
          </p>
        </div>
      </section>
    </div>
  )
}
