function ReviewCard({ name, text }) {
    return (
        <div className="glass-card p-6 w-full md:w-80 flex-shrink-0 mx-4 snap-center">
            <div className="flex gap-1 mb-4 text-amber-400">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="icon-star fill-current text-sm"></span>)}
            </div>
            <p className="text-slate-300 text-sm italic mb-6 leading-relaxed">"{text}"</p>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center text-xs font-bold text-white">
                    {name.charAt(0)}
                </div>
                <span className="text-white font-medium text-sm">{name}</span>
            </div>
        </div>
    );
}

function ReviewsPage() {
    const reviews = [
        { name: "Alex M.", text: "Incredible speed. Got my landing page up in 24 hours." },
        { name: "Sarah K.", text: "The code is so clean, my team had no issues taking it over." },
        { name: "James R.", text: "Best bang for your buck. Premium feel for a fair price." },
        { name: "TechStart Inc.", text: "EK Development nailed the dark mode aesthetic we wanted." },
        { name: "Marcus L.", text: "Professional communication throughout the entire project." },
        { name: "Elena G.", text: "The mobile app prototype helped us secure funding." },
        { name: "David W.", text: "Smooth animations and zero lag. Highly recommended." },
        { name: "Creative Studio", text: "Finally a developer who understands design nuances." },
        { name: "Pryce O.", text: "Exactly what I needed. No bloat, just working code." },
        { name: "Gaming Guild", text: "Our game site looks professional and loads instantly." },
        { name: "Lara F.", text: "Trustworthy and secure payment process." },
        { name: "NextGen Sol.", text: "Scalable architecture. We are scaling up easily." },
        { name: "Tom H.", text: "The Mac window animation on the home page sold me!" },
        { name: "WebFlow Agency", text: "We outsource our custom coding to EK. Always solid." },
        { name: "Chris P.", text: "Simple, effective, and elegant." },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh] flex flex-col justify-center">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
                <p className="text-slate-400 text-lg">Hundreds of happy customers, hundreds of sites.</p>
            </div>

            {/* Marquee Effect Container */}
            <div className="relative overflow-hidden w-full py-10">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
                
                {/* First Row - Left */}
                <div className="flex overflow-x-hidden mb-8 group">
                    <div className="flex animate-[scroll_40s_linear_infinite] group-hover:[animation-play-state:paused]">
                        {reviews.concat(reviews).map((r, i) => (
                            <ReviewCard key={i} {...r} />
                        ))}
                    </div>
                </div>

                 {/* Second Row - Right (Offset) */}
                 <div className="flex overflow-x-hidden group">
                    <div className="flex animate-[scroll_45s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                        {reviews.reverse().concat(reviews).map((r, i) => (
                            <ReviewCard key={i} {...r} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}

function App() {
    return (
        <Layout>
            <ReviewsPage />
        </Layout>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);