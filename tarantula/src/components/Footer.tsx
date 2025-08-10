export default function Footer() {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                Just your friendly neighborhood web weaver — spinning websites, one strand at a time.
            </p>
        </footer>
    );
}

function FooterLink({ href, text }: { href: string; text: string }) {
    return (
        <a
            href={href}
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${text} (opens in a new tab)`}
        >
            {text}
        </a>
    );
}