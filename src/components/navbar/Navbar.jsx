import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from './Navbar.module.css'
import Logo from '../../../public/image/logohs.png'
import { Github, Linkend, Tableau } from '../icon/index'


const CustomLink =({href, title}) =>{

    const router = useRouter()

    return(
        <Link href={href} className={styles.navbar_link}>
            {title}
            <span className={router.asPath === href ? (styles.w_full) : (styles.navbar_span)}
            >&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
    return (
        <header className={styles.navbar_header}>
            <nav>
                <CustomLink href="/" title='Home'/>
                <CustomLink href="/about" title='About'/>
                <CustomLink href="/projects" title='Projects '/>
                <CustomLink href="/article" title='Analisis'/>
            </nav>
            <Link href="/"><Image className={styles.navbar_logo} src={Logo} alt='logo' priority={true} /></Link>
            <nav className={styles.navbar_icon}>
                <Link href="https://github.com/heynar-max" target={"_blank"}><Github/></Link>
                <Link href="https://public.tableau.com/app/profile/heynar.soto.holguin" target={"_blank"}><Tableau/></Link>
                <Link href="https://www.linkedin.com/in/heynar-soto-holguin-bb7a43213/" target={"_blank"}><Linkend/></Link>
            </nav>
        </header>
    )
}

export default Navbar