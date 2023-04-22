import React from 'react'
import Layout from '../layout/Layout'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Layout >
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        </Layout>
    </footer>
  )
}

export default Footer