"use client";
import { images } from "assets";
import Image from "next/image";
import styles from "./about.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ul>
          <li>Me</li>
          <ul>
            <li>A 21 old from Brazil</li>
            <li>Currently learning Rust and Next</li>
          </ul>
          <li>
            <p>Software</p>
            <Image
              className={styles.neofetch}
              src={images.neofetchImg}
              alt="neofetch"
            />
          </li>
          <li>
            <p>Peripherals</p>
            <ul>
              <li>
                <p>Keyboard Redragon Kumara</p>
              </li>
              <li>
                <p>Mouse Redragon Cobra</p>
              </li>
              <li>
                <p>Headphones HyperX Cloud Stinger</p>
              </li>
              <li>
                <p>Microphone Redragon Seyfert</p>
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </div>
  );
}
