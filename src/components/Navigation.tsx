const navLinks = [
    { href: '#about', label: 'About', isActive: true },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
];

export default function Navigation() {
    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {navLinks.map(({ href, label, isActive }) => (
                    <li key={href}>
                        <a
                            className={`group flex items-center py-3 ${isActive ? 'active' : ''}`}
                            href={href}
                        >
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                {label}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
