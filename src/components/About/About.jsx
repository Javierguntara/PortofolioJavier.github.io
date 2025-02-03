import React from 'react'

import styles from "./about.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return ( 
  <section className={styles.container} id="about">
        <h2 className={styles.title}>tentang saya</h2>
    <div className={styles.content}>
        <div className={styles.imageWrapper}>
        <img src={getImageUrl("fotoku/DSC_0198-removebg-preview.png")}
        alt="javier wisuda" 
        className={styles.aboutImage}
        />
        </div>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("icon/web programmer.png")}
                alt="icon web" />
                <div className={styles.aboutItemText}>
                    <h3>Website Developer</h3>
                    <p>
                        Saya seorang fresh graduate  yang memiliki keahlian dalam berbagai teknologi web, termasuk HTML, CSS, JavaScript, PHP, dan MySQL. Dengan pengalaman dalam merancang dan mengembangkan situs web yang responsif dan dinamis, 
                        saya berkomitmen untuk menciptakan pengalaman pengguna yang luar biasa.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("icon/ui ux icon.png")}
                alt="ui ux icon" />
                <div className={styles.aboutItemText}>
                    <h3>UI/UX Designer</h3>
                    <p>
                        Saya memiliki pengalaman dalam mendesain tampilan antarmuka website yang ramah pengguna, intuitif serta estetis. 
                        Dengan pengalaman pengerjaan Tugas Akhir/Skripsi saya dalam merancang antarmuka yang user-friendly dan meningkatkan alur interaksi pengguna 
                        saya merasa desain suatu website merupakan salah satu kunci keberlangsungan sistem
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("icon/network engineer.png")}
                alt="jaringan icon" />
                <div className={styles.aboutItemText}> 
                    <h3>Network Engineer</h3>
                    <p>
                        Saya memiliki minat yang besar dalam teknologi jaringan dengan pemahaman dasar dalam
                        konsep dasar jaringan komputer, dan pengoperasian Cisco Packet Tracer. Saya antusias dan siap untuk
                        berkembang dan berkomitmen untuk memberikan kontribusi dalam industri ini.
                    </p>
                </div>
            </li>
        </ul>
    </div>
    </section>
  )
}
