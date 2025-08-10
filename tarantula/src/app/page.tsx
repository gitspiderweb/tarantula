import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Certificate from '@/components/Certificate';
import SpiderButton from '@/components/SpiderButton';
import SpotlightEffect from '@/components/SpotlightEffect';
import Education from '@/components/Education';

export default function Home() {
    return (
        <div className="relative group/spotlight">
            <SpotlightEffect />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <Header />
                    <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
                        <About />
                        <Experience />
                        <Education />
                        <Certificate />
                        <Footer />
                        <SpiderButton />
                    </main>
                </div>
            </div>
        </div>
    );
}