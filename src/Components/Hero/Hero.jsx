import React from 'react'

import {getImageUrl} from '../../util'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Judhistir</h1>
            <p className={styles.desctiption}>I am a fullStack Developer with 1 year Experience using React and NodeJS. Reach out if you want to Learn More</p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="" className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
