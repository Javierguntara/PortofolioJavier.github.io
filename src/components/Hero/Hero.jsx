import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, saya Javi</h1>
        <p className={styles.description}>
            Saya seorang Programmer website dan UI/UX Designer. 
            Saya seorang lulusan Informatika dari Universitas Atma Jaya Yogyakarta.
            Hubungi saya dengan meng-klik tombol dibawah ini !
        </p>
        <a style={{display: "table-cell"}} href="https://wa.me/082133312150"  target="_blank" className={styles.contactBtn}>
          Hubungi Saya  </a>
        </div>
        <img src={getImageUrl("fotoku/Pasfoto_javier-removebg-preview.png")} 
        alt="pas foto javier" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
  </section>
  );
}
