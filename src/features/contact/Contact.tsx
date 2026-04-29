import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      {/* <!-- Contact Section --> */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-margin-x mb-section-gap scroll-mt-24"
      >
        <div className="glass-panel p-12 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary-container/10 to-transparent pointer-events-none"></div>
          <h2 className="font-h2 text-h2 text-on-surface mb-8 text-center">
            Get In Touch
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}