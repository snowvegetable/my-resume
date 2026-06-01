import HeaderNavbar from './components/header-navbar/HeaderNavbar';
import MainContent from './components/MainContent';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <HeaderNavbar />
      <MainContent />
      <Footer />
    </div>
  );
}
