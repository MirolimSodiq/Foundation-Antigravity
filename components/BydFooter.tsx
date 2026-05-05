"use client";

export default function BydFooter() {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 border-b border-gray-800 pb-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-white text-3xl font-bold tracking-widest mb-6">BYD</h2>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">购车支持</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">预约试驾</a></li>
              <li><a href="#" className="hover:text-white transition-colors">查找经销商</a></li>
              <li><a href="#" className="hover:text-white transition-colors">金融服务</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">关于我们</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">品牌故事</a></li>
              <li><a href="#" className="hover:text-white transition-colors">新闻中心</a></li>
              <li><a href="#" className="hover:text-white transition-colors">加入我们</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">服务支持</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">车主服务</a></li>
              <li><a href="#" className="hover:text-white transition-colors">软件更新</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">关注我们</h4>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 比亚迪汽车 版权所有</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">使用条款</a>
            <a href="#" className="hover:text-white">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
