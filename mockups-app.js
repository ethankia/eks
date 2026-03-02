function MockupItem({ title, url, description, imageColor, icon }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="group relative block glass-card overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
            {/* Mockup Preview Area (Abstract) */}
            <div className={`h-48 w-full bg-gradient-to-br ${imageColor} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors"></div>
                {/* Central Icon */}
                <div className={`${icon} text-white/50 text-5xl group-hover:scale-110 group-hover:text-white transition-all duration-300`}></div>
                {/* External Link Overlay */}
                <div className="absolute top-4 right-4 icon-external-link text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl shadow-sm"></div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-slate-400 text-sm mb-4">{description}</p>
                <div className="flex items-center text-xs font-mono text-slate-500">
                    <span className="icon-github mr-2"></span>
                    github.io/demo
                </div>
            </div>
        </a>
    );
}

function MockupsPage() {
    return (
        <div className="pb-20">
            {/* Banner */}
            <div className="bg-amber-500/10 border-b border-amber-500/20 text-amber-400 text-center py-3 px-4 text-sm font-medium">
                <span className="icon-triangle-alert inline-block mr-2 align-middle"></span>
                FAKE INFORMATION, THIS IS A BASE TEMPLATE FOR DEMONSTRATION
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Mockups</h1>
                    <p className="text-slate-400 text-lg">Production-ready templates and designs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <MockupItem 
                        title="Cleaning Service Website"
                        url="https://ethankia.github.io/cleaning-mockup/"
                        description="A clean, trustworthy landing page for local cleaning businesses with quote forms."
                        imageColor="from-blue-600 to-cyan-500"
                        icon="icon-sparkles"
                    />
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Layout>
            <MockupsPage />
        </Layout>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);