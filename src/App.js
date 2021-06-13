import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Features from './components/Features'
import Plans from './components/Plans'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="App">
        <Header />
            <Hero />
            <Features />
            <Plans />
            <FAQ />
        <Footer />
    </div>
  );
}

export default App;
