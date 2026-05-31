import HeaderNavbar from './components/HeaderNavbar';
import MainContent from './components/MainContent';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <HeaderNavbar />
      <MainContent />
    </div>
  );
}
