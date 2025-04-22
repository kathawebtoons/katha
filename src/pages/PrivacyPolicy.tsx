import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-katha-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 gradient-text">Privacy Policy for Katha Entertainment</h1>
        <p className="text-white/70 mb-8">Effective Date: March 5, 2025</p>
        
        <p className="mb-6">
          Katha Entertainment ("we," "our," or "us") is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard your information when you use our mobile
          applications ("Apps") available on the Google Play Store. By using our Apps, you agree to the
          collection and use of information in accordance with this policy.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Information that identifies you personally, such as your name,
              email address, or phone number, only if you voluntarily provide it to us (e.g., through
              customer support inquiries).
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Information that does not identify you personally, including
              but not limited to device information (e.g., device model, operating system), usage data
              (e.g., features used, time spent), and analytics data.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for various purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>To Provide and Maintain Our Apps:</strong> Ensuring the proper functioning and performance
              of our Apps.
            </li>
            <li>
              <strong>To Improve Our Apps:</strong> Analyzing usage patterns to enhance user experience and add
              new features.
            </li>
            <li>
              <strong>To Communicate with You:</strong> Responding to your inquiries, providing support, and
              sharing updates or promotional materials, if you have opted in to receive them.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
          <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to outside parties except in
          the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>With Your Consent:</strong> We may share your information with third parties if you have given
              us explicit consent to do so.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose your information if required by law or in response
              to valid requests by public authorities.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information from unauthorized
            access, alteration, disclosure, or destruction. However, please be aware that no method of
            transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
          <p>
            Our Apps may contain links to third-party websites or services that are not operated by us. We
            have no control over and assume no responsibility for the content, privacy policies, or practices
            of any third-party sites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Children's Privacy</h2>
          <p>
            Our Apps are not intended for use by children under the age of 13. We do not knowingly collect
            personal information from children under 13. If we become aware that we have inadvertently
            collected such information, we will take steps to delete it as soon as possible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page. You are advised to review this Privacy Policy
            periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
          <p className="mb-2">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <div className="space-y-2">
            <p>Katha Entertainment</p>
            <p><a href="mailto:katha.webtoons@gmail.com" className="text-katha-purple hover:underline">katha.webtoons@gmail.com</a></p>
            <p>+918280080850</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 