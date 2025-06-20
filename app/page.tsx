import Navbar from './components/navbar/page';
import Footer from './components/footer/page';
import Projects from './components/projects/page';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}
