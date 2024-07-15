import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import landingImage from '../Images/landing.png';

function HeroSection() {
    return (
        <div className="bg-[#faffd973] w-full min-h-screen flex justify-center">
            <div className="absolute inset-0 bg-[#fcebcae8] clip-patch" style={{ clipPath: 'circle(45% at 80% 43%)', zIndex: -1 }}></div>
            <div className="absolute inset-0 bg-white clip-patch" style={{ clipPath: 'ellipse(7% 4% at 84% 41%)', zIndex: -1 }}></div>
            <section className="container mx-24 px-4 md:px-6 py-12 md:py-24 lg:py-32 ">
                <div className="grid gap-6 lg:grid-cols-2 items-center">
                    <div
                        className="flex flex-col justify-center space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <div className="space-y-2">
                            <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-green-600 to-green-500 font-serif">
                                Optimize Your Agricultural Yield
                                <div className="text-yellow-700">
                                    <ReactTypingEffect
                                        speed={200}
                                        text={["Soil Analysis", "Climate Monitoring", "Yield Optimization"]}
                                    />
                                </div>
                            </h1>
                            <p className="max-w-[600px] text-gray-700 md:text-xl pt-4">
                                Enhance your farming practices with TerraGrow {'–'} the ultimate agriculture management solution. Input soil, temperature, and humidity details to predict the best crops to maximize your yield with MindsDB.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 70 }}
                                id="try_it_now"
                            >
                                <Link
                                    className="inline-flex h-12 items-center justify-center bg-green-800 px-10 text-base font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-800 disabled:pointer-events-none disabled:opacity-50 rounded-full"
                                    to="/home"
                                >
                                    Try It Now
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0.9 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 70 }}
                            >
                                <Link
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-green-200 bg-white px-10 text-base font-medium shadow-sm transition-colors hover:bg-green-100 hover:text-green-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-800 disabled:pointer-events-none disabled:opacity-50"
                                    to="/about"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <div className="">
                        <img src={landingImage} alt="Agriculture" className="w-full md:w-[70%] lg:w-[75%] mx-auto" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function Component() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-[100dvh]">
                <header className="px-4 lg:px-6 h-14 flex items-center">
                    <nav className="ml-auto flex gap-4 sm:gap-6">
                        <a href="#features" className="text-sm font-medium hover:underline underline-offset-4">
                            Features
                        </a>
                        <a href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
                            Pricing
                        </a>
                        <a href="#about" className="text-sm font-medium hover:underline underline-offset-4">
                            About
                        </a>
                        <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
                            Contact
                        </a>
                    </nav>
                </header>
                <main className="flex-1">
                    <HeroSection />
                    <div className="w-full bg-gray-50">
                        {/* Additional Sections like Features, Pricing, About, Contact */}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
