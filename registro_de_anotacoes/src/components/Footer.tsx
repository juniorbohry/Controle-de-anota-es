import React from 'react';
import styles from "./Footer.module.css"
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='https://github.com/juniorbohry'><BsGithub /></a>
      <a href='https://www.linkedin.com/in/gilmar-bohry-junior/'><BsLinkedin /></a>
    </footer>
  )
}
export default Footer