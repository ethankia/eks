function ContactPage() {
    const [showToast, setShowToast] = React.useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                <p className="text-slate-400 text-lg">Ready to start your project? Let's talk.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Contact Info */}
                <div className="glass-card p-8 space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <span className="icon-phone text-blue-400 text-xl"></span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Phone</h3>
                            <p className="text-slate-400 mb-2">616-387-0268</p>
                            <p className="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded inline-block">
                                Text "SITE" for questions
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                            <span className="icon-mail text-purple-400 text-xl"></span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Email</h3>
                            <p className="text-slate-400 mb-2">ethankia1619@gmail.com</p>
                            <button 
                                onClick={() => handleCopy('ethankia1619@gmail.com')}
                                className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                            >
                                <span className="icon-copy"></span> Copy Address
                            </button>
                        </div>
                    </div>
                    
                    <div className="pt-6 border-t border-slate-800">
                        <div className="flex gap-4 justify-center">
                            <div className="flex flex-col items-center gap-2 text-slate-500">
                                <span className="icon-code text-2xl"></span>
                                <span className="text-xs">Code</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 text-slate-500">
                                <span className="icon-shield text-2xl"></span>
                                <span className="text-xs">Secure</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 text-slate-500">
                                <span className="icon-rocket text-2xl"></span>
                                <span className="text-xs">Fast</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payments */}
                <div className="glass-card p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="icon-credit-card text-emerald-400"></span>
                        Payment Methods
                    </h3>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                            <span className="font-medium text-white">Apple Pay</span>
                            <span className="icon-smartphone text-slate-400"></span>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                            <span className="font-medium text-white">Venmo</span>
                            <span className="icon-banknote text-slate-400"></span>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                            <span className="font-medium text-white">Cash App</span>
                            <span className="icon-dollar-sign text-slate-400"></span>
                        </div>
                    </div>
                    
                    <p className="text-center text-slate-500 text-sm">
                        "If none of these work, we’ll find another payment method."
                    </p>
                </div>
            </div>

            {/* Toast Notification */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <span className="icon-circle-check text-emerald-400"></span>
                <span>Copied to clipboard!</span>
            </div>
        </div>
    );
}

function App() {
    return (
        <Layout>
            <ContactPage />
        </Layout>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);