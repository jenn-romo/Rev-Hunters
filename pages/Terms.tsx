import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-primary text-secondary-gray font-body py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-8">SMS Terms & Conditions</h1>
        <p className="text-lg text-secondary-gray mb-8">Effective Date: February 2026</p>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            These Terms and Conditions apply to the SMS messaging program operated by Revenue Hunters. By providing your phone number and opting in, you agree to receive text messages from Revenue Hunters in accordance with these terms.
          </p>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">1. Program Description</h2>
            <p className="mb-2">The Revenue Hunters Notifications program sends conversational, service-related, and marketing text messages to individuals who contact us or request information regarding our revenue growth and consulting services.</p>
            <p className="mb-2">Messages may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consultation or demo confirmations and reminders.</li>
              <li>Follow-ups on inquiries and lead requests.</li>
              <li>Customer support responses and service updates.</li>
              <li>Occasional promotional updates regarding our services.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">2. Message Frequency</h2>
            <p>Message frequency varies depending on your interaction with our business and the number of inquiries made.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">3. Message and Data Rates</h2>
            <p>Message and data rates may apply depending on your mobile carrier and plan. Revenue Hunters does not charge for sending or receiving text messages.</p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">4. How to Opt-In</h2>
            <p className="mb-2">You may opt-in to receive messages by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submitting your phone number through our website contact or booking forms at https://revenuehunters.com/.</li>
              <li>Checking the consent box on our lead capture forms.</li>
              <li>Texting <strong>START</strong> or <strong>SUBSCRIBE</strong> to our business number.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">5. How to Opt-Out</h2>
            <p className="mb-2">You can cancel the SMS service at any time. To stop receiving messages:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Text <strong>STOP</strong> to any message.</li>
            </ul>
            <p className="mt-4">
              After you send the SMS message <strong>STOP</strong> to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time, or text <strong>START</strong>, and we will start sending SMS messages to you again.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">6. How to Get Help</h2>
            <p className="mb-2">If you are experiencing issues with the messaging program or have questions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Text <strong>HELP</strong> to any message.</li>
              <li>Email: sales@revenuehunters.com</li>
              <li>Visit: revenuehunters.com</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">7. Privacy Policy</h2>
            <p>
              Your information will be handled in accordance with our Privacy Policy. We do not share SMS opt-in data with third parties for marketing purposes. View our full policy here: <Link to="/privacy-policy" className="text-primary-blue hover:text-white transition-colors underline">https://revenuehunters.com/#/privacy-policy</Link>.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-4">8. Supported Carriers</h2>
            <p>Carriers are not liable for delayed or undelivered messages. Messaging may not be available on all mobile carriers.</p>
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