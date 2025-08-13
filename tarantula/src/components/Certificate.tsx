'use client';

const Certificate = () => {
    const basePath = process.env.NODE_ENV === 'production' ? '/tarantula' : '';
    const certificates = [
        {
            year: "2025",
            title: "Master Laravel 12 & PHP: From Beginner to Advanced",
            link: "https://www.udemy.com/certificate/UC-db74f0e0-084f-425d-b6b3-ebe3f9af526a/",
            image: "/laravel_course.webp"
        },
        {
            year: "2022",
            title: "The Complete 2022 Web Development Bootcamp",
            link: "https://www.udemy.com/certificate/UC-c664067f-6385-4c25-a16a-f674a413b72c/",
            image: "/web_dev_course.jpg"
        }
    ];

    return (
        <section id="certificate" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Certificates">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Certificates</h2>
            </div>
            <div>
                <ul className="group/list">
                    {certificates.map((cert, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <img
                                    src={`${basePath}${cert.image}`}
                                    alt="Udemy Logo"
                                    width={200}
                                    height={48}
                                    className="aspect-video object-cover z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                                />
                                <div className="z-10 col-span-6">
                                    <p className="-mt-1 text-sm font-semibold leading-6">{cert.year}</p>
                                    <h3 className="-mt-1">
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                            href={cert.link}
                                            target="_blank"
                                            rel="noreferrer noopener">
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>{cert.title}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Certificate;
