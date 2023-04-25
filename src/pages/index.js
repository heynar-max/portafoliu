import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Pinture from '../../public/image/developer.png'
import Link from 'next/link'



export default function Home() {
  return (
    <>
    <Head>
      <title>Portafolio</title>
      <meta name="description" content="Generated by create next app" />
    </Head>  
      <main>
        <Layout>
          <div className={styles.home_container}>
            <figure className={styles.home_figure}>
              <Image className={styles.home_img} src={Pinture} alt='Heynar Soto Holguin' priority={true}/>;
            </figure>
          <div>
            <h1 className={styles.home_h1}>Torneado Visión En Realidad Con Código Y Diseño.</h1>
            <p className={styles.home_text}>Como desarrollador full-stack experto, me dedico a convertir ideas en aplicaciones web innovadoras. Explore mis últimos proyectos y artículos, mostrando mi experiencia en React.js y desarrollo web.</p>
            <div >
              <Link className={styles.home_botton} href='mailto:heynar76@hotmail.com' target={'_blank'}>Contacto</Link>
            </div>
          </div>
        </div>
        </Layout>
      </main>
    </>
  )
}
