import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, Phone, Mic, Video, Volume2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        business: "",
        industry: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!formData.firstName || !formData.email || !formData.phone) {
            setError("Please fill in all required fields.");
            return;
        }

        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="glass-card p-12 rounded-3xl border border-primary/20 text-center flex flex-col items-center justify-center min-h-[500px] w-full max-w-5xl mx-auto">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">You're on the list!</h3>
                <p className="text-gray-400 mb-8 max-w-lg text-lg">
                    Thanks {formData.firstName}. Sarah from EcoInk will check your details and give you a call at {formData.phone} shortly.
                    <br /><span className="text-sm opacity-60 mt-2 block">(Yes, she's an AI, but she's very polite.)</span>
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" size="lg">
                    Book another call
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="glass-card rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden flex flex-col lg:flex-row relative shadow-2xl">
                {/* Decorative Background Blob */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none z-0" />

                {/* LEFT: FORM SECTION */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
                    <div className="mb-10">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Receive a phone call from <span className="text-primary">Sarah</span>
                        </h3>
                        <p className="text-gray-400 text-lg">
                            Experience the speed of EcoInk Voice firsthand. Enter your details and our AI agent will call you within 60 seconds.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">First Name <span className="text-primary">*</span></label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Last Name</label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email <span className="text-primary">*</span></label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                    placeholder="you@company.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Phone Number <span className="text-primary">*</span></label>
                                <div className="relative">
                                    <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center border-r border-white/10 bg-white/5 rounded-l-xl text-gray-400 text-sm">
                                        +61
                                    </div>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-16 pr-4 py-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                        placeholder="400 000 000"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Business Name</label>
                            <input
                                type="text"
                                value={formData.business}
                                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                placeholder="Where do you work?"
                            />
                        </div>

                        {error && <p className="text-red-400 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full" /> {error}</p>}

                        <div className="pt-4">
                            <Button
                                type="submit"
                                className="w-full h-14 text-lg font-bold bg-primary text-black hover:bg-white hover:text-black transition-all rounded-xl shadow-[0_0_20px_rgba(127,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="animate-spin mr-2" />
                                        Connecting to Agent...
                                    </>
                                ) : (
                                    "Get Sarah to Call Me"
                                )}
                            </Button>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                No obligation. Experience our AI capabilities instantly.
                            </p>
                        </div>
                    </form>
                </div>

                {/* RIGHT: PHONE MOCKUP SECTION */}
                <div className="flex-1 bg-gradient-to-br from-gray-900 to-black relative flex items-center justify-center min-h-[600px] lg:min-h-auto p-12">
                    {/* Background Rings */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-white/5 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full" />
                    </div>

                    {/* CSS PHONE MOCKUP */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-[300px] h-[600px] bg-black rounded-[50px] border-[8px] border-gray-800 shadow-2xl z-20 overflow-hidden ring-1 ring-white/20"
                    >
                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[28px] w-[100px] bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2">
                            <div className="w-12 h-12 bg-black/50 absolute top-[-10px] rounded-full blur-xl" />
                        </div>

                        {/* Screen Content */}
                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-[#3a4a50] overflow-hidden flex flex-col items-center pt-14 pb-8 px-5">
                            {/* Wallpaper / Blur Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
                                    alt="Background"
                                    fill
                                    className="object-cover opacity-40 blur-lg scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
                            </div>

                            {/* Caller Info */}
                            <div className="relative z-10 flex flex-col items-center w-full">
                                <div className="text-gray-300 text-xs font-medium flex items-center gap-1 mb-4">
                                    <span>EcoInk Voice AI</span>
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                </div>

                                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-4 ring-white/10 shadow-2xl relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                                        alt="Sarah Agent"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h4 className="text-2xl font-semibold text-white mb-1">Sarah</h4>
                                <p className="text-gray-400 text-base">EcoInk Senior Agent</p>
                            </div>

                            {/* Controls */}
                            <div className="relative z-10 mt-auto w-full grid grid-cols-2 gap-x-8 gap-y-6 place-items-center mb-6">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                        <Volume2 size={24} />
                                    </div>
                                    <span className="text-[10px] text-white/50">Audio</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                        <Video size={24} />
                                    </div>
                                    <span className="text-[10px] text-white/50">Video</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                        <Mic size={24} />
                                    </div>
                                    <span className="text-[10px] text-white/50">Mute</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                        <ArrowRight size={24} />
                                    </div>
                                    <span className="text-[10px] text-white/50">Transfer</span>
                                </div>
                            </div>

                            {/* Answer/Decline Actions */}
                            <div className="relative z-10 w-full flex justify-between items-center px-6 pb-2">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-full bg-red-500/90 flex items-center justify-center text-white shadow-lg shadow-red-500/30 cursor-not-allowed opacity-80">
                                        <Phone size={28} className="rotate-[135deg]" />
                                    </div>
                                    <span className="text-white text-xs font-medium">Decline</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30"
                                    >
                                        <Phone size={28} />
                                    </motion.div>
                                    <span className="text-white text-xs font-medium">Accept</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default EnquiryForm;
