import Head from 'next/head'
import React from 'react'
import styles from '@/styles/About.module.css'
import Image from 'next/image'
import Foto from '../../public/image/foto.jpg'
import Layout from '@/components/layout/Layout'
import Skills from '@/components/skill/Skills'
import Experience from '@/components/experience/Experience'

const about = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <main >
                <Layout>
                    <div className={styles.about}>
                        <div className={styles.about_title_containe}>
                            <h1 className={styles.title}>Pasión Por Lo Que Se Sueña </h1>
                            <h1 className={styles.title}>¡Objetivos! </h1>
                        </div>
                
                <div className={styles.about_grid}>
                    <div className={styles.about_text}>
                        <h2 className={styles.about_title}>Biografia</h2>
                        <p className={styles.about_parrafo}>Hola, soy Heynar Soto Holguin , Desarrollador web y estudiante de la data scientist (ciencia de datos) apasionado por crear experiencias digitales hermosas, funcionales y centradas en el usuario. Con 1 año de experiencia en React. Siempre estoy buscando formas nuevas e innovadoras de hacer realidad las visiones de mis proyectos.</p>
                        <p className={styles.about_parrafo}>Creo que el desarrollo web es algo más : se trata de resolver problemas y crear experiencias intuitivas y agradables para los usuarios.</p>
                        <p className={styles.about_parrafo}>Ya sea que esté trabajando en un sitio web, una aplicación móvil u otro producto digital, aporto mi compromiso con la excelencia en el diseño y el pensamiento centrado en el usuario a cada proyecto en el que trabajo. Espero con interés la oportunidad de aportar mis habilidades y pasión a su próximo proyecto.</p>
                    </div>
                    <div className={styles.about_center}>
                        <figure className={styles.about_figure}>
                            <Image className={styles.about_imagen} src={Foto} alt="heynar Soto Holguin" />
                        </figure>
                    </div>
                </div>
                        <div className={styles.about_articule}>
                            <div className={styles.about_article_num}>
                                <span className={styles.about_span}>
                                    10+
                                </span>
                                <p className={styles.about_lee}>Proyectos React</p>
                            </div>
                            <div className={styles.about_article_num}>
                                <span className={styles.about_span}>
                                    3+
                                </span>
                                <p className={styles.about_lee}>Analisis Datos</p>
                            </div>
                            <div className={styles.about_article_num}>
                                <span className={styles.about_span}>
                                    1+
                                </span>
                                <p className={styles.about_lee}>Años Experiencia</p>
                            </div>
                            
                        </div>
                </div>
                <Skills/>
                <Experience/>
            </Layout>
            </main>
        </>
    )
}

export default about