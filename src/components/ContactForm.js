import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useCallback } from "react";
import { FiMail, FiSend } from "react-icons/fi";

export default function ContactForm({ registerRef }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const control = useAnimation();
  const [inViewRef, inView] = useInView({ threshold: 0.15 });

  const mergedRef = useCallback(
    (node) => {
      inViewRef(node);
      if (registerRef) registerRef(node);
    },
    [inViewRef, registerRef]
  );

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      // Fallback: open the form action in the same tab so the message still sends
      window.location.href = form.action;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={mergedRef}
      id="contact"
      className="section min-h-[90vh] w-full bg-slate-950 text-white"
    >
      <div className="container">
        <div className="section-header">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium tracking-wide uppercase mb-4">
            Get in touch
          </span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Interested in working together? Send me a message and I&rsquo;ll
            get back to you shortly.
          </p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2 items-start"
        >
          <motion.div
            variants={{
              hidden: { x: -30, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            initial="hidden"
            animate={control}
            className="glass-card flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600/20 flex items-center justify-center text-brand-400 shadow-glow">
                <FiMail size={20} />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-sm text-slate-400">
                  lyolayale19@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600/20 flex items-center justify-center text-brand-400 shadow-glow">
                <FiSend size={20} />
              </div>
              <div>
                <p className="font-semibold text-white">Response time</p>
                <p className="text-sm text-slate-400">Usually within 24 hours</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Prefer to reach out directly? Feel free to email or connect with
              me on LinkedIn and GitHub.
            </p>
          </motion.div>

          <motion.form
            action="https://getform.io/f/4f0c60a6-ad3b-4e7b-ba7f-208701a0afbf"
            method="POST"
            onSubmit={handleSubmit}
            className="glass-card"
            variants={{
              hidden: { x: 30, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            initial="hidden"
            animate={control}
            transition={{ delay: 0.2, duration: 0.6 }}
            noValidate
          >
            <div className="space-y-4">
              <input
                className="input-field"
                type="text"
                name="name"
                placeholder="Your name"
                required
                autoComplete="off"
                disabled={submitting || submitted}
              />
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                autoComplete="off"
                disabled={submitting || submitted}
              />
              <textarea
                className="input-field"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                minLength={10}
                autoComplete="off"
                disabled={submitting || submitted}
              ></textarea>
              <button
                type="submit"
                className="btn-primary w-full justify-center disabled:opacity-80"
                disabled={submitting || submitted}
              >
                {submitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Sending…
                  </motion.span>
                ) : (
                  <>
                    Send Message <FiSend size={18} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </motion.div>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 text-center"
          >
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-brand-500/10 border border-brand-500/20">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Thanks!</h3>
              <p className="text-slate-400 text-sm">
                Your message has been sent. I&rsquo;ll get back to you shortly.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
