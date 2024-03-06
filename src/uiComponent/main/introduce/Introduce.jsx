'use client';
import React, { useEffect, useState } from 'react';
import styles from './Introduce.module.css';
import Image from 'next/image';
const TypingText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            // Kiểm tra xem currentIndex có vượt qua kích thước của text không
            const interval = setInterval(() => {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 30); // Thay đổi tốc độ ở đây nếu bạn muốn

            return () => clearInterval(interval);
        }
    }, [text, currentIndex]);

    return <p className={styles.text}>{displayText}</p>;
};
const Introduce = () => {
    return (
        <div className={styles.introduce}>
            <div className={styles.wrapper}>
                <div className={styles.textContainer}>
                    <TypingText text="First of all, let me introduce myself. I am Little Paul, you can call me Paulie. I will be your guide throughout this small journey. The journey serves two purposes, firstly to gain a better understanding of the injustices, power, strength, and greatness of women. And ultimately, the biggest purpose is: Happy International Women's Day, Tran Huyen Tran - who is called Daisy. I hope you have some exciting moments during this journey ♥" />
                    <Image className={styles.scroll} src="/scroll.png" alt="scroll" width={50} height={50} />
                </div>

                <Image src="/greeting.gif" unoptimized width={380} height={350} className={styles.image} />
            </div>
        </div>
    );
};

export default Introduce;
