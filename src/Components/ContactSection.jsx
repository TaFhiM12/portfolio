import { Mail, Phone, MessageSquare, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      _subject: "New message from your portfolio",
      _captcha: "false",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/tafhim000001@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 mt-10 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-gray-950 to-cyan-900/10 opacity-40"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.span
            className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-300 uppercase rounded-full mb-4 bg-white/5 border border-white/10"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contact Me
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Have a project in mind or want to discuss opportunities? Drop me a
            message and I'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl shadow-purple-500/10"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Received!
                </h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Thank you for reaching out. I've received your message and
                  will respond as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-white/5 text-cyan-300 hover:text-white hover:bg-white/10 rounded-lg border border-white/10 transition-all font-medium text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center border border-white/10">
                    <Send className="w-5 h-5 text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <motion.div
                      className="bg-red-500/10 text-red-300 px-4 py-3 rounded-lg border border-red-500/20 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {error}
                    </motion.div>
                  )}

                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-400"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-400"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-400"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium py-3 px-6 transition-all ${
                      isLoading
                        ? "opacity-80 cursor-not-allowed"
                        : "hover:shadow-lg hover:shadow-purple-500/20"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl shadow-cyan-500/10 ">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-white/10">
                  <Phone className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white mb-1">Email</h4>
                    <a
                      href="mailto:tafhim000001@gmail.com"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      tafhim000001@gmail.com
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      For project inquiries and collaborations
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white mb-1">Phone</h4>
                    <a
                      href="tel:+8801937492180"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      +880 1937 492180
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      Available 9AM - 10PM (GMT+6)
                    </p>
                  </div>
                </div>

                {/* WhatsApp - Fixed Structure */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-green-300 group-hover:text-green-200 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/8801937492180"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      Instant messaging for quick queries
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-600/20 group-hover:bg-blue-600/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/tanvir-mahtab-tafhim-78161b285/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      Connect Professionally
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      Let's grow our network
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-300"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Response Time
              </h4>
              <p className="text-gray-300">
                I typically respond to messages within{" "}
                <span className="text-cyan-300">24 hours</span>. For urgent
                inquiries, please call or WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
