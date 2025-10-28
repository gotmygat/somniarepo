import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Terms of <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Service
            </span>
          </h1>
          <p className="text-white/60 mb-12">Last updated: January 15, 2024</p>

          <div className="space-y-8 text-white/70">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Reverie Network services, you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms, you are
                prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access Reverie Network services for personal or commercial
                use subject to the following restrictions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You must not modify or copy the materials</li>
                <li>You must not use the materials for any commercial purpose without proper licensing</li>
                <li>You must not attempt to reverse engineer any software</li>
                <li>You must not remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <p className="mb-4">When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining the security of your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Content</h2>
              <p className="mb-4">
                Our service allows you to create, post, and share content. You retain all rights to your content,
                but you grant us a worldwide license to use, store, and display your content as necessary to
                provide the service.
              </p>
              <p className="mb-4">You agree not to post content that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violates any intellectual property rights</li>
                <li>Is illegal, harmful, or offensive</li>
                <li>Contains viruses or malicious code</li>
                <li>Impersonates any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Blockchain Transactions</h2>
              <p>
                Transactions on the Reverie Network are recorded on the Solana blockchain and are immutable.
                You understand and accept that blockchain transactions cannot be reversed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Fees and Payment</h2>
              <p className="mb-4">
                Certain features of our service may require payment. You agree to provide accurate payment
                information and authorize us to charge your payment method for applicable fees.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to change fees with notice</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
              <p>
                We may terminate or suspend your account and access to our services immediately, without prior
                notice or liability, for any reason, including breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimer</h2>
              <p>
                Our services are provided "as is" without any warranties, express or implied. We do not guarantee
                that the services will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p>
                Reverie Network shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material
                changes. Your continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of Delaware, United
                States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
                <br />
                <span className="text-blue-400">legal@reverie.network</span>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
