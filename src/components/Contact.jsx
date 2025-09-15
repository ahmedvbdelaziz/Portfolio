import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/movnpvjw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("❌ حصل خطأ أثناء الإرسال، حاول تاني.");
      }
    } catch (error) {
      alert("⚠️ مشكلة في الاتصال بالسيرفر.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jrzezo@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+20 1099319570',
      description: 'Call me for urgent matters'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mansoura, Egypt',
      description: 'Available for remote work'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 sm:space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              Get In <span className="text-purple-600">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Send Message</h3>
                  <p className="text-gray-600">Fill out the form below and I'll get back to you soon</p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-small text-gray-700 flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>Full Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="Please enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>Email Address</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="Please enter your email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>Subject</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Project Discussion"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>Message</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Let's Connect</h3>
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-purple-600 font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold text-gray-900">Available for Work</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's discuss how we can work together to bring your ideas to life.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
