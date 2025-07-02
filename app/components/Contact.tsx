import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary text-white rounded-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-8 max-w-2xl">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <form className="space-y-6 max-w-2xl">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Please enter your email" 
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="mobile" className="block mb-2 font-medium">Mobile</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  placeholder="Enter mobile" 
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Enter your message" 
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-primary font-medium rounded hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Submit
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;