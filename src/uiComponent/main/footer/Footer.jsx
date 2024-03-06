import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <Image
                src="/daisy.jpg"
                alt="bg"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                loading="lazy"
                className={styles.background}
            />
            <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                    <div className={styles.cover}>
                        <Image
                            alt="ava"
                            className={styles.letter}
                            src="/letter2.jpg"
                            width={500}
                            height={400}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.detallTitleContainer}>
                            <h2 className={styles.detailTitle}>
                                Gửi: Trần Huyền Trân<div className={styles.separate}></div>
                            </h2>
                        </div>
                        <div className={styles.techContainer}>
                            <p>
                                Hello Trân! Là tôi Quân Từ đây, Trân có thể gọi tôi là Paulie cũng được. Yeah, đến đây
                                là hết web rồi, và phía trên kia là tất cả những gì Quân muốn chúc Trân ngày hôm nay.
                                Luôn luôn khỏe mạnh và xinh đẹp như chính loài hoa mà Trân yêu thích, tôi cũng thích hoa
                                này lắm. Luôn luôn tươi cười, có thể nói sao nhỉ, Trân có một nụ cười siêu xinh cơ.
                                Nhưng tôi bảo này, sau này chí ít với riêng tôi, hãy cười khi Trân thật sự vui, còn nếu
                                Trân buồn thì không được như thế nhé. Vì tôi luôn ở đây để có thể lắng nghe Trân, tôi
                                muốn được vui với Trân và buồn cùng Trân. Và cuối cùng là luôn luôn hạnh phúc nhé, hạnh
                                phúc bên gia đình, bạn bè, và tất cả mọi thứ xung quanh Trân luôn ♥. Mong Trân thích món
                                quà nhỏ đầu tiên này của Quân, thời gian hơi gấp rút nên có thể chưa được trọn vẹn lắm.
                                Hehe! Chúc Trân có một ngày 8/3 thật đặc biệt nhé.^^{' '}
                            </p>
                            <span style={{ fontWeight: 600, fontFamily: 'var(--love-font)', fontSize: '20px' }}>
                                From: Paulie
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
