import SkillsCard from './components/SkillsCard';
import { FaReact, FaJsSquare, FaGithub } from 'react-icons/fa';
import { SiVite, SiEslint } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import GradientText from '../GradientText';
import Card from '../Card';

export default function Skills() {
  return (
    <section id="skills">
      <h1 className="text-5xl mb-10 text-center">
        <GradientText>技術棧/Skills</GradientText>
      </h1>
      <div className="flex flex-col md:flex-row justify-around gap-10">
        <SkillsCard
          className="flex-1"
          title={'前端'}
          titleIcon={<FaReact />}
          titleColor="text-cyan-500"
          itemList={[
            { itemIcon: <FaJsSquare />, itemTitle: 'JavaScript' },
            { itemIcon: <FaReact />, itemTitle: 'React' },
            { itemIcon: <RiTailwindCssFill />, itemTitle: 'Tailwind' },
          ]}
        />
        <SkillsCard
          className="flex-1"
          title={'開發工具'}
          titleIcon={<SiVite />}
          titleColor="text-fuchsia-500"
          itemList={[
            { itemIcon: <SiVite />, itemTitle: 'Vite' },
            { itemIcon: <FaGithub />, itemTitle: 'Github' },
            { itemIcon: <SiEslint />, itemTitle: 'Eslint' },
          ]}
        />
        <Card className="flex-1">
          <div className="mb-5">
            <h2 className="text-2xl text-gray-500 font-bold">核心</h2>
          </div>
          <div>
            <ul>
              {['ES6+ JavaScript', 'RWD 響應式設計', 'Js效能優化'].map(
                (item) => (
                  <li key={item} className="mb-1">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
}
