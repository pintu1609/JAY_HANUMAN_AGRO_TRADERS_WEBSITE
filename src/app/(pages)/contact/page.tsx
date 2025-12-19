"use client";
import { contactValidationSchema, initialContact } from '@/validation/Index';
import { useFormik } from 'formik';
import React, { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import countryList from 'react-select-country-list'
import { BeatLoader } from 'react-spinners';
import { toFormikValidationSchema } from 'zod-formik-adapter';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const options = useMemo(() => countryList().getData(), [])

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm, setFieldValue } = useFormik({
    initialValues: initialContact,
    validationSchema: toFormikValidationSchema(contactValidationSchema),
    onSubmit: async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/contactUs', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        console.log("🚀 ~ ContactSale ~ response:", response)
        if (!response.ok) {
          console.error('Error adding email to Google Sheets');
          setLoading(false);
          toast.error('Error adding contact details. Please try again later.');

        }
        resetForm();
        setFieldValue('country', null); // Clear the country field
        setLoading(false);
        toast.success('Enquiry submitted successfully!');

      }
      catch (error) {
        console.error("Error during login:", error);
        setLoading(false);
        toast.error('Error adding contact details. Please try again later.');
      }
    }
  })
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Jay Hanuman Aagao Traders
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch for bulk onion orders, pricing details, or export
            inquiries.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

          {/* DETAILS */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Business Contact</h2>
            <p className="mb-4 text-gray-700">
              Buyers, wholesalers, and exporters can contact us directly for
              reliable onion supply and pricing information.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>📍 Location: Patna, Bihar</li>
              <li>📞 Phone: +91 9939982449</li>
              <li>📞 Alternate: +91 9955000641</li>
              <li>📧 Email: jugalsingh808284.com</li>
              <li>🕒 Business Hours: 9:00 AM – 7:00 PM</li>
            </ul>

            <div className="mt-8">
  <h3 className="text-lg font-semibold mb-3">Our Location</h3>

  <div className="rounded-xl overflow-hidden border shadow-sm">
    <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1491.3982807508492!2d85.20720937431769!3d25.551953625871967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a19596bc373b%3A0xa503c725842fb076!2sJay%20Hanuman%20Agro%20Traders!5e0!3m2!1sen!2sin!4v1766157516757!5m2!1sen!2sin"

      width="100%"
      height="280"
      loading="lazy"
      className="border-0"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <p className="text-sm text-gray-600 mt-2">
    Visit or contact us for bulk onion trading and export inquiries.
  </p>
</div>
          </div>

          {/* FORM */}
          <div className="bg-gray-100 p-10 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Send an Inquiry</h3>

            <form className="grid gap-4" onSubmit={handleSubmit}>
              <input className={`border p-3 rounded focus:outline-none ${errors.name && touched.name && typeof errors.name === "string" ? "border-red-500" : "border-[#b8babc]"}  `}
                placeholder="Full Name" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
              <input className={`border p-3 rounded focus:outline-none ${errors.company && touched.company && typeof errors.company === "string" ? "border-red-500" : "border-[#b8babc]"}  `} name='company' placeholder="Company Name" value={values.company} onChange={handleChange} onBlur={handleBlur} />
              <input className={`border p-3 rounded focus:outline-none ${errors.email && touched.email && typeof errors.email === "string" ? "border-red-500" : "border-[#b8babc]"}  `} placeholder="Email Address" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
              <input className={`border p-3 rounded focus:outline-none ${errors.phone && touched.phone && typeof errors.phone === "string" ? "border-red-500" : "border-[#b8babc]"}  `} placeholder="Mobile Number" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
              <textarea
                className={`border p-3 rounded focus:outline-none ${errors.message && touched.message && typeof errors.message === "string" ? "border-red-500" : "border-[#b8babc]"}  h-32`}
                placeholder="Requirement / Quantity" name='message' value={values.message} onChange={handleChange} onBlur={handleBlur}
              />
              <button className="bg-green-600 text-white py-3 rounded font-semibold">
                {loading ? <BeatLoader color="white" size={10} /> : "Submit Inquiry"}
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
