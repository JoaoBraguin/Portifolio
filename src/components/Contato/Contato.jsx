import style from './Contato.module.css'
import imgtrabalho from '../../images/imgtrabalho.png'


export default function Contato() {
    return (
        <>
            <section className={style.container}>
                <div className={style.esq}>
                    <h1>Envie uma mensagem</h1>
                    <h2>Estou sempre aberto a novos projetos e oportunidades de trabalho. Se voce tem alguma ideia ou projeto em mente entre em contato comigo.</h2>
                    <img src={imgtrabalho} alt="" />
                </div>
                <div className={style.dir}>
                    <input type="Name" placeholder='Nome' />
                    <input type="Email" placeholder='Email' />
                    <input type="password" placeholder='Senha' />
                    <input className={style.msg} type="text" placeholder='Mensagem'  />
                    <div className={style.botao}>
                        <button>
                              Enviar
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}