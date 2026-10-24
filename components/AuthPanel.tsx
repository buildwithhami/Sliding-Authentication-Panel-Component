'use client';

import React, { useState } from 'react';

export default function AuthPanel() {
    const [isLogin, setIsLogin] = useState(true);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);

    return (
        <div className="bg-white text-stone-900 h-screen w-screen overflow-hidden flex m-0 p-0 font-['Plus_Jakarta_Sans']">
            <div className="relative w-full h-full bg-white overflow-hidden flex">
                
                {/* Login Form Container */}
                <div className={`absolute top-0 left-0 w-full md:w-1/2 h-full flex flex-col justify-center items-center px-8 lg:px-16 py-12 overflow-y-auto z-10 bg-white transition-opacity duration-400 ${
                    isLogin ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                    
                    {/* Brand Logo */}
                    <div className="absolute top-8 left-8 lg:left-20 z-20">
                        <svg className="w-10 h-10 text-black cursor-pointer" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M256 0L478.8 128.3V382.5L394.8 333.5V176.9L256 98.3L117.2 176.9V333.5L33.2 382.5V128.3Z" />
                            <path fill="currentColor" d="M256 158.3L342.2 207.2V306.8L256 357L169.8 306.8V207.2Z" />
                            <path fill="currentColor" d="M117.2 431.9L202.6 386.1L256 416.9L309.4 386.1L394.8 431.9L256 512Z" />
                        </svg>
                    </div>

                    <div className="w-full max-w-lg mx-auto pt-10">
                        <h2 className="text-2xl font-bold tracking-tight mb-1.5 text-center">Welcome back</h2>
                        <p className="text-xs text-stone-500 mb-8 text-center">Enter your credentials to access your account.</p>
                        
                        {/* Social Logins */}
                        <div className="grid grid-cols-2 gap-3.5 mb-6">
                            <button type="button" className="flex items-center justify-center py-3 px-4 border border-stone-200 rounded-xl text-xs font-semibold hover:bg-stone-50 transition cursor-pointer">
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                                Google
                            </button>
                            <button type="button" className="flex items-center justify-center py-3 px-4 border border-stone-200 rounded-xl text-xs font-semibold hover:bg-stone-50 transition cursor-pointer">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                GitHub
                            </button>
                        </div>

                        <div className="relative flex py-2 items-center mb-5">
                            <div className="grow border-t border-stone-200"></div>
                            <span className="shrink mx-4 text-[10px] uppercase font-bold tracking-widest text-stone-400">OR CONTINUE WITH EMAIL</span>
                            <div className="grow border-t border-stone-200"></div>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1.5">Email Address</label>
                                <input type="email" placeholder="name@example.com" required className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-black transition" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1.5">Password</label>
                                <div className="relative">
                                    <input 
                                        type={showLoginPassword ? 'text' : 'password'} 
                                        placeholder="••••••••" 
                                        required 
                                        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-black transition pr-10" 
                                    />
                                    <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-black cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {showLoginPassword ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7A10.025 10.025 0 0117.411 17.411m0 0L21 21" />
                                            ) : (
                                                <>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </>
                                            )}
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className="w-full py-3.5 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition cursor-pointer shadow-md mt-2">Sign In</button>
                        </form>
                        
                        <p className="text-xs text-stone-500 text-center mt-6">
                            Don't have an account? <button onClick={() => setIsLogin(false)} className="text-black font-bold underline focus:outline-none cursor-pointer">Sign up</button>
                        </p>
                    </div>
                </div>

                {/* Signup Form Container */}
                <div className={`absolute top-0 right-0 w-full md:w-1/2 h-full flex flex-col justify-center items-center px-8 lg:px-16 py-12 overflow-y-auto z-10 bg-white transition-opacity duration-400 ${
                    !isLogin ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                    
                    {/* Brand Logo */}
                    <div className="absolute top-8 left-8 lg:left-20 z-20">
                        <svg className="w-10 h-10 text-black cursor-pointer" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M256 0L478.8 128.3V382.5L394.8 333.5V176.9L256 98.3L117.2 176.9V333.5L33.2 382.5V128.3Z" />
                            <path fill="currentColor" d="M256 158.3L342.2 207.2V306.8L256 357L169.8 306.8V207.2Z" />
                            <path fill="currentColor" d="M117.2 431.9L202.6 386.1L256 416.9L309.4 386.1L394.8 431.9L256 512Z" />
                        </svg>
                    </div>

                    <div className="w-full max-w-lg mx-auto pt-10">
                        <h2 className="text-2xl font-bold tracking-tight mb-1.5 text-center">Create Account</h2>
                        <p className="text-xs text-stone-500 mb-6 text-center">Join us today and explore our open source modules.</p>
                        
                        {/* Social Logins */}
                        <div className="grid grid-cols-2 gap-3.5 mb-5">
                            <button type="button" className="flex items-center justify-center py-2.5 px-4 border border-stone-200 rounded-xl text-xs font-semibold hover:bg-stone-50 transition cursor-pointer">
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                                Google
                            </button>
                            <button type="button" className="flex items-center justify-center py-2.5 px-4 border border-stone-200 rounded-xl text-xs font-semibold hover:bg-stone-50 transition cursor-pointer">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                GitHub
                            </button>
                        </div>

                        <div className="relative flex py-1 items-center mb-4">
                            <div className="grow border-t border-stone-200"></div>
                            <span className="shrink mx-4 text-[10px] uppercase font-bold tracking-widest text-stone-400">OR REGISTER WITH EMAIL</span>
                            <div className="grow border-t border-stone-200"></div>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">First Name</label>
                                    <input type="text" placeholder="John" required className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-black transition" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Last Name</label>
                                    <input type="text" placeholder="Doe" required className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-black transition" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Email Address</label>
                                <input type="email" placeholder="name@example.com" required className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-black transition" />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Date of Birth</label>
                                <input type="date" required className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs text-stone-700 focus:outline-none focus:border-black transition" />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Password</label>
                                <div className="relative">
                                    <input 
                                        type={showSignupPassword ? 'text' : 'password'} 
                                        placeholder="••••••••" 
                                        required 
                                        className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-black transition pr-10" 
                                    />
                                    <button type="button" onClick={() => setShowSignupPassword(!showSignupPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-black cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {showSignupPassword ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7A10.025 10.025 0 0117.411 17.411m0 0L21 21" />
                                            ) : (
                                                <>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </>
                                            )}
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="w-full py-3 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition cursor-pointer shadow-md mt-1">Create Account</button>
                        </form>
                        
                        <p className="text-xs text-stone-500 text-center mt-3">
                            Already have an account? <button onClick={() => setIsLogin(true)} className="text-black font-bold underline focus:outline-none cursor-pointer">Login</button>
                        </p>
                    </div>
                </div>

                {/* Sliding Visual Banner Panel */}
                <div className={`hidden md:block absolute top-0 right-0 w-1/2 h-full transition-transform duration-600 ease-in-out z-20 m-0 p-0 ${
                    isLogin ? 'translate-x-0' : '-translate-x-full'
                }`}>
                    <div className={`w-full h-full relative overflow-hidden bg-neutral-900 m-0 p-0 ${
                        isLogin ? 'rounded-l-[35px]' : 'rounded-r-[35px]'
                    }`}>
                        <img src="/image-login.png" className="w-full h-full object-cover m-0 p-0" alt="Visual Panel" />
                    </div>
                </div>

            </div>
        </div>
    );
}
