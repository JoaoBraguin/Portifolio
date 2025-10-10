import style from './Footer.module.css'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <section className={style.container}>
                <div className={style.container2}>
                    <div className={style.about}>
                        <div className={style.me}>
                            <IoCodeSlashOutline /> <h1>João Pedro</h1>  <IoCodeSlashOutline />
                        </div>
                        <strong>Desenvolvedor Front-end apaixonado por criar experiencias unicas web incriveis e funcionais. Especializados em React, Next.js e design responsivo.</strong>
                    </div>
                    <div className={style.contact}>
                        <h1>Contato</h1>
                        <div className={style.info}>
                            <MdEmail /><p>joaopedromoares76@gmail.com</p>
                        </div>
                        <div className={style.info}>
                            <FaLocationDot /><p>Jaboticabal, São Paulo</p>
                        </div>
                    </div>
                </div>
                <div className={style.line}>
                    <hr />
                </div>
                <div className={style.final}>
                    <div className={style.iconsfinal}>
                        <div className={style.iconwhats}>
                            <FaWhatsapp />
                        </div>
                        <div className={style.iconfacebook}>
                            <FaFacebook />
                        </div>
                        <div className={style.iconyoutube}>
                            <FaYoutube />
                        </div>
                    </div>
                    <div className={style.textofinal}>
                        <p>@2025. Todos os direitos reservados.</p>
                    </div>
                </div>
            </section>

        </>
    )
}