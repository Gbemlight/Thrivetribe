import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Founder from './components/Founder';
import Creed from './components/Creed';
import JoinSection from './components/JoinSection';

function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Hero />
      <About />
      <Mission />
      <Vision />
      <Founder />
      <Creed />
      <JoinSection />
      
      {/* Footer */}
      <footer className="bg-[#00563B] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold mb-2">The Thrive Tribe</p>
          <p className="text-sm text-white/80">
            Built To Grow. Bound To Thrive.
          </p>
          <p className="text-xs text-white/60 mt-4">
            © {new Date().getFullYear()} The Thrive Tribe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
