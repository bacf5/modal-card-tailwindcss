import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Interests from './components/Interests';

function App() {
  return (
    <div className="p-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-x-4">
      <div>
        <Info />
      </div>
      <div>
        <About />
        <Interests />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
