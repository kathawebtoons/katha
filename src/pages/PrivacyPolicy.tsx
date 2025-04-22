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
          Katha Entertainment ("we", "our" or "us") operates mobile applications (the "Apps") on the Google Play Store. 
          This Privacy Policy explains what information we collect, how we use and share it, and your rights.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Scope & Consent</h2>
          <p>
            By downloading or using our Apps, you consent to the collection, use, disclosure, and storage of your 
            information as described in this Privacy Policy. If you do not agree, please do not install or use the Apps.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
          <p className="mb-2">Collected only if you choose to provide it:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Account info:</strong> Name, email address, phone number (e.g., when you contact support or sign up via email).
            </li>
            <li>
              <strong>Payment details:</strong> When you make in‑app purchases, we collect billing info via Google Play's secure payments; 
              we never see your full credit‑card number.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">2.2 Automatically Collected Data</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Device & system:</strong> Device model, OS version, unique device identifiers (e.g., Advertising ID).
            </li>
            <li>
              <strong>Usage analytics:</strong> Screens viewed, features used, session length, crash reports (via Firebase Analytics & Crashlytics).
            </li>
            <li>
              <strong>Performance & diagnostics:</strong> App errors, load times, network performance.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">2.3 Location Data (Optional)</h3>
          <p className="mb-2">If you grant permission, we may collect:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Approximate location:</strong> City or region based on IP.
            </li>
            <li>
              <strong>Precise GPS data:</strong> Only if you enable location‑based features (e.g., regional content recommendations).
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">2.4 Third‑Party SDKs & Cookies</h3>
          <p>
            We use Google Firebase, Google Analytics for Firebase, and AdMob; these may set cookies or similar tracking technologies.
            You can opt out of personalized ads by resetting or opting out of your device's Advertising ID.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-4 py-2 text-left">Purpose</th>
                  <th className="px-4 py-2 text-left">Data Used</th>
                  <th className="px-4 py-2 text-left">Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-2">App functionality & maintenance</td>
                  <td className="px-4 py-2">Device info, usage logs</td>
                  <td className="px-4 py-2">Legitimate interest</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-2">Feature improvement & personalization</td>
                  <td className="px-4 py-2">Usage analytics</td>
                  <td className="px-4 py-2">Legitimate interest</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-2">Crash reporting & technical support</td>
                  <td className="px-4 py-2">Crash logs, diagnostics</td>
                  <td className="px-4 py-2">Legitimate interest</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-2">Communication & updates</td>
                  <td className="px-4 py-2">Email address (opt‑in)</td>
                  <td className="px-4 py-2">Your consent</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-2">In‑app purchases & billing</td>
                  <td className="px-4 py-2">Purchase history</td>
                  <td className="px-4 py-2">Contract performance</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-2">Advertising & marketing (optional)</td>
                  <td className="px-4 py-2">Advertising ID, analytics</td>
                  <td className="px-4 py-2">Your consent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
          <p className="mb-2">
            <strong>Personal Information:</strong> Retained as long as your account is active and up to 2 years after last activity, 
            unless a longer retention period is required by law.
          </p>
          <p>
            <strong>Analytics & Device Logs:</strong> Retained for up to 26 months, then aggregated or deleted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Information Sharing & Disclosure</h2>
          <p className="mb-4">
            We do not sell or rent your personal information. We may share your data with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers (e.g., Firebase, analytics, cloud hosting) under strict confidentiality.</li>
            <li>Legal authorities when required by law (e.g., subpoenas, court orders).</li>
            <li>Acquirers: If we merge with or are acquired by another company, we will notify you before transferring data.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Your Rights & Controls</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Access & Portability:</strong> You can request a copy of your personal information.
            </li>
            <li>
              <strong>Correction:</strong> Ask us to correct inaccuracies.
            </li>
            <li>
              <strong>Deletion:</strong> Request erasure of your account and data (subject to legal exceptions).
            </li>
            <li>
              <strong>Opt‑out:</strong> Withdraw consent for marketing emails or personalized ads at any time.
            </li>
            <li>
              <strong>Do Not Track:</strong> Our Apps do not respond to "Do Not Track" signals; use your device/browser settings to limit tracking.
            </li>
          </ul>
          <p className="mt-4">
            To exercise these rights, contact us as described below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
          <p>
            Our Apps are not designed for children under 13. We do not knowingly collect personal information from children under 13. 
            If you believe we have collected such data, please contact us— we will promptly delete it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Data Security</h2>
          <p>
            We use industry‑standard security measures (encryption in transit via TLS, encrypted storage, access controls) to protect your data. 
            However, no system is 100% secure. Use strong passwords and keep your device updated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. International Transfers</h2>
          <p>
            Your data may be processed and stored in India or other countries where our service providers operate. 
            We ensure adequate safeguards (e.g., standard contractual clauses) for any international transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Third‑Party Links</h2>
          <p>
            Our Apps may link to external sites or services (e.g., social media, payment processors). 
            We are not responsible for their privacy practices. Please review their policies separately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy for legal, technical, or business reasons. We will post the revised policy with a new 
            "Effective Date" at the top and, where appropriate, notify you via in‑app notice or email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
          <p className="mb-2">If you have questions, requests, or complaints, please reach out to:</p>
          <div className="space-y-2">
            <p>Katha Entertainment</p>
            <p><a href="mailto:katha.webtoons@gmail.com" className="text-katha-purple hover:underline">katha.webtoons@gmail.com</a></p>
            <p>+91 82800 80850</p>
          </div>
        </section>

        <p className="text-center text-white/70 mt-12">— End of Policy —</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 