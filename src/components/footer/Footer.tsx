export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24 bg-gray-900/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-2 text-center text-gray-500 text-sm">
        <p className="font-mono text-xs text-gray-400">
          &copy; {`${new Date().getFullYear()} `}
          <span className="text-gray-300 font-medium">宋鎮佑</span> 版權所有。
        </p>

        <p className="text-xs text-gray-600">
          構建於 <span className="text-cyan-500/80">React</span>,{' '}
          <span className="text-violet-400/80">Vite</span> &{' '}
          <span className="text-sky-400/80">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
