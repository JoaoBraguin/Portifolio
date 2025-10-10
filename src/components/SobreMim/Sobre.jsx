import style from './Sobre.module.css'

export default function Sobre() {
    return (
        <>
            <section className={style.container}>
                <div className={style.esq}>
                    <h1>Sobre Mim</h1>
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
                    <div className={style.resumo}>
                        <h2>Resumo Rapido</h2>
                        <h3>Nome : João Pedro</h3>
                        <h3>Idade : 17 anos</h3>
                    </div>
                </div>
                <div className={style.dir}>
                    <p>Olá! Atualmte sou estudante do Senai e estou cursando Desenvolvivento de Sistemas, sou apaixonado por Desenvolvimento web. COmo desenvolvedor Front-end, tenho experiencia em React, Next.js, mas meu objetivo é se tornar um desenvolvedor Full-Stack completo. </p>
                    <div className={style.tec}>
                        <p>Minha experiencia abrange varias tecnologias, incluindo <h4>HTML, CSS, JavaScript, Node, React,Next.js e MYSQL</h4> Utilizo essas ferramentas para criar interfaces intuitivas e responsivas sempre buscando a melhor experencia do usuario.</p>
                    </div>
                    <h2>Interesses e Objetivos</h2>
                    <ul className={style.list}>
                        <li>Aprodundar conhecimentos em desenvolvimentos Full-Stack</li>
                        <li>Aprimorar habilidades em UX/UI Design</li>
                    </ul>
                </div>
            </section>


        </>
    )
}