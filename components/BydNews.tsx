"use client";

interface NewsItem {
  title: string;
  date: string;
  img: string;
}

export default function BydNews() {
  const news: NewsItem[] = [
    {
      title: "海洋网新车型上市",
      date: "2024-03-12",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "出海主流 开启全球化新篇章",
      date: "2024-03-10",
      img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "王朝系列再添新军",
      date: "2024-03-08",
      img: "https://images.unsplash.com/photo-1503376712344-934d4e21a644?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">直接回顾</h2>
            <p className="text-gray-500 text-sm">DIRECT HITS</p>
          </div>
          <button className="text-sm font-medium border border-gray-300 px-4 py-1 hover:bg-gray-50">
            更多 +
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item: NewsItem, i: number) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden mb-4 relative aspect-[4/3]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-gray-400 text-xs mb-2">{item.date}</p>
              <h3 className="text-lg font-medium group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
