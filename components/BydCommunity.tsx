"use client";

export default function BydCommunity() {
  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Block 1 */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-2">我迪朋友们</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              BYD CLUB 是比亚迪官方车友会，为车主打造的专属交流平台。
            </p>
            <button className="text-sm font-medium border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
              了解更多 &gt;
            </button>
          </div>
          <div className="md:w-2/3">
            <img 
              src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop" 
              alt="BYD Club" 
              className="w-full h-[400px] object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-2">汉唐精英荟</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              汇聚时代精英，共创美好生活。
            </p>
            <button className="text-sm font-medium border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
              了解更多 &gt;
            </button>
          </div>
          <div className="md:w-2/3">
            <img 
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop" 
              alt="Elite Club" 
              className="w-full h-[400px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
