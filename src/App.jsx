import "./App.css";
import Header from "./components/Header/header";
import Ribbons from './components/Ribbons/Ribbons'
import Particles from './components/Hero/Hero';
import Habilidades from './components/Habilidades/Habilidades'
import Footer from "./components/Footer/Footer";
import Sobre from "./components/SobreMim/Sobre";


function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
        <Ribbons
          baseThickness={30}
          colors={['#ffffff']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
        />
      </div> */}
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Habilidades/>
      <Sobre/>
      <Footer/>
    </>
  );
}

export default App;
