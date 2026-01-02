import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

const steps = [
    {
        step: "01",
        title: "Consultation",
        description: "Free in-home consultation to discuss your vision and requirements."
    },
    {
        step: "02",
        title: "Design",
        description: "Custom designs and 3D renders so you can visualize your new space."
    },
    {
        step: "03",
        title: "Manufacture",
        description: "Expert craftsmanship in our Melbourne workshop using premium materials."
    },
    {
        step: "04",
        title: "Installation",
        description: "Professional installation by our experienced team, on time and on budget."
    },
];

export default function ProcessSteps() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress relative to the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 60%"],
    });

    // Smooth out the progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div ref={containerRef} className="relative max-w-7xl mx-auto">
            {/* 
        PROGRESS LINE 
        - Desktop: Horizontal line through the center
        - Mobile: Vertical line on the left (timeline style)
      */}

            {/* Desktop Horizontal Track */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded-full -z-10 -translate-y-1/2" />

            {/* Desktop Horizontal Fill */}
            <motion.div
                className="hidden lg:block absolute top-1/2 left-0 h-1 bg-orange-500 rounded-full -z-10 origin-left -translate-y-1/2"
                style={{ scaleX: smoothProgress }}
            />

            {/* Mobile Vertical Track - Center */}
            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full -z-10" />

            {/* Mobile Vertical Fill */}
            <motion.div
                className="lg:hidden absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-orange-500 rounded-full -z-10 origin-top"
                style={{
                    height: "100%",
                    scaleY: smoothProgress
                }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((item, index) => (
                    <ProcessCard
                        key={item.step}
                        item={item}
                        index={index}
                        progress={smoothProgress}
                        total={steps.length}
                    />
                ))}
            </div>
        </div>
    );
}

interface ProcessCardProps {
    item: typeof steps[0];
    index: number;
    progress: MotionValue<number>;
    total: number;
}

function ProcessCard({ item, index, progress, total }: ProcessCardProps) {
    // Calculate if this specific step is "active" based on scroll progress
    const stepThreshold = index / (total - 1 || 1);

    // Animate opacity of the dot
    const isCompleted = useTransform(progress, (value: number) => value > stepThreshold ? 1 : 0);

    // Animate border color when active/passed
    const borderColor = useTransform(
        progress,
        [stepThreshold, stepThreshold + 0.1],
        ["rgba(255,255,255,0)", "rgba(249, 115, 22, 0.3)"] // transparent to orange-500/30
    );

    return (
        <div className="relative group">
            <motion.div
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 h-full border-2 border-transparent relative z-10"
                style={{ borderColor }}
            >
                <span className="text-6xl font-bold text-gray-200 transition-colors">
                    {item.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3 transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-600 transition-colors">
                    {item.description}
                </p>
            </motion.div>
        </div>
    )
}
