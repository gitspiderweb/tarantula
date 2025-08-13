'use client';

export default function SpiderButton() {
    const basePath = process.env.NODE_ENV === 'production' ? '/tarantula' : '';
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                className="hover:text-teal-300 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-teal-300"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:R4l6:"
                data-state="closed"
            >
                <span className="sr-only">Click to time travel</span>
                <img
                    alt="Creepy Spider Animation"
                    loading="lazy"
                    width={100}
                    height={86}
                    src={`${basePath}/creepy_spider.gif`}
                />
            </button>
        </div>
    );
}

