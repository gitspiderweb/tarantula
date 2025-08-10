export default function Education() {
    return (
        <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education</h2>
            </div>
            <div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2012 — 2017</header>
                    <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://uc.edu.ph/" target="_blank" rel="noreferrer noopener" aria-label="University of Cebu">
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>University of Cebu</span>
                                </a>
                            </div>
                            <div>
                                <div className="text-slate-500">Bachelor of Science in Information Technology</div>
                            </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                            As the designer, I and my team developed an event planner app called AcadeMeet catered to campus students on web and mobile platforms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
