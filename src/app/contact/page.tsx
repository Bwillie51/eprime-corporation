'use client';

import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha'; // 🌟 Added dependency
import { Button } from '@/components/ui/button';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
}

export default function ContactPage() {
  // 🌟 Security States to track the reCAPTCHA token validation
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      sector: 'general',
      message: '',
    },
    onSubmit: async (values, { resetForm }) => {
      // 🛡️ SECURITY WALL: Block spam bots if the checkbox hasn't been ticked
      if (!captchaToken) {
        alert('Security Check Required: Please verify that you are not a robot first!');
        return;
      }

      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (response.ok) {
          alert('Thank you! Your corporate query has been transmitted successfully.');
          
          // Clean the inputs and reset the security widget token
          resetForm();
          setCaptchaToken(null);
          recaptchaRef.current?.reset();
        } else {
          alert(`Server Error: ${result.error || 'Failed to map parameters'}`);
        }
      } catch (error: any) {
        alert(`Frontend Connection Error: ${error.message}`);
      }
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Contact Form Header Banner */}
        <div className="bg-slate-950 text-white p-6 text-center border-b border-slate-800">
          <h1 className="text-xl font-black tracking-tight">Enquiries</h1>
          <p className="text-slate-400 text-xs mt-1">Send in your inquiries here, or for more information.</p>
        </div>

        {/* Formik Tracking Core Container */}
        <form onSubmit={formik.handleSubmit} className="p-6 space-y-4">
          
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Email</label>
              <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Phone</label>
              <input
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="+675"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Target Division</label>
            <select
              name="sector"
              onChange={formik.handleChange}
              value={formik.values.sector}
              className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="general">General Group Headquarters</option>
              <option value="construction">Construction & Civil Division</option>
              <option value="it">Information Technology (ICT)</option>
              <option value="finance">Finance & Investments</option>
              <option value="logistics">Logistics & Freight Forwarding</option>
              <option value="motors">Car Sales & Dealerships</option>
              <option value="retail">Retail Networks</option>
              <option value="other">Others</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Inquiries - Description</label>
            <textarea
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-28 resize-none"
              placeholder="Provide a detailed breakdown of your requirements..."
              required
            />
          </div>

          {/* 🛡️ GOOGLE RECAPTCHA "I'M NOT A ROBOT" BOX */}
          <div className="flex justify-center py-2 overflow-hidden">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lc0ueItAAAAAAa8zG_MX_fo6rFjd4SpQX4YOK-t"} // Uses global test fallback key until you map your unique ones
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          {/* Form Action Button primitive */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-xs uppercase tracking-widest transition-colors shadow-sm mt-1"
          >
            Send
          </Button>

        </form>
      </div>
    </div>
  );
}
