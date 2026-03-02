function PricingCard({ title, price, duration, features, popular }) {
    return (
        <div className={`relative glass-card p-8 flex flex-col h-full ${popular ? 'border-blue-500/50 shadow-2xl shadow-blue-900/20' : ''}`}>
            {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                </div>
            )}
            
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-blue-400">{price}</span>
            </div>
            <div className="flex items-center gap-2 mb-6 text-slate-400 text-sm">
                <span className="icon-clock text-blue-500"></span>
                <span>{duration}</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                        <span className="icon-check text-emerald-500 mt-0.5"></span>
                        <span>{feat}</span>
                    </li>
                ))}
            </ul>
            
            <a href="contact.html" className={`text-center py-3 rounded-lg font-medium transition-all ${popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                Get Started
            </a>
        </div>
    );
}

function PricingPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
                <p className="text-slate-400 text-lg">Choose the package that fits your needs.</p>
            </div>

            {/* Websites */}
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-slate-800 flex-grow"></div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="icon-globe text-blue-500"></span> Website Packages
                    </h2>
                    <div className="h-px bg-slate-800 flex-grow"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    <PricingCard 
                        title="Basic" 
                        price="$25–30" 
                        duration="1–2 Hours" 
                        features={["Single Landing Page", "Basic Layout", "Responsive Design"]} 
                    />
                    <PricingCard 
                        title="Medium" 
                        price="$35–65" 
                        duration="3–4 Hours" 
                        features={["Up to 3 Pages", "Interactive Elements", "Contact Form"]} 
                    />
                    <PricingCard 
                        title="Project Site" 
                        price="$75" 
                        duration="6–12 Hours" 
                        popular={true}
                        features={["Full Custom Design", "Complex Animations", "Portfolio Ready", "SEO Optimized"]} 
                    />
                    <PricingCard 
                        title="Informational" 
                        price="$25" 
                        duration="1–6 Hours" 
                        features={["Clean Text Layout", "Fast Loading", "SEO Basics"]} 
                    />
                    <PricingCard 
                        title="Company Site" 
                        price="$150" 
                        duration="24–48 Hours" 
                        features={["Multi-page Corporate", "Premium Assets", "Full Optimization", "Priority Support"]} 
                    />
                </div>
            </div>

            {/* Apps */}
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-slate-800 flex-grow"></div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="icon-smartphone text-purple-500"></span> Mobile App Development
                    </h2>
                    <div className="h-px bg-slate-800 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <PricingCard 
                        title="Simple Game" 
                        price="$50" 
                        duration="Est. 1 Week" 
                        features={["2D Basic Graphics", "Score System", "Touch Controls"]} 
                    />
                    <PricingCard 
                        title="Video Chat (Outline)" 
                        price="$50" 
                        duration="3-4 Days" 
                        features={["UI Skeleton", "Camera Access", "No Backend Logic"]} 
                    />
                    <PricingCard 
                        title="Video Chat (Full)" 
                        price="$100" 
                        duration="2 Weeks" 
                        features={["Real-time Calling", "User Auth", "Functional Backend"]} 
                    />
                    <PricingCard 
                        title="Video Player (Outline)" 
                        price="$70" 
                        duration="1 Week" 
                        features={["Custom UI Controls", "Playlist Support", "Responsive Frame"]} 
                    />
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Layout>
            <PricingPage />
        </Layout>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);