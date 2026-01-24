import { motion } from "framer-motion";

const AnimatedFunnel = () => {
    return (
        <div className="relative w-full h-[400px] flex items-center justify-center p-8">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />

            {/* Funnel Container */}
            <div className="relative w-full max-w-lg aspect-square flex flex-col justify-between items-center z-10">

                {/* Top Nodes */}
                <div className="flex justify-between w-full mb-12">
                    {/* Ads Node */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-4 rounded-xl border-primary/20 flex flex-col items-center w-1/2 mx-2"
                    >
                        <div className="w-3 h-3 bg-primary rounded-full mb-2 shadow-[0_0_10px_#7FFF00]" />
                        <span className="text-white font-bold text-sm">EcoInk Ads</span>
                        <span className="text-xs text-gray-400 text-center">High-Intent Traffic</span>
                    </motion.div>

                    {/* Voice Node */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-card p-4 rounded-xl border-accent/20 flex flex-col items-center w-1/2 mx-2"
                    >
                        <div className="w-3 h-3 bg-accent rounded-full mb-2 shadow-[0_0_10px_#00ffcc]" />
                        <span className="text-white font-bold text-sm">EcoInk Voice</span>
                        <span className="text-xs text-gray-400 text-center">AI Job Handling</span>
                    </motion.div>
                </div>

                {/* Connecting Lines & Particles */}
                <div className="absolute top-20 bottom-20 w-full flex justify-center">
                    {/* SVG Lines */}
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 25 0 Q 50 50 50 100" stroke="rgba(127, 255, 0, 0.2)" strokeWidth="2" fill="none" />
                        <path d="M 75 0 Q 50 50 50 100" stroke="rgba(0, 255, 204, 0.2)" strokeWidth="2" fill="none" />
                    </svg>

                    {/* Moving Particles - Ads path */}
                    <motion.div
                        className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#7FFF00]"
                        animate={{
                            offsetDistance: ["0%", "100%"],
                            opacity: [0, 1, 0]
                        }}
                        // Using left/top animation as simplified path following
                        style={{ left: "25%", top: "0%" }}
                    >
                        <motion.div
                            animate={{ x: ["0%", "100%"], y: ["0%", "400%"] }} // Rough approximation of path
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="w-full h-full bg-primary rounded-full"
                        />
                    </motion.div>
                    <motion.div
                        className="absolute w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_#00ffcc]"
                        style={{ right: "25%", top: "0%" }}
                    >
                        <motion.div
                            animate={{ x: ["0%", "-100%"], y: ["0%", "400%"] }} // Rough approximation of path
                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1 }}
                            className="w-full h-full bg-accent rounded-full"
                        />
                    </motion.div>
                </div>

                {/* Bottom Node */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="glass-card p-6 rounded-xl border-white/20 w-3/4 flex flex-col items-center mt-8 relative bg-white/5"
                >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                    <span className="text-xl font-bold text-white mb-1">Booked Jobs</span>
                    <span className="text-xs text-gray-400">Revenue Generated</span>
                </motion.div>

            </div>
        </div>
    );
};

export default AnimatedFunnel;
