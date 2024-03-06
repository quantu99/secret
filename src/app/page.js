'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect } from 'react';
import Link from 'next/link';
import { BsFlower1 } from 'react-icons/bs';
import { Howl } from 'howler';
import Cursor from '@/uiComponent/cursor/Cursor';
const sound = new Howl({
    src: ['/rosesong.mp3'],
    loop: true,
    autoplay: true,
});
export default function Home() {
    useEffect(() => {
        sound.play();
        return () => {
            sound.stop();
        };
    }, []);
    return (
        <div className={styles.container}>
            <Cursor />

            <Image
                className={styles.image}
                src="/rose.jpg"
                alt="Description of image"
                layout="responsive"
                objectFit="cover"
                width={100}
                height={100}
                aria-disabled
                loading="lazy"
            />
            <div className={styles.textContainer}>
                <h1 className={styles.dear}>For Daisie</h1>
                <h1 className={styles.content}>Happy 8/3- Women&apos;s day</h1>
                <h2 className={styles.end}>With all of my sincerity</h2>
            </div>
            <Link href="/main" className={styles.button}>
                <BsFlower1 size={40} className={styles.icon} />
                <div className={styles.explain}>
                    <p className={styles.explainContent}>Let&apos;s see what we have...</p>
                </div>
            </Link>
        </div>
    );
}
