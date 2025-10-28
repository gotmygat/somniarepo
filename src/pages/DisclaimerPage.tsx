import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                Disclaimer
              </span>
            </h1>
          </div>
          <p className="text-white/60 mb-12 text-center">Last updated: January 15, 2024</p>

          <div className="space-y-8 text-white/70">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">General Information</h2>
              <p>
                The information provided by Reverie Network on our website and through our services is for
                general informational purposes only. All information is provided in good faith, however we
                make no representation or warranty of any kind, express or implied, regarding the accuracy,
                adequacy, validity, reliability, availability, or completeness of any information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">No Financial Advice</h2>
              <p className="mb-4">
                The content on Reverie Network does not constitute financial, investment, legal, or tax advice.
                You should not construe any information or material as such. The purchase, sale, or holding of
                digital assets involves substantial risk.
              </p>
              <p>
                Before making any financial decisions, you should conduct your own research and consult with
                qualified professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Blockchain and Cryptocurrency Risks</h2>
              <p className="mb-4">
                Blockchain technology and cryptocurrency transactions involve inherent risks, including but
                not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Volatility in digital asset values</li>
                <li>Technological complexity and potential vulnerabilities</li>
                <li>Regulatory uncertainty and potential legal changes</li>
                <li>Irreversibility of blockchain transactions</li>
                <li>Loss of private keys resulting in permanent loss of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">External Links</h2>
              <p>
                Our website may contain links to external websites that are not provided or maintained by
                Reverie Network. We do not guarantee the accuracy, relevance, or completeness of any information
                on these external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Network Performance</h2>
              <p>
                While we strive to provide high-performance and reliable services, we cannot guarantee
                uninterrupted or error-free operation. Network performance may be affected by factors beyond
                our control, including but not limited to internet connectivity, blockchain congestion, and
                third-party service availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Beta Features</h2>
              <p>
                Certain features of Reverie Network may be designated as beta, experimental, or pre-release.
                These features are provided "as is" and may contain bugs or errors. Use of beta features is
                at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User-Generated Content</h2>
              <p>
                Reverie Network is not responsible for any content created, posted, or shared by users of our
                platform. Users are solely responsible for their own content and the consequences of sharing it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">No Guarantees</h2>
              <p className="mb-4">
                We make no guarantees regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Future performance or functionality of our services</li>
                <li>Compatibility with third-party software or services</li>
                <li>Success of projects built on Reverie Network</li>
                <li>Value or demand for digital assets created on our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Services</h2>
              <p>
                Reverie Network reserves the right to modify, suspend, or discontinue any aspect of our services
                at any time without prior notice. We are not liable to you or any third party for any modification,
                suspension, or discontinuation of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p>
                Under no circumstances shall Reverie Network, its officers, directors, employees, or agents be
                liable to you for any direct, indirect, incidental, special, punitive, or consequential damages
                arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p>
                If you have questions about this disclaimer, please contact us at:
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
