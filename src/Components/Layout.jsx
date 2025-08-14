import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BannerBottom from '../Components/BannerBottom';
import Testimonials from '../Components/Testimonials';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
      
        <main className="flex-1 p-4 bg-white">
          {children}
        </main>
      </div>
        <BannerBottom/>
    <Testimonials/>
      <Footer />
    </div>
  );
}