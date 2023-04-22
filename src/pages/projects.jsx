import Layout from '@/components/layout/Layout'
import Projects from '@/components/projects/projects'
import Head from 'next/head'
import React from 'react'
import developer from '../../public/image/developer.png'
import styles from '@/styles/Home.module.css'

const projects = () => {
  return (
    <>
        <Head>
            <title>Proyectos</title>
            <meta name="description" content="Generated by create next app" />
        </Head>
        <main>
            <div>
                <h1>Imaginación Triunfos ¡Conocimiento!</h1>
            <div>
                <div className={styles.project_container}>
                    <Projects
                    title="prueba titulo"
                    img={developer}
                    summary="este en un ensayo de un parrafo"
                    link="/"
                    github="/"
                    type="proyectos feactud"
                    />
                
                    <Projects
                    title="prueba titulo"
                    img={developer}
                    summary="este en un ensayo de un parrafo"
                    link="/"
                    github="/"
                    type="proyectos feactud"
                    />
                
                    <Projects
                    title="prueba titulo"
                    img={developer}
                    summary="este en un ensayo de un parrafo"
                    link="/"
                    github="/"
                    type="proyectos feactud"
                    />
                </div>
            </div>
            </div>

        </main>
    </>
  )
}

export default projects