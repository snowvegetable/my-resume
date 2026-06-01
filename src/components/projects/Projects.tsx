import GradientText from '../GradientText';
import ProjectCard from './components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="text-5xl mb-15 text-center">
        <GradientText>精選作品/Projects</GradientText>
      </h1>
      <div className="flex flex-col md:flex-row md:justify-around gap-10">
        <ProjectCard
          className="flex-1 md:max-w-[50%]"
          title="React 模擬電商網站"
          description="使用Vite + React + Tailwind CSS 打造的純前端電商概念驗證。實現商品瀏覽、購物車、模擬結帳流程。核心商業邏輯使用 localStorage 與 Promise 非同步模擬，並在 Vercel 上部署。"
          skillList={[
            'React',
            'Vite',
            'Tailwind',
            'Context API',
            'localStorage',
            'Vercel',
          ]}
        />
        <ProjectCard
          className="flex-1 md:max-w-[50%]"
          title="React 個人履歷網站"
          description="目前您正在瀏覽的網站。專注於展現前端開發技能、現代化樣式與流暢的動態體驗。使用 Vite + React + Tailwind CSS，並部署至 Vercel。"
          skillList={['React', 'Vite', 'Tailwind']}
        />
      </div>
    </section>
  );
}
