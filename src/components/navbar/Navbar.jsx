import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from './Navbar.module.css'
import Logo from '../../../public/image/logohs.png'
import { FaFaBars, FaFaTimes, File, Folder, Github, Home, Html, Linkend, PythonL, Tableau, User } from '../icon/index'
import {Navbarmovile, CustomLink} from './Navbarmovile'


const Navbar = () => {

    return (
        <header className={styles.navbar_header}>
                <nav className={styles.navbar_container}>
                        <CustomLink href="/" title='Home' />
                        <CustomLink href="/about" title='About' />
                        <CustomLink href="/projects" title='Projects ' />
                        <CustomLink href="/article" title='Data analyst' />
                </nav>
                    <Link href="/" className={styles.navbar_logo_link}><Image className={styles.navbar_logo} src={Logo} alt='logo' priority={true} /></Link>
                <nav className={styles.navbar_icon}>
                    <Link href="https://github.com/heynar-max" target={"_blank"} ><Github/></Link>
                    <Link href="https://public.tableau.com/app/profile/heynar.soto.holguin" target={"_blank"} ><Tableau/></Link>
                    <Link href="https://www.linkedin.com/in/heynar-soto-holguin-bb7a43213/" target={"_blank"} ><Linkend/></Link>
                </nav>

                <nav className={styles.navbar_footer}>
                    <div className={styles.ensayo}>
                            <Navbarmovile className={styles.otro} href='/' icon={<Home/>} title='Home' />
                            <Navbarmovile className={styles.otro} href='/about' icon={<User/>} title='About' />
                            <Navbarmovile className={styles.otro} href='/projects' icon={<Folder/>} title='Projects' />
                            <Navbarmovile className={styles.otro} href='/article' icon={<File/>} title='Data' />
                    </div>
                            </nav>
            
        </header>
    )
}

export default Navbar