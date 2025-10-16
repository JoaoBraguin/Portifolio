import style from './Projetos.module.css'
import { FiGithub } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import sobrebarbarian from '../../images/sobrebarbarian.png'
import homeguris from '../../images/homeguris.png'
import homeinv from '../../images/homeinv.png'

export default function Projetos() {
    return (
        <>
            <div className={style.text}>
                <h1>Projetos & Experiencias</h1>
            </div>
            <section className={style.container}>
                <div className={style.all}>
                    <img src={sobrebarbarian} alt="" />
                    <h2>Barbarian</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className={style.habi}>
                        <div className={style.skills}>
                            <span>HTML</span>
                        </div>
                        <div className={style.skills}>
                            <span>CSS</span>
                        </div>
                        {/* <div className={style.skills}>
                            <span>React</span>
                        </div> */}
                    </div>
                    {/* <div className={style.champion}>
                        <p> <FaCrown />Campeões</p>
                    </div> */}
                    <div className={style.depends}>
                        <div className={style.git}>
                            <a href="https://github.com/JoaoBraguin/Barbarian"> <FiGithub />Git Hub</a>
                        </div>
                        <div className={style.https}>
                            <a href=""> <CiGlobe />Site</a>
                        </div>
                    </div>
                </div>
                <div className={style.all}>
                    <img src={homeguris} alt="" />
                    <h2>Guris</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className={style.habi}>
                        <div className={style.skills}>
                            <span>PHP</span>
                        </div>
                        <div className={style.skills}>
                            <span>CSS</span>
                        </div>
                        {/* <div className={style.skills}>
                            <span>React</span>
                        </div> */}
                    </div>
                    {/* <div className={style.champion}>
                        <p> <FaCrown />Campeões</p>
                    </div> */}
                    <div className={style.depends}>
                        <div className={style.git}>
                            <a href=""> <FiGithub />Git Hub</a>
                        </div>
                        <div className={style.https}>
                            <a href=""><CiGlobe /> Site</a>
                        </div>
                    </div>
                </div>
                <div className={style.all}>
                    <img src={homeinv} alt="" />
                    <h2>INV</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className={style.habi}>
                        <div className={style.skills}>
                            <span>React</span>
                        </div>
                        <div className={style.skills}>
                            <span>Next.js</span>
                        </div>
                        {/* <div className={style.skills}>
                            <span>React</span>
                        </div> */}
                    </div>
                    <div className={style.depends}>
                        <div className={style.git}>
                            <a href="https://github.com/JoaoBraguin/INV"> <FiGithub />Git Hub</a>
                        </div>
                        <div className={style.https}>
                            <a href=""> <CiGlobe />Site</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}