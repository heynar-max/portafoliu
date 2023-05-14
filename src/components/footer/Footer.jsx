import React from 'react'
import Layout from '../layout/Layout'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_text}>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer