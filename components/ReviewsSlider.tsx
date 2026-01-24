import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Michael Roberts",
        business: "Roberts Plumbing",
        text: "EcoInk changed our business. We stopped chasing bad leads and started waking up to booked jobs.",
    },
    {
        name: "Sarah Jenkins",
        business: "Elite Roofing",
        text: "The voice agent is indistinguishable from a human. It books appointments while I sleep. Incredible.",
    },
    {
        name: "David Chen",
        business: "Metro HVAC",
        text: "Finally, an ads agency that cares about ROI, not just clicks. The system pays for itself 10x over.",
    },
    {
        name: "James Wilson",
        business: "Wilson Electrical",
        text: "Integration was seamless. It plugs right into our CRM. Highly recommend for any service biz.",
    },
    {
        name: "Emma Thompson",
        business: "CleanCo Services",
        text: "We scaled from 2 to 5 vans in 6 months using the EcoInk system. It just works.",
    }
];

const ReviewsSlider = () => {
    return (
        <div className="w-full overflow-hidden relative">
            <motion.div
                className="flex gap-6 px-4 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
                {[...reviews, ...reviews, ...reviews].map((review, i) => (
                    <Card key={i} className="w-[350px] shrink-0 p-6 glass-card hover:bg-white/5 transition-colors">
                        <div className="flex gap-1 mb-4 text-primary">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed min-h-[60px]">"{review.text}"</p>
                        <div>
                            <p className="text-white font-bold">{review.name}</p>
                            <p className="text-gray-500 text-xs">{review.business}</p>
                        </div>
                    </Card>
                ))}
            </motion.div>

            {/* Gradients to fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default ReviewsSlider;
