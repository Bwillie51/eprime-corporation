'use strict';
import React from 'react';
import { useFormik } from 'formik';

interface FormValues {
  company: string;
  email: string;
  sector: string;
  message: string;
}

export function ContactForm() {
  const formik = useFormik<FormValues>({
    initialValues: { company: '', email: '', sector: 'general', message: '' },
    onSubmit: async (values, { resetForm }) => {
      // Direct integration target endpoint mapping for Formspree endpoint delivery
      const response = await fetch('https://formspree.io', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert('Thank you! Your corporate query has been received.');
        resetForm();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 max-w-md mx-auto bg-slate-50 p-6 rounded-lg border border-slate-200">
      <div>
        <label className="block text-sm font-medium text-slate-700">Company/Client Name</label>
        <input name="company" type="text" onChange={formik.handleChange} value={formik.values.company} className="mt-1 w-full p-2 border border-slate-300 rounded bg-white text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Official Email</label>
        <input name="email" type="email" onChange={formik.handleChange} value={formik.values.email} className="mt-1 w-full p-2 border border-slate-300 rounded bg-white text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Relevant Corporate Division</label>
        <select name="sector" onChange={formik.handleChange} value={formik.values.sector} className="mt-1 w-full p-2 border border-slate-300 rounded bg-white text-sm">
          <option value="general">General Group Inquiries</option>
          <option value="construction">Construction Division</option>
          <option value="it">IT & Infrastructure</option>
          <option value="finance">Finance & Investment</option>
          <option value="logistics">Logistics & Supply Chains</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Message Document Specification</label>
        <textarea name="message" onChange={formik.handleChange} value={formik.values.message} className="mt-1 w-full p-2 border border-slate-300 rounded bg-white text-sm h-24" required />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded text-sm hover:bg-blue-700 transition-colors">
        Submit Corporate Request
      </button>
    </form>
  );
}
