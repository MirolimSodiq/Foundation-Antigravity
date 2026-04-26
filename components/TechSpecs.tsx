"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Battery, Zap, Gauge, Timer } from "lucide-react";

const specs = [
  { icon: <Gauge size={32} />, value: "1.9s", label: "0-100 km/h", desc: "Unprecedented acceleration" },
  { icon: <Zap size={32} />, value: "1020", label: "Horsepower", desc: "Tri-motor all-wheel drive" },
  { icon: <Battery size={32} />, value: "620 km", label: "Range (WLTP)", desc: "Go further on a single charge" },
  { icon: <Timer size={32} />, value: "15 min", label: "Fast Charge", desc: "Up to 300km in 15 minutes" },
];

export default function TechSpecs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="specs" className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            BEYOND PERFORMANCE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Engineering excellence meets aerodynamic design. Every component is optimized for speed, efficiency, and range.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group"
            >
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                {spec.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{spec.value}</div>
              <div className="text-lg font-medium text-gray-300 mb-2">{spec.label}</div>
              <div className="text-sm text-gray-500">{spec.desc}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Charging Simulator Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Intelligent Charging Architecture</h3>
            <p className="text-gray-400 mb-6">
              Our 800V architecture supports ultra-fast charging, ensuring you spend more time on the road and less time plugged in. 
              The intelligent battery management system preconditions the battery for optimal charging speeds.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Supercharger (250kW)</span>
                  <span className="text-cyan-400 font-bold">15 mins to 80%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "80%" } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    className="bg-cyan-400 h-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Home Wallbox (11kW)</span>
                  <span className="text-blue-500 font-bold">8 hours to 100%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                    className="bg-blue-600 h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full border-4 border-gray-800 flex items-center justify-center relative">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-cyan-400"
                  strokeDasharray="289"
                  initial={{ strokeDashoffset: 289 }}
                  animate={isInView ? { strokeDashoffset: 58 } : { strokeDashoffset: 289 }}
                  transition={{ duration: 2, delay: 0.8 }}
                />
              </svg>
              <div className="text-center">
                <span className="text-3xl font-bold block">80%</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Charged</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
