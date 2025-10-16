import Particles from "../Particles/Particles";
import style from './Hero.module.css'
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Hero() {
    return (
        <section className={style.container}>
            <div className={style.container2}>
                <h1>Opa! Meu nome é</h1>
                <h2>João Pedro Moraes</h2>
                <div className={style.icons}>
                    <div className={style.icon}>
                        <RiLinkedinLine />
                    </div>
                    <div className={style.icon}>
                        <FiGithub />
                    </div>
                    <div className={style.icon}>
                        <FaInstagram />
                    </div>

                </div>
                <div className={style.iconarrow}>
                    <MdKeyboardDoubleArrowDown />
                </div>
            </div>
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
        </section>
    )
}