import style from './Header.module.css'
import { BsCodeSlash } from "react-icons/bs";
import { BsFillLightningChargeFill } from "react-icons/bs";

export default function Header() {
    return (
        <>
            <div className={style.header}>
                <div className={style.name}>
                    <BsFillLightningChargeFill />  <h1>Moraes</h1>
                </div>
                <nav>
                    <a href="#">Teste</a>
                    <a href="#">Teste</a>
                    <a href="#">Teste</a>
                    <a href="#">Teste</a>
                </nav>
            </div>

        </>
    )
}