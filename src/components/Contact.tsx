'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: language === 'en' ? 'Please fill in all fields' : 'Vă rugăm completați toate câmpurile'
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: language === 'en' ? 'Please enter a valid email address' : 'Vă rugăm introduceți o adresă de email validă'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: language === 'en' 
            ? 'Your message has been sent successfully!' 
            : 'Mesajul dvs. a fost trimis cu succes!'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: language === 'en'
          ? 'An error occurred. Please try again later.'
          : 'A apărut o eroare. Vă rugăm încercați din nou mai târziu.'
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative opacity-70 z-10 py-24 px-4 sm:px-6 lg:px-8 bg-white backdrop-blur-lg backdrop-brightness-50 backdrop-saturate-200 bg-gradient-to-r from-blue-10 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {language === 'en' ? 'Get In Touch' : 'Contactați-mă'}
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          {submitStatus && (
            <div 
              className={`p-4 mb-6 rounded-md ${
                submitStatus.success 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200' 
                  : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {language === 'en' ? 'Name' : 'Nume'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder={language === 'en' ? 'Your name' : 'Numele dvs.'}
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {language === 'en' ? 'Message' : 'Mesaj'}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder={language === 'en' 
                  ? 'Your message here...' 
                  : 'Mesajul dvs. aici...'}
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting 
                  ? (language === 'en' ? 'Sending...' : 'Se trimite...')
                  : (language === 'en' ? 'Send Message' : 'Trimite Mesaj')}
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>
            {language === 'en' 
              ? 'Or reach out directly at: ' 
              : 'Sau contactați-mă direct la: '}
            <a 
              href='mailto:matei.partac45@gmail.com'
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              matei.partac45@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}