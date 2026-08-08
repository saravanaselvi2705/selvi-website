"use client";

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, X, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: string | null;
    error: string | null;
  }>({
    loading: false,
    success: null,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        loading: false,
        success: null,
        error: 'Please fill in all fields before submitting.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        loading: false,
        success: null,
        error: 'Please enter a valid email address.'
      });
      return;
    }

    try {
      const response = await fetch('https://selvi-website-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: result.message || 'Thank you! Your message has been sent successfully.',
          error: null
        });
        setFormData({ name: '', email: '', message: '' });

        // Optional: Auto-close modal after 3 seconds on success
        // setTimeout(() => setIsModalOpen(false), 3000);
      } else {
        setStatus({
          loading: false,
          success: null,
          error: result.error || 'Failed to submit form. Please try again.'
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        loading: false,
        success: null,
        error: 'Connection failed. Please ensure the backend server is running.'
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset status when closing so it's fresh next time
    setTimeout(() => setStatus({ loading: false, success: null, error: null }), 300);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1121] relative font-sans border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

        {/* Minimalist Centered Header */}
        <div className="mb-10">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Let's discuss development sprints, Full-Stack software solutions, or technical project coordination. I'm currently available for new opportunities.
          </p>
        </div>

        {/* Primary CTA to open modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm md:text-base hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_20px_rgba(34,211,238,0.2)] cursor-pointer hover:-translate-y-1"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Send a Message</span>
        </button>

        {/* Quick Links Row (Alternative contact methods) */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          <a
            href="mailto:saravanaselvi2705@gmail.com"
            className="w-12 h-12 rounded-xl bg-[#121A2F] border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200 hover:-translate-y-1 shadow-sm"
            title="Email Me"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/saravanaselvi2705"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[#121A2F] border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200 hover:-translate-y-1 shadow-sm"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[#121A2F] border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200 hover:-translate-y-1 shadow-sm"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Popup Modal for the Contact Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1121]/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#121A2F] border border-cyan-400/30 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">

            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-2xl text-white">Send Message</h3>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-white transition-colors bg-[#0B1121] p-2 rounded-full border border-slate-700/80 hover:border-slate-500"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1121] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-600"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. johndoe@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1121] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-600"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Message Content</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your product requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1121] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none placeholder:text-slate-600"
                  required
                />
              </div>

              {/* Form Status Messages */}
              {status.success && (
                <div className="flex items-center space-x-2 text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 p-4 rounded-xl text-xs font-bold">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>{status.success}</span>
                </div>
              )}

              {status.error && (
                <div className="flex items-center space-x-2 text-rose-400 bg-rose-400/10 border border-rose-400/20 p-4 rounded-xl text-xs font-bold">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status.loading || !!status.success}
                className="w-full py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-400/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {status.loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}