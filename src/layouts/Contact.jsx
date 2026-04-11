import { motion } from "framer-motion";
import { fadeInUp } from '../utils/motion';
import { useState } from 'react';

function Contact(){
    const [copied, setCopied] = useState('');

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(''), 2000);
    };

    return(
        <div className="w-full py-16 px-4">
            <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-12" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left - Contact Info */}
                    <motion.div className="flex-1" {...fadeInUp}>
                        <h2 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] font-bold">
                            Connect With Me
                        </h2>
                        <p className="text-[.85rem] sm:text-[.95rem] mt-3 max-w-sm" style={{ color: 'var(--text-secondary)' }}>
                            Have a project in mind or a question? Reach out and let's turn your ideas into reality.
                        </p>

                        <div className="flex flex-col gap-4 mt-8">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5  shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                <span className="text-[.85rem] sm:text-[.95rem] ">rj.frncsco@gmail.com</span>
                                <button
                                    onClick={() => copyToClipboard('rj.frncsco@gmail.com', 'email')}
                                    className=" hover: transition-colors"
                                    title="Copy email"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                                </button>
                                {copied === 'email' && <span className="text-[.65rem] text-[#d4a373]">Copied!</span>}
                            </div>

                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5  shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                <span className="text-[.85rem] sm:text-[.95rem] ">+63 928 348 7624</span>
                                <button
                                    onClick={() => copyToClipboard('+639283487624', 'phone')}
                                    className=" hover: transition-colors"
                                    title="Copy phone"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                                </button>
                                {copied === 'phone' && <span className="text-[.65rem] text-[#d4a373]">Copied!</span>}
                            </div>

                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5  shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                <span className="text-[.85rem] sm:text-[.95rem] ">85 Rev. Aglipay St. Poblacion, Mandaluyong City</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.form
                        className="flex-1 flex flex-col gap-4"
                        {...fadeInUp}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex items-center gap-3 pb-3">
                            <svg className="w-4 h-4  shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-transparent text-[.85rem]   outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-3 pb-3">
                            <svg className="w-4 h-4  shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent text-[.85rem]   outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-3 pb-3">
                            <svg className="w-4 h-4  shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full bg-transparent text-[.85rem]   outline-none"
                            />
                        </div>
                        <div className="pb-3">
                            <textarea
                                placeholder="Please Drop Your Short Message..."
                                rows={4}
                                className="w-full bg-transparent text-[.85rem]   outline-none resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-2 w-full flex items-center justify-center gap-2 bg-[#d4a373] text-black font-medium text-[.85rem] py-3 rounded-lg hover:bg-[#c49363] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}

export default Contact;

