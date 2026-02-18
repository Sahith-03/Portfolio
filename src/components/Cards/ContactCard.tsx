import React, { useRef, useState } from 'react';
import { BentoItem } from '../Layout/BentoItem';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactCard: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // EmailJS Configuration - These should ideally be in environment variables
    const SERVICE_ID = 'service_0mkxb6h';
    const TEMPLATE_ID = 'template_8ouvzfq';
    const PUBLIC_KEY = 'krqyrwVYrLF9yzHao';

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        const formData = new FormData(form.current!);
        const name = formData.get('user_name') as string;
        const email = formData.get('user_email') as string;
        const message = formData.get('message') as string;

        if (!name || name.length < 2) {
            newErrors.user_name = 'Name must be at least 2 characters.';
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.user_email = 'Please enter a valid email address.';
        }

        if (!message || message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        if (!validateForm()) return;

        setStatus('sending');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                if (form.current) form.current.reset();
                setErrors({});
                setTimeout(() => setStatus('idle'), 3000); // Reset after 3 seconds
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            });
    };

    return (
        <BentoItem colSpan={4} rowSpan={2} className="relative overflow-hidden" disableHover>
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

            <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                {/* Left Side: Text & Info */}
                <div className="flex flex-col justify-center space-y-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-green-400 tracking-wide uppercase">Available for work</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-syne">
                            Let's work <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">together.</span>
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        Have a project in mind or just want to chat? I'm always open to discussing new ideas and opportunities.
                    </p>

                </div>

                {/* Right Side: Form */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-center shadow-2xl">
                    <form ref={form} onSubmit={sendEmail} className="space-y-5" noValidate>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className={`w-full bg-black/20 border ${errors.user_name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all placeholder:text-gray-600`}
                                    placeholder="John Doe"
                                    onChange={() => {
                                        if (errors.user_name) setErrors({ ...errors, user_name: '' })
                                    }}
                                />
                                {errors.user_name && <span className="text-xs text-red-400 ml-1">{errors.user_name}</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    className={`w-full bg-black/20 border ${errors.user_email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all placeholder:text-gray-600`}
                                    placeholder="john@example.com"
                                    onChange={() => {
                                        if (errors.user_email) setErrors({ ...errors, user_email: '' })
                                    }}
                                />
                                {errors.user_email && <span className="text-xs text-red-400 ml-1">{errors.user_email}</span>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                className={`w-full bg-black/20 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all placeholder:text-gray-600 resize-none`}
                                onChange={() => {
                                    if (errors.message) setErrors({ ...errors, message: '' })
                                }}
                            />
                            {errors.message && <span className="text-xs text-red-400 ml-1">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all relative overflow-hidden group
                                ${status === 'success' ? 'bg-green-500 text-white' :
                                    status === 'error' ? 'bg-red-500 text-white' :
                                        'bg-white text-black hover:scale-[1.02] active:scale-[0.98]'}`}
                        >
                            <div className="relative z-10 flex items-center justify-center gap-2">
                                <AnimatePresence mode='wait'>
                                    {status === 'sending' ? (
                                        <motion.div
                                            key="sending"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="h-6 w-6 border-2 border-black/30 border-t-black rounded-full animate-spin"
                                        />
                                    ) : status === 'success' ? (
                                        <motion.div
                                            key="success"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="flex items-center gap-2"
                                        >
                                            <FaCheck /> Message Sent
                                        </motion.div>
                                    ) : status === 'error' ? (
                                        <motion.div
                                            key="error"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="flex items-center gap-2"
                                        >
                                            <FaTimes /> Failed to Send
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="idle"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <span>Send Message</span>
                                            <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {/* Button Gradient Shine */}
                            {status === 'idle' && (
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </BentoItem>
    );
};

export default ContactCard;
