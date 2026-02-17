import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-primary text-secondary-gray font-body py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-8">Privacy Policy</h1>
        <p className="text-lg text-secondary-gray mb-8">Effective Date: December 2025</p>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            Revenue Hunters (“Revenue Hunters,” “we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your information when you interact with our website, services, and messaging programs.
          </p>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Business or service details</li>
              <li>Any information you voluntarily provide when contacting us</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries</li>
              <li>Provide customer support</li>
              <li>Schedule consultations or demos</li>
              <li>Send service-related messages</li>
              <li>Follow up on requests</li>
              <li>Improve our services</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">3. SMS and Messaging Data</h2>
            <p className="mb-2">If you provide your phone number, you may receive text messages related to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointment or demo confirmations</li>
              <li>Follow-ups on inquiries</li>
              <li>Customer support responses</li>
              <li>Service updates</li>
            </ul>
            <p className="mt-4">Message frequency varies based on your interaction with us.</p>
            <p>Message and data rates may apply.</p>
            <p className="mt-4">You may opt out at any time by replying:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>STOP to unsubscribe</li>
              <li>HELP for assistance</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">4. Information Sharing</h2>
            <p className="mb-4">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            <p className="mb-2">We may share information only:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With service providers who help us operate our business (such as messaging platforms)</li>
              <li>When required by law</li>
              <li>To protect our rights or prevent fraud</li>
            </ul>
            <p className="mt-4">All vendors are required to maintain the confidentiality of your information.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">5. Data Security</h2>
            <p>We take reasonable administrative, technical, and physical measures to protect your information from unauthorized access, use, or disclosure.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">6. Your Choices</h2>
            <p className="mb-2">You may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Opt out of text messages at any time by replying STOP</li>
              <li>Request access, correction, or deletion of your information by contacting us</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">7. Cookies and Website Tracking</h2>
            <p>Our website may use basic cookies or analytics tools to improve user experience. These tools do not collect sensitive personal information.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">8. Contact Information</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, you may contact us:</p>
            <p className="font-bold text-white">Revenue Hunters</p>
            <p>Email: sales@revenuehunters.com</p>
            <p>Website: revenuehunters.com</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">9. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;