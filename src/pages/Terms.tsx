import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 font-poppins">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 prose prose-lg max-w-none">
              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using Upscale DigiTech's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">2. Services Description</h2>
                <p className="text-muted-foreground">
                  Upscale DigiTech provides digital marketing services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Pay-Per-Click Advertising (PPC)</li>
                  <li>Social Media Marketing</li>
                  <li>Web Development</li>
                  <li>Content Creation and Branding</li>
                  <li>Email Marketing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">3. Client Responsibilities</h2>
                <p className="text-muted-foreground">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Grant necessary access to accounts and platforms</li>
                  <li>Make payments according to agreed terms</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">4. Payment Terms</h2>
                <p className="text-muted-foreground">
                  Payment terms are outlined in individual service agreements. Generally:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Invoices are due within 15 days of receipt</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Services may be suspended for non-payment</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, strategies, and materials created by Upscale DigiTech remain our intellectual property until full payment is received. Upon full payment, specified deliverables are transferred to the client as outlined in the service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">6. Confidentiality</h2>
                <p className="text-muted-foreground">
                  Both parties agree to maintain the confidentiality of proprietary information shared during the business relationship. This obligation continues after the termination of services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">7. Service Limitations</h2>
                <p className="text-muted-foreground">
                  While we strive for excellence, we cannot guarantee:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Specific search engine rankings</li>
                  <li>Exact ROI or conversion rates</li>
                  <li>Social media follower numbers</li>
                  <li>Website traffic volumes</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Digital marketing results depend on multiple factors beyond our control, including market conditions, competition, and platform algorithm changes.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">8. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate services with 30 days written notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Client is responsible for payment of all work completed</li>
                  <li>Access credentials will be returned</li>
                  <li>Ongoing campaigns will be properly closed</li>
                  <li>Final reports will be provided</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">9. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Upscale DigiTech shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for services in the preceding 12 months.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">10. Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  Any disputes arising from these terms shall be resolved through good faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration in New Delhi, India.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">11. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 font-poppins">12. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these terms, please contact us:
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

export default Terms;