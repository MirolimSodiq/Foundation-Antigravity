"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeDViewer from "./ThreeDViewer";
import { Check } from "lucide-react";

interface ColorOption { id: string; name: string; hex: string; price: number; }
interface WheelOption { id: string; name: string; style: string; price: number; }
interface InteriorOption { id: string; name: string; price: number; }

interface ConfigOptions {
  colors: ColorOption[];
  wheels: WheelOption[];
  interior: InteriorOption[];
}

const CONFIG_OPTIONS: ConfigOptions = {
  colors: [
    { id: "stealth", name: "Stealth Black", hex: "#111111", price: 0 },
    { id: "pearl", name: "Pearl White", hex: "#f0f0f0", price: 1500 },
    { id: "crimson", name: "Crimson Red", hex: "#8b0000", price: 2500 },
    { id: "ocean", name: "Ocean Blue", hex: "#0047ab", price: 2000 },
    { id: "midnight", name: "Midnight Silver", hex: "#1E293B", price: 1000 },
  ],
  wheels: [
    { id: "aero", name: "19\" Aero Wheels", style: "Standard", price: 0 },
    { id: "sport", name: "20\" Sport Alloys", style: "Sport", price: 1500 },
    { id: "dark", name: "21\" Dark Turbines", style: "Dark", price: 3000 },
  ],
  interior: [
    { id: "black", name: "All Black Eco-Leather", price: 0 },
    { id: "white", name: "Premium White", price: 1000 },
    { id: "cream", name: "Cream & Alcantara", price: 2000 },
  ],
};

const BASE_PRICE = 45990;

export default function Configurator() {
  const [activeTab, setActiveTab] = useState("paint");
  const [selectedColor, setSelectedColor] = useState(CONFIG_OPTIONS.colors[0]);
  const [selectedWheels, setSelectedWheels] = useState(CONFIG_OPTIONS.wheels[0]);
  const [selectedInterior, setSelectedInterior] = useState(CONFIG_OPTIONS.interior[0]);

  const totalPrice = BASE_PRICE + selectedColor.price + selectedWheels.price + selectedInterior.price;

  return (
    <section id="configurator" className="py-20 min-h-screen bg-black text-white relative">
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left Side: 3D Viewer */}
        <div className="w-full lg:w-2/3 lg:sticky lg:top-24 h-[50vh] lg:h-[calc(100vh-150px)]">
          <ThreeDViewer carColor={selectedColor.hex} wheelStyle={selectedWheels.style} />
        </div>

        {/* Right Side: Controls */}
        <div className="w-full lg:w-1/3 flex flex-col pt-8">
          <h2 className="text-3xl font-bold mb-2">Design Your EV</h2>
          <p className="text-gray-400 mb-8">Delivery Estimate: 4-8 weeks</p>

          <div className="flex border-b border-white/10 mb-8">
            {["paint", "wheels", "interior"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 pb-4 text-sm font-bold uppercase tracking-wider transition-colors relative ${
                  activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
            <AnimatePresence mode="wait">
              {activeTab === "paint" && (
                <motion.div
                  key="paint"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold mb-6">Paint</h3>
                  <div className="flex flex-wrap gap-4">
                    {CONFIG_OPTIONS.colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={`w-14 h-14 rounded-full relative group transition-transform ${
                          selectedColor.id === color.id ? "scale-110 ring-2 ring-white ring-offset-4 ring-offset-black" : "hover:scale-105"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor.id === color.id && (
                          <div className="absolute inset-0 flex items-center justify-center mix-blend-difference text-white">
                            <Check size={20} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="mt-8">
                    <p className="text-lg font-medium">{selectedColor.name}</p>
                    <p className="text-gray-400">{selectedColor.price > 0 ? `+$${selectedColor.price.toLocaleString()}` : "Included"}</p>
                  </div>
                </motion.div>
              )}

              {activeTab === "wheels" && (
                <motion.div
                  key="wheels"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold mb-6">Wheels</h3>
                  {CONFIG_OPTIONS.wheels.map((wheel) => (
                    <button
                      key={wheel.id}
                      onClick={() => setSelectedWheels(wheel)}
                      className={`w-full text-left p-6 rounded-xl border transition-all ${
                        selectedWheels.id === wheel.id 
                          ? "border-cyan-400 bg-cyan-900/10" 
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-lg">{wheel.name}</span>
                        <span>{wheel.price > 0 ? `+$${wheel.price.toLocaleString()}` : "Included"}</span>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}

              {activeTab === "interior" && (
                <motion.div
                  key="interior"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold mb-6">Interior</h3>
                  {CONFIG_OPTIONS.interior.map((int) => (
                    <button
                      key={int.id}
                      onClick={() => setSelectedInterior(int)}
                      className={`w-full text-left p-6 rounded-xl border transition-all ${
                        selectedInterior.id === int.id 
                          ? "border-cyan-400 bg-cyan-900/10" 
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-lg">{int.name}</span>
                        <span>{int.price > 0 ? `+$${int.price.toLocaleString()}` : "Included"}</span>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pricing Footer */}
          <div className="pt-8 mt-auto border-t border-white/10">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Purchase Price</p>
                <p className="text-4xl font-bold">${totalPrice.toLocaleString()}</p>
              </div>
              <p className="text-cyan-400 text-sm hover:underline cursor-pointer">Est. Loan: ${(totalPrice / 72).toFixed(0)} /mo</p>
            </div>
            <button className="w-full bg-white text-black py-4 font-bold text-lg uppercase tracking-widest hover:bg-gray-200 transition-colors">
              Continue to Payment
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
