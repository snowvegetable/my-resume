import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../../../Card';
import SkillLabel from './SkillLabel';

export default function ProjectCard({
  className,
  title,
  description,
  skillList = [],
}: {
  className?: string;
  title: string;
  description: string;
  skillList: string[];
}) {
  return (
    <Card
      className={`group border border-gray-800 hover:border-cyan-500/50 duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] ${className}`}
    >
      <div className=" mb-5 flex justify-between">
        <h2 className="text-2xl group-hover:text-cyan-500">{title}</h2>
        <div className="flex gap-3 text-gray-400 text-xl">
          <a href="#" className="hover:text-cyan-500 transition-colors">
            <FaExternalLinkAlt />
          </a>
          <a href="#" className="hover:text-cyan-500 transition-colors">
            <FaCode />
          </a>
        </div>
      </div>
      <div className="mb-5">
        <p>{description}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {skillList.map((title) => (
          <SkillLabel key={title} title={title} />
        ))}
      </div>
    </Card>
  );
}
