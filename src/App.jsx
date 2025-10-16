import "./App.css";
import Header from "./components/Header/header";
import Ribbons from './components/Ribbons/Ribbons'
import Particles from './components/Hero/Hero';
<<<<<<< HEAD
import Habilidades from './components/Habilidades/Habilidades'
import Footer from "./components/Footer/Footer";
import Sobre from "./components/SobreMim/Sobre";
import Contato from "./components/Contato/Contato";
import Projetos from "./components/Projetos/Projetos";


=======
import Habilidades from "./components/Habilidades/Habilidades";
>>>>>>> a85647b46ce3b0e31b5e89b39792707110fc5d13
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
<<<<<<< HEAD
      <Sobre/>
      <Contato/>
      <Projetos/>
      <Footer/>
=======
>>>>>>> a85647b46ce3b0e31b5e89b39792707110fc5d13
    </>
  );
}

export default App;
