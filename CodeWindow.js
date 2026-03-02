function CodeWindow() {
    const snippets = [
        {
            lang: 'javascript',
            filename: 'index.js',
            colors: { keyword: 'text-purple-400', func: 'text-blue-400', string: 'text-yellow-300' },
            code: [
                { text: "const buildFuture = async () => {", indent: 0 },
                { text: "// Initialize high-performance project", indent: 1, type: 'comment' },
                { text: "const result = await EK.create({", indent: 1 },
                { text: "quality: 'Premium',", indent: 2 },
                { text: "speed: 'Fast'", indent: 2 },
                { text: "});", indent: 1 },
                { text: "return result;", indent: 1 },
                { text: "};", indent: 0 }
            ]
        },
        {
            lang: 'python',
            filename: 'main.py',
            colors: { keyword: 'text-blue-400', func: 'text-yellow-400', string: 'text-green-400' },
            code: [
                { text: "def build_future():", indent: 0 },
                { text: "# Initialize high-performance project", indent: 1, type: 'comment' },
                { text: "result = EK.create(", indent: 1 },
                { text: "quality='Premium',", indent: 2 },
                { text: "speed='Fast'", indent: 2 },
                { text: ")", indent: 1 },
                { text: "return result", indent: 1 }
            ]
        },
        {
            lang: 'swift',
            filename: 'App.swift',
            colors: { keyword: 'text-pink-400', func: 'text-purple-400', string: 'text-red-300' },
            code: [
                { text: "func buildFuture() async -> Project {", indent: 0 },
                { text: "// Initialize high-performance project", indent: 1, type: 'comment' },
                { text: "let result = await EK.create(", indent: 1 },
                { text: "quality: .premium,", indent: 2 },
                { text: "speed: .fast", indent: 2 },
                { text: ")", indent: 1 },
                { text: "return result", indent: 1 },
                { text: "}", indent: 0 }
            ]
        }
    ];

    const [currentSnippetIndex, setCurrentSnippetIndex] = React.useState(0);
    const [displayedText, setDisplayedText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    // Convert current snippet logic to string for typing
    const currentSnippet = snippets[currentSnippetIndex];
    const fullText = currentSnippet.code.map(line => "  ".repeat(line.indent) + line.text).join('\n');

    React.useEffect(() => {
        let timeout;
        
        const typeSpeed = isDeleting ? 30 : 50;
        const pauseEnd = 2000;
        const pauseStart = 500;

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < fullText.length) {
                    setDisplayedText(fullText.substring(0, displayedText.length + 1));
                    timeout = setTimeout(handleTyping, typeSpeed);
                } else {
                    // Finished typing, pause then delete
                    timeout = setTimeout(() => setIsDeleting(true), pauseEnd);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(fullText.substring(0, displayedText.length - 1));
                    timeout = setTimeout(handleTyping, typeSpeed);
                } else {
                    // Finished deleting, switch snippet
                    setIsDeleting(false);
                    setCurrentSnippetIndex((prev) => (prev + 1) % snippets.length);
                    timeout = setTimeout(handleTyping, pauseStart);
                }
            }
        };

        timeout = setTimeout(handleTyping, typeSpeed);
        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, fullText, currentSnippetIndex]);

    return (
        <div className="relative group mx-auto max-w-2xl w-full h-[320px]">
            {/* Glow backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            {/* Window */}
            <div className="relative h-full bg-slate-900 border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                {/* Title Bar */}
                <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50 shrink-0">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-xs text-slate-400 font-mono flex-grow text-center pr-12">{currentSnippet.filename}</div>
                </div>
                
                {/* Code Area */}
                <div className="p-6 font-mono text-sm sm:text-base leading-relaxed overflow-hidden flex-grow relative">
                    <pre className="text-slate-300 whitespace-pre-wrap break-all">
                         {displayedText}
                         <span className="inline-block w-2 h-5 bg-blue-500 animate-pulse align-middle ml-1"></span>
                    </pre>
                </div>
            </div>
        </div>
    );
}