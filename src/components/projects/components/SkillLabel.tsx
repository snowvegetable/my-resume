export default function SkillLabel({ title }: { title: string }) {
  return (
    <span className="px-3 py-1 text-xs font-mono  rounded-4xl bg-cyan-950 text-cyan-300 border border-cyan-800">
      {title}
    </span>
  );
}
