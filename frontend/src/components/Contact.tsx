import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
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
        error: 'Please fill in all target fields before submitting.'
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
      const response = await fetch('http://localhost:5000/api/contact', {
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

  return (
    <section id="contact" className="py-28 bg-[#0f172a] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-dark-gray mb-4 tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-text text-sm md:text-base mt-4 max-w-xl mx-auto">
            Let's discuss development sprints, Full Stack software solutions, or technical project support coordinates.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-xl font-bold text-dark-gray">Contact Coordinates</h3>
            
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-center space-x-4.5 p-4 bg-[#1e293b]/40 border border-slate-800 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">Location</span>
                  <span className="text-xs md:text-sm font-semibold text-white mt-0.5 block">Kerala, India</span>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:saravanaselvi2705@gmail.com"
                className="flex items-center space-x-4.5 p-4 bg-[#1e293b]/40 border border-slate-800 rounded-2xl hover:border-primary/45 transition-colors group block cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">Email Address</span>
                  <span className="text-xs md:text-sm font-semibold text-white group-hover:text-primary transition-colors mt-0.5 block">
                    saravanaselvi2705@gmail.com
                  </span>
                </div>
              </a>

              {/* Socials link row */}
              <div className="flex items-center space-x-3.5 pt-4">
                <a
                  href="https://github.com/saravanaselvi2705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/45 transition-all duration-200"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/45 transition-all duration-200"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Note Panel */}
            <div className="p-5.5 rounded-2xl bg-cyan-955/10 border border-primary/20 text-slate-text text-xs leading-relaxed">
              <span className="font-semibold text-white block mb-1.5">Project Coordination &amp; Development</span>
              Integrating structured documentation templates, JIRA agile boards tracking, operations reports, and React/Node software updates. Reach out via email to start.
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-[#1e293b]/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm hover:border-slate-700 transition-all duration-300">
            <h3 className="font-display text-xl font-bold text-white mb-6">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-primary focus:bg-slate-900 transition-all placeholder:text-slate-500"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-primary focus:bg-slate-900 transition-all placeholder:text-slate-500"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-primary focus:bg-slate-900 transition-all resize-none placeholder:text-slate-500"
                  required
                />
              </div>

              {/* Form Status Messages */}
              {status.success && (
                <div className="flex items-center space-x-2 text-primary bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 flex-shrink-0" />
                  <span>{status.success}</span>
                </div>
              )}

              {status.error && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-955/40 border border-red-900/40 p-4 rounded-xl text-xs font-semibold">
                  <AlertCircle className="w-4.5 h-4.5 flex-shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 rounded-xl bg-primary text-slate-950 font-bold text-xs hover:bg-primary-dark transition-all duration-200 flex items-center justify-center space-x-1.5 shadow-md shadow-primary/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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

      </div>
    </section>
  );
}
