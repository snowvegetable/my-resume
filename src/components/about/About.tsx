import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../../assets/images/profile.jpg';
import GradientText from '../GradientText';

const iconList = [
  { icon: FaGithub, href: 'https://github.com/snowvegetable?tab=repositories' },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/%E9%8E%AE%E4%BD%91-%E5%AE%8B-834ba9358',
  },
] as const;

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row justify-between">
      <div className="basis-1/2 text-center md:text-left">
        <h1 className="text-5xl mb-10">
          <span className="block mb-6">我是</span>
          <GradientText>宋鎮佑</GradientText>
        </h1>
        <p className="text-2xl mb-10">
          前端工程師。專注於打造<GradientText>流暢和創新</GradientText>且符合
          RWD 的使用者體驗。熱衷於將複雜的需求轉化為簡潔的程式碼。
        </p>
        <div className="mb-5 flex justify-center md:justify-start">
          <a
            href="#projects"
            className="block w-40 text-center py-4 text-black text-b bg-cyan-500  rounded-xl font-bold hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px] hover:shadow-cyan-400/50"
          >
            探索我的作品
            <span>↓</span>
          </a>
        </div>
        <div className="flex flex-row gap-5 justify-center md:justify-start mb-5">
          {iconList.map((item) => (
            <a
              key={item.href}
              href={item.href}
              rel="noopener noreferrer"
              className="hover:text-cyan-500 transition-colors"
            >
              <item.icon size={26} />
            </a>
          ))}
        </div>
      </div>
      <div className="basis-1/4 relative flex items-center justify-center">
        <div className="absolute w-60 md:w-80 aspect-square rounded-full bg-linear-to-r from-cyan-400 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>

        <img
          src={profile}
          className="w-60 md:w-80 h-auto rounded-full relative z-10 border-4 border-cyan-500"
        />
      </div>
    </section>
  );
}
