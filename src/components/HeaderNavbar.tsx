import { TbTerminal2 } from 'react-icons/tb';

const titleList = [
  { id: 'about', nameEl: 'About', nameZh: '關於' },
  { id: 'skills', nameEl: 'Skills', nameZh: '技術棧' },
  { id: 'projects', nameEl: 'Projects', nameZh: '個人作品' },
] as const;

export default function HeaderNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-xl font-bold font-mono text-cyan-400">
          <a href="#" className="flex gap-2 items-center">
            <TbTerminal2 />
            <span>首頁</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-300">
          {titleList.map((item) => (
            <div
              key={item.id}
              className="px-3 py-1 text-center hover:bg-gray-700 transition-colors duration-300 rounded group"
            >
              <a
                href={`#${item.id.toLocaleLowerCase()}`}
                className=" group-hover:text-cyan-400 transition-colors duration-300"
              >
                {item.nameZh}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
