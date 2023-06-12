import Projects from '@/components/projects/Projects'
import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Projectspage.module.css'
import web from '../../public/image/web.jpg'
import web2 from '../../public/image/web2.jpg'
import web3 from '../../public/image/web3.jpg'
import buga from '../../public/image/bugaprojects.jpg'
import emprendedor from '../../public/image/emprendedor.jpg'
import Layout from '@/components/layout/Layout'
import Title from '@/components/title/Title'


const projects = () => {
    return (
        <>
        <Head>
            <title>Proyectos</title>
            <meta name="description" content="Generated by create next app" />
        </Head>
        <main>
            <Layout>
            <div className={styles.project_flex}>
                <Title title={'Imaginación y Triunfos'}/>
                <Title title={' ¡Conocimiento!'}/>
                
            <div>
                <div className={styles.project_container}>
                    <Projects
                    title="Pagina de ensayo "
                    img={emprendedor}
                    summary="Una pagina de React FullStack MERN "
                    link="https://directorio-emprendedor.vercel.app"
                    github="/"
                    type="sitio web"
                    />

                    <Projects
                    title="Pagina de ensayo "
                    img={buga}
                    summary="Una pagina de React trasladada a Next "
                    link="https://mi-pueblo.vercel.app"
                    github="/"
                    type="sitio web"
                    />
                
                    <Projects
                    title="Portafolio Prueba"
                    img={web}
                    summary="Un sitio web en React, ensayos de portafolios"
                    link="https://portafolio2hey.netlify.app"
                    github="/"
                    type="Portafolio sitio web"
                    />
                
                    <Projects
                    title="Portafolio Prueba"
                    img={web2}
                    summary="Un sitio web en React, ensayos de portafolios"
                    link="https://portafolioheynar.netlify.app"
                    github="/"
                    type="Portafolio sitio web"
                    />
                    <Projects
                    title="prueba titulo"
                    img={web3}
                    summary="Un sitio web en React, en mis inicios de practica"
                    link="https://turismobuga.netlify.app/"
                    github="/"
                    type="sitio web"
                    />
                </div>
            </div>
            </div>
            </Layout>
        </main>
    </>
    )
}

export default projects