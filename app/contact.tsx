'use client'
import GiphyEmbed from '@/components/giphyembed';
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  content: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  content?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    content: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Content validation
    if (!formData.content.trim()) {
      newErrors.content = 'Message is required';
    } else if (formData.content.trim().length < 10) {
      newErrors.content = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace this URL with your actual backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', content: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="w-full gap-3 p-4 py-10">
      <div className="bg-zinc-900 rounded-xl border border-white/[0.2] p-6 w-full flex flex-col lg:flex-row gap-6">
        {/* Left side - Form */}
        <div className="flex-1 p-4 lg:p-8">
          <h1 className="text-2xl font-bold text-white mb-4 text-left pb-5">
            Send a Message
          </h1>
          
          <div className="space-y-3">
            {/* Name and Email Fields - Side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xl font-medium text-neutral-300 mb-1 text-left">
                  Name 
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-1  text-xl bg-zinc-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-blue-500'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400  text-xl mt-1 text-left">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block  text-xl font-medium text-neutral-300 mb-1 text-left">
                  Email 
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-1.5 text-xl bg-zinc-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-blue-500'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400  text-xl mt-1 text-left">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block  text-xl font-medium text-neutral-300 mb-1 text-left">
                Subject 
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-3 py-1.5 text-xl bg-zinc-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                  errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-blue-500'
                }`}
              />
              {errors.subject && (
                <p className="text-red-400  text-xl mt-1 text-left">{errors.subject}</p>
              )}
            </div>

            {/* Content Field */}
            <div>
              <label htmlFor="content" className="block  text-xl font-medium text-neutral-300 mb-1 text-left">
                Message 
              </label>
              <textarea
                id="content"
                name="content"
                required
                rows={2}
                value={formData.content}
                onChange={handleChange}
                className={`w-full px-3 py-1.5 text-xl bg-zinc-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-vertical ${
                  errors.content ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-blue-500'
                }`}
              />
              {errors.content && (
                <p className="text-red-400  text-xl mt-1 text-left">{errors.content}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-blue-900 hover:bg-blue-700 disabled:bg-blue-950 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 text-2xl rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-900/30 border border-green-700 text-green-300 px-3 py-2 rounded-lg text-left">
                <p className=" text-xl">Thank you! Your message has been sent successfully. I&aposll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-900/30 border border-red-700 text-red-300 px-3 py-2 rounded-lg text-left">
                <p className=" text-xl">Sorry, there was an error sending your message. Please try again or contact me directly.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right side - GIF placeholder */}
        <div className="w-full lg:w-48 flex items-center justify-center">
          {/* <div className="w-full h-32 flex items-center justify-center"> */}
            <GiphyEmbed />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;