const PrivacyPolicy = () => {
  const lastUpdated = "January 2025";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg opacity-90">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MakeBetter Technologies (operated by Shree Ananta Consultancy and Solutions LLP) ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.makebetter.tech or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Personal identification information (name, email address, phone number, company name)</li>
                  <li>Professional information (job title, industry, business requirements)</li>
                  <li>Communication data (messages sent through our contact forms or email)</li>
                  <li>Technical data (IP address, browser type, device information, usage statistics)</li>
                  <li>Cookies and tracking technologies data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provide and maintain our services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To analyze usage patterns and optimize user experience</li>
                  <li>To comply with legal obligations and protect our rights</li>
                  <li>To detect, prevent, and address technical issues or fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Service providers who assist in our operations (hosting, analytics, email services)</li>
                  <li>Business partners when necessary to deliver requested services</li>
                  <li>Legal authorities when required by law or to protect our rights</li>
                  <li>Potential buyers in case of business transfer, merger, or acquisition</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us at contact@makebetter.tech.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience, analyze website traffic, and understand user behavior. You can control cookies through your browser settings, though disabling cookies may affect website functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after changes constitutes acceptance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-foreground font-medium">Shree Ananta Consultancy and Solutions LLP</p>
                  <p className="text-muted-foreground">Email: contact@makebetter.tech</p>
                  <p className="text-muted-foreground">Website: www.makebetter.tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
