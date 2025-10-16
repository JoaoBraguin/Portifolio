import { FaReact } from "react-icons/fa";
import style from './Hablidades.module.css'
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


export default function Habilidades() {
    return (
        <>
            <div className={style.text}>
                <h1>Habilidades</h1>
            </div>
            <section className={style.container}>
                <div className={style.cards}>
<<<<<<< HEAD
                    <FaHtml5 className={style.html} />
=======
                    <FaHtml5 />
>>>>>>> a85647b46ce3b0e31b5e89b39792707110fc5d13
                    <h1>Html</h1>
                    <p>Tenho experiência com HTML, criando estruturas bem organizadas, semânticas e acessíveis para páginas web. Busco sempre seguir boas práticas e manter um código limpo e estruturado, garantindo que o conteúdo seja fácil de entender e otimizado para todos os dispositivos.</p>
                </div>
                <div className={style.cards}>
<<<<<<< HEAD
                    <FaCss3Alt className={style.css} />
=======
                    <FaCss3Alt />
>>>>>>> a85647b46ce3b0e31b5e89b39792707110fc5d13
                    <h1>CSS</h1>
                    <p>Trabalho com CSS para transformar layouts simples em interfaces modernas e atraentes. Domino Flexbox e Grid, além de animações e transições que deixam os projetos mais dinâmicos. Gosto de criar designs responsivos e agradáveis, que se adaptam a qualquer tamanho de tela.</p>
                </div>
                <div className={style.cards}>
<<<<<<< HEAD
                    <RiJavascriptFill className={style.java} />
=======
                    <RiJavascriptFill />
>>>>>>> a85647b46ce3b0e31b5e89b39792707110fc5d13
                    <h1>JavaScript</h1>
                    <p>Utilizo JavaScript para dar vida às aplicações, criando interatividade e lógica de forma eficiente. Tenho experiência com manipulação do DOM, consumo de APIs e uso de recursos modernos do ES6+. Busco sempre escrever códigos claros, reaproveitáveis e voltados para uma boa experiência do usuário.</p>
                </div>
                <div className={style.cards}>
<<<<<<< HEAD
                    <FaReact className={style.react} />
=======
                    <FaReact />
>>>>>>> a85647b46ce3b0e31b5e89b39792707110fc5d13
                    <h1>React</h1>
                    <p>Com React, desenvolvo interfaces reativas e componentizadas, focando em performance e escalabilidade. Tenho prática com hooks, gerenciamento de estado e integração com APIs externas. Gosto de construir aplicações front-end organizadas, intuitivas e com uma ótima experiência para o usuário.</p>
                </div>
            </section>


        </>
    )
}