'use client';
import React, { useEffect } from 'react';
import styles from './MainPage.module.css';
import Introduce from '@/uiComponent/main/introduce/Introduce';
import { Howl } from 'howler';
import Slider from '@/uiComponent/main/slider/Slider';
import Wishes from '@/uiComponent/main/wishes/Wishes';
import Footer from '@/uiComponent/main/footer/Footer';
import Cursor from '@/uiComponent/cursor/Cursor';
const sound = new Howl({
    src: ['/thousandsong.mp3'],
    loop: true,
    autoplay: true,
});
const MainPage = () => {
    useEffect(() => {
        sound.play();
        return () => {
            sound.stop();
        };
    }, []);
    return (
        <div className={styles.mainPage}>
            <Cursor />
            <section className={styles.section} id="introduce">
                <Introduce />
            </section>
            <section className={styles.section} id="slider">
                <Slider />
            </section>
            <Wishes />
            <section className={styles.section3} id="footer">
                <Footer />
            </section>
        </div>
    );
};

export default MainPage;
