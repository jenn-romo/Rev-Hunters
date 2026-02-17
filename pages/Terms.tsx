import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-primary text-secondary-gray font-body py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-8">SMS Terms & Conditions</h1>
        <p className="text-lg text-secondary-gray mb-8">Effective Date: December 2025</p>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            These Terms and Conditions apply to the SMS messaging program operated by Revenue Hunters.
          </p>
          <p>
            By providing your phone number and opting in, you agree to receive text messages from Revenue Hunters in accordance with these terms.
          </p>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">1. Program Description</h2>
            <p className="mb-2">Revenue Hunters sends conversational and service-related text messages to individuals who contact us or request information.</p>
            <p className="mb-2">These messages may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consultation or demo confirmations</li>
              <li>Follow-ups on inquiries</li>
              <li>Customer support responses</li>
              <li>Service updates</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">2. Message Frequency</h2>
            <p>Message frequency varies depending on your interaction with our business.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">3. Message and Data Rates</h2>
            <p>Message and data rates may apply depending on your mobile carrier and plan.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">4. Opt-In</h2>
            <p className="mb-2">You may opt in to receive messages by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submitting your phone number through our website contact or booking forms</li>
              <li>Texting or calling our business number to request information or services</li>
            </ul>
            <p className="mt-4">By providing your number, you consent to receive messages from Revenue Hunters.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">5. Opt-Out Instructions</h2>
            <p className="mb-2">You can opt out of SMS messages at any time.</p>
            <p className="mb-2">To stop receiving messages:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reply STOP to any message</li>
            </ul>
            <p className="mt-4">You will receive a confirmation message and will no longer receive SMS messages from us.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">6. Help Instructions</h2>
            <p className="mb-2">For help:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reply HELP to any message</li>
            </ul>
            <p className="mt-4">or Contact us at:</p>
            <p>Email: sales@revenuehunters.com</p>
            <p>Website: revenuehunters.com</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">7. Privacy</h2>
            <p>
              Your information will be handled in accordance with our Privacy Policy:
            </p>
            <p className="mt-2">
                <Link to="/privacy-policy" className="text-primary-blue hover:text-white transition-colors underline">
                    Revenue Hunters Privacy Policy
                </Link>
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">8. Supported Carriers</h2>
            <p>Messaging may not be available on all carriers. Carriers are not liable for delayed or undelivered messages.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">9. Changes to Terms</h2>
            <p>We may update these Terms and Conditions at any time. Updates will be posted on this page with a revised effective date.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">10. Contact Information</h2>
            <p className="font-bold text-white">Revenue Hunters</p>
            <p>Email: sales@revenuehunters.com</p>
            <p>Website: revenuehunters.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;