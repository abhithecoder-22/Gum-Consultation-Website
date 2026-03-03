"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface BookConsultationModalProps {
  open: boolean;
  onClose: () => void;
}

const BookConsultationModal = ({ open, onClose }: BookConsultationModalProps) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // Basic client-side validation
    if (!form.fullName || !form.email || !form.phone) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const resp = await fetch("https://gym-site-aa3b.onrender.com/api/query/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || `Request failed with status ${resp.status}`);
      }

      setSubmitted(true);
      setForm({ fullName: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ fullName: "", email: "", phone: "", message: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg glass-card p-8 z-10 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-primary  mb-4" />
                <h3 className="font-display text-3xl mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your consultation request. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display text-3xl mb-1">Book My Consultation</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in your details and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-destructive text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message / Fitness Goals</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your fitness goals..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="glow-button w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookConsultationModal;
