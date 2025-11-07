import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 font-poppins">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 prose prose-lg max-w-none">
              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">1. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us when you use our services, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Business information</li>
                  <li>Payment and billing information</li>
                  <li>Communications with us</li>
                  <li>Website usage data and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">2. How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">3. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With your consent</li>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">5. Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">6. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">7. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not directed to children under 13. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">8. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">9. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this privacy policy, please contact us at:
                </p>
                <div className="bg-secondary/30 rounded-xl p-6 mt-4">
                  <p className="font-semibold">Upscale DigiTech</p>
                  <p className="text-muted-foreground">Email: info@upscaledigitech.com</p>
                  <p className="text-muted-foreground">Phone: +91 9631881743</p>
                  <p className="text-muted-foreground">Address: Okhla NSIC, New Delhi, India</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;