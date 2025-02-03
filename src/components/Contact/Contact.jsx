import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Kontak</h2>
        <p>Hubungi Saya</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=target@javiquentino@gmail.com" target="_blank">javiquentino@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://linkedin.com/in/javier-guntara-b98409344" target="_blank">linkedin.com/in/javierguntara</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Javierguntara" target="_blank">github.com/Javierguntara</a>
        </li>
      </ul>
    </footer>
  );
};