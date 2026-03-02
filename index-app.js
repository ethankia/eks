function TrustCard({ icon, title, desc }) {
    return (
        <div className="glass-card p-6 hover:bg-slate-800/60 transition-colors duration-300">
            <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 text-blue-400">
                <span className={icon + " text-2xl"}></span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function HomePage() {
    return (
        <div className="space-y-24 pb-20">
            {/* Hero Section */}
            <section className="relative pt-16 sm:pt-24 px-4 sm:px-6 lg:px-8">
                {/* Background Blobs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>

                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
                        Custom Websites & Apps, <br />
                        <span className="glow-text">Built Fast.</span>
                    </h1>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <a href="pricing.html" className="btn-primary">
                            Get Started
                        </a>
                        <a href="mockups.html" className="btn-secondary">
                            View Mockups
                        </a>
                    </div>
                    
                    <CodeWindow />
                </div>
            </section>

            {/* Trust Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Why EK Development?</h2>
                    <p className="text-slate-400">Standards that set us apart.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TrustCard 
                        icon="icon-zap" 
                        title="Fast Delivery" 
                        desc="Turnaround times that respect your schedule. Basic sites in as little as 24 hours." 
                    />
                    <TrustCard 
                        icon="icon-code" 
                        title="Clean Code" 
                        desc="Optimized, maintainable, and scalable code structures without unnecessary bloat." 
                    />
                    <TrustCard 
                        icon="icon-smartphone" 
                        title="Mobile First" 
                        desc="Every project is designed to look perfect on phones, tablets, and desktops." 
                    />
                    <TrustCard 
                        icon="icon-shield-check" 
                        title="Secure Payments" 
                        desc="Transactions handled via trusted platforms. Your security is priority." 
                    />
                    <TrustCard 
                        icon="icon-briefcase" 
                        title="Professional" 
                        desc="Clear communication, milestone updates, and reliable service from start to finish." 
                    />
                    <TrustCard 
                        icon="icon-wand-sparkles" 
                        title="Modern Design" 
                        desc="Sleek, dark-mode aesthetics that feel premium and trustworthy." 
                    />
                </div>
            </section>
        </div>
    );
}

function App() {
    return (
        <Layout>
            <HomePage />
        </Layout>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);