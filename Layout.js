function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const path = window.location.pathname;
    const isHome = path.endsWith('index.html') || path === '/' || path.endsWith('/');
    const isPricing = path.includes('pricing.html');
    const isMockups = path.includes('mockups.html');
    const isReviews = path.includes('reviews.html');
    const isContact = path.includes('contact.html');

    const navLinks = [
        { name: 'Home', href: 'index.html', active: isHome },
        { name: 'Pricing', href: 'pricing.html', active: isPricing },
        { name: 'Mockups', href: 'mockups.html', active: isMockups },
        { name: 'Reviews', href: 'reviews.html', active: isReviews },
        { name: 'Contact', href: 'contact.html', active: isContact },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="index.html" className="flex items-center gap-3 group">
                        <img 
                            src="https://app.trickle.so/storage/public/images/usr_1c32743330000001/a64a3b5c-246a-4aef-85c7-68d020a24fd3.jpeg" 
                            alt="EK Logo" 
                            className="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20"
                        />
                        <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-200 transition-colors">EK Development</span>
                    </a>
                    
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className={`nav-link ${link.active ? 'active' : ''}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <button 
                        className="md:hidden text-slate-300 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={isMenuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-800 bg-slate-950">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className={`block py-3 px-4 rounded-lg text-base font-medium ${link.active ? 'bg-slate-800 text-blue-400' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

function Footer() {
    const year = new Date().getFullYear(); // Dynamic year
    return (
        <footer className="bg-slate-950/80 border-t border-slate-900 pt-16 pb-8 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs text-slate-400">EK</div>
                         <span className="text-slate-500 font-medium">EK Development</span>
                    </div>
                    <div className="text-slate-600 text-sm">
                        &copy; {year} EK Development. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 relative">
            <AnimatedBackground />
            <Header />
            <main className="flex-grow pt-20 z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
}