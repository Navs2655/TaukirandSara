"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const inputClasses =
  "w-full bg-transparent border-b border-gold/25 focus:border-gold outline-none py-3 font-body text-champagne placeholder:text-champagne/30 transition-colors duration-300";

const labelClasses =
  "block font-body text-xs tracking-luxury uppercase text-champagne/50 mb-2";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [attendance, setAttendance] = useState<"joyfully" | "regretfully" | "">("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Frontend only — no backend connected yet.
    // Wire this up to your form endpoint / email service when ready.
    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(200,162,79,0.06) 0%, rgba(9,9,9,0) 70%)",
        }}
      />

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 font-body text-gold text-xs tracking-luxury uppercase mb-4"
      >
        Kindly Respond
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative z-10 font-heading text-4xl md:text-5xl text-champagne/90 mb-16 text-center"
      >
        Will You Join Us?
      </motion.h2>

      <div className="relative z-10 w-full max-w-lg">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col items-center text-center gap-4 border border-gold/20 rounded-2xl px-8 py-14 bg-white/[0.03] backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading text-2xl text-gradient-gold">
                Response Received
              </h3>
              <p className="font-body text-champagne/60 text-sm max-w-xs">
                Thank you for letting us know — we look forward to celebrating
                with you.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-7"
            >
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="guests" className={labelClasses}>
                  Number of Guests
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min={1}
                  max={10}
                  defaultValue={1}
                  required
                  className={inputClasses}
                />
              </div>

              <fieldset>
                <legend className={labelClasses}>Attendance</legend>
                <div className="flex gap-4">
                  {(
                    [
                      { value: "joyfully", label: "Joyfully Accepts" },
                      { value: "regretfully", label: "Regretfully Declines" },
                    ] as const
                  ).map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setAttendance(option.value)}
                      aria-pressed={attendance === option.value}
                      className={`flex-1 py-3 px-3 text-xs tracking-wide rounded-full border transition-colors duration-300 ${
                        attendance === option.value
                          ? "border-gold bg-gold/10 text-gold"
                          : "border-gold/25 text-champagne/60 hover:border-gold/50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {/* Hidden input so the choice is included in form submission */}
                <input type="hidden" name="attendance" value={attendance} required />
              </fieldset>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Leave a wish for the couple"
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                disabled={!attendance}
                className="mt-4 px-8 py-4 font-body text-sm tracking-luxury uppercase text-champagne border border-gold/50 rounded-full hover:bg-gold/10 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
              >
                Send Response
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
