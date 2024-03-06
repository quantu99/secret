'use client';
import React, { useEffect, useState, useRef } from 'react';
import styles from './Wishes.module.css';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BsFlower1 } from 'react-icons/bs';
const Wishes = () => {
    const [heartImages, setHeartImages] = useState([
        '/h1.jpg',
        '/h2.jpg',
        '/h3.jpg',
        '/h16.jpg',
        '/h5.jpg',
        '/h6.jpg',
        '/h7.jpg',
        '/h8.jpg',
        '/h9.jpg',
        '/h10.jpg',
        '/h11.jpg',
        '/h12.jpg',
        '/h13.jpg',
        '/h14.jpg',
        '/h15.jpg',
        // Thêm đường dẫn của các hình ảnh khác nếu cần
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heartImages.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [heartImages]); // Thực hiện lại useEffect khi heartImages thay đổi
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
        <div ref={ref} className={styles.wishes}>
            <div className={styles.progress}>
                <h1>&apos;&apos;Always&apos;&apos; wishes for Daisy</h1>
                <motion.div style={{ scaleX: scaleX }} className={styles.progressBar}></motion.div>
            </div>
            <section className={styles.section}>
                <div ref={ref} className={styles.imageContainer}>
                    <Image alt="flame" className={styles.flame} src="/flame.jpg" width={400} height={400} />
                    <Image alt="strong" className={styles.image} src="/strong.png" width={300} height={300} />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.titleContainer}>
                        <BsFlower1 color="#ffab4a" size={14} />
                        <h1 className={styles.title}>Always strong</h1>
                        <BsFlower1 color="#ffab4a" size={14} />
                    </div>
                    <span className={styles.text}>
                        &apos;&apos;I hope you stay healthy, and may you always strive to improve your lifestyle every
                        day. You're quite stubborn, and often forgetful as well. But it's okay, I'm here by your side to
                        remind you every day.&apos;&apos;
                    </span>
                </div>
            </section>
            <section className={`${styles.section} ${styles.section2nd}`}>
                <div ref={ref} className={styles.imageContainer2nd}>
                    <>
                        <label htmlFor="checkbox">
                            <Image
                                alt="ava"
                                src="/pic1.jpg"
                                height={300}
                                width={340}
                                objectFit="cover"
                                className={styles.pic}
                            />
                        </label>
                        <input id="checkbox" type="checkbox" className={styles.checkbox} />
                        <Image
                            alt="ava"
                            src="/pic1.jpg"
                            height={600}
                            width={680}
                            objectFit="cover"
                            className={styles.picModal}
                        />
                        <label htmlFor="checkbox" className={styles.overlay}></label>
                    </>
                    <>
                        <label htmlFor="checkbox2nd">
                            <Image
                                alt="ava"
                                src="/pic3.jpg"
                                height={300}
                                width={270}
                                objectFit="cover"
                                className={styles.pic2}
                            />
                        </label>
                        <input id="checkbox2nd" type="checkbox" className={styles.checkbox2nd} />
                        <Image
                            alt="ava"
                            src="/pic3.jpg"
                            height={600}
                            width={480}
                            objectFit="cover"
                            className={styles.picModal2}
                        />
                        <label htmlFor="checkbox2nd" className={styles.overlay2nd}></label>
                    </>
                    <>
                        <label htmlFor="checkbox3rd">
                            <Image
                                alt="ava"
                                src="/pic4.jpg"
                                height={250}
                                width={320}
                                objectFit="cover"
                                className={styles.pic3}
                            />
                        </label>
                        <input id="checkbox3rd" type="checkbox" className={styles.checkbox3rd} />
                        <Image
                            alt="ava"
                            src="/pic4.jpg"
                            height={550}
                            width={620}
                            objectFit="cover"
                            className={styles.picModal3}
                        />
                        <label htmlFor="checkbox3rd" className={styles.overlay3rd}></label>
                    </>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.titleContainer}>
                        <BsFlower1 color="#ffab4a" size={14} />
                        <h1 className={styles.title}>Always beautiful</h1>
                        <BsFlower1 color="#ffab4a" size={14} />
                    </div>
                    <span className={styles.text}>
                        &apos;&apos;You have a very beautiful smile, sparkling eyes, please always keep that smile on
                        your lips. And I wish you to always be beautiful and happy like this forever.&apos;&apos;
                    </span>
                </div>
            </section>
            <section className={`${styles.section} ${styles.section3rd}`}>
                <div ref={ref} className={styles.heart}>
                    <Image
                        src={heartImages[currentImageIndex]} // Sử dụng đường dẫn từ mảng
                        height={480}
                        width={480}
                        alt="pic"
                        loading="lazy"
                        style={{ transform: 'rotate(0deg)' }}
                        className={styles.heartImage}
                    />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.titleContainer}>
                        <BsFlower1 color="#ffab4a" size={14} />
                        <h1 className={styles.title}>Always happy</h1>
                        <BsFlower1 color="#ffab4a" size={14} />
                    </div>
                    <span className={styles.text}>
                        &apos;&apos;I wish you always find happiness, from now on and forever. Happiness along with
                        everything around you: work, life, family, friends, and that special someone. I wish you can
                        always smile anytime, as I said, your smile is very beautiful. Always be happy,
                        Daisie.&apos;&apos;
                    </span>
                </div>
            </section>
        </div>
    );
};

export default Wishes;
