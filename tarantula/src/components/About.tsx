export default function About() {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>
            <div>
                <p className="mb-4">
                    I'm a developer and designer passionate about building seamless
                    digital experiences that unite thoughtful design with technical
                    excellence. My work thrives at the crossroads of clean,
                    accessible web development and visually engaging graphic design,
                    where every detail matters for both performance and aesthetics.
                </p>
                <p className="mb-4">
                    Currently, I'm a Software Developer at Acret-Philippines Inc.,
                    where I focus on transforming design documents into dynamic,
                    client-focused websites. I specialize in Drupal CMS—managing
                    data, implementing new features, handling robust site traffic,
                    and extending site functionality with custom PHP modules to meet
                    unique project requirements.
                </p>
                <p className="mb-4">
                    My background spans a range of creative and technical roles, from
                    designing print-ready templates and e-commerce solutions for
                    stationery products to developing enterprise web applications.
                    Previously, as a Product Setup Engineer at Northern Lights
                    Technology Development, I leveraged my expertise in Adobe
                    InDesign, Illustrator, and Photoshop to create high-quality
                    business collateral.
                </p>
                <p>
                    Outside of work, I'm a fan of a healthy lifestyle and enjoy
                    running, going to the gym, and biking.
                </p>
            </div>
        </section>
    );
}
