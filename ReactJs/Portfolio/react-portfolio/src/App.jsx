import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import projectData from '../data/projectData';
import SkillData from '../data/SkillData';

function App() {
  return (
    <div className="appClass">
      <Navbar />
      <Hero />
      <Skills skillInfo={SkillData} />
      <Projects data={projectData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
