'use client';
import React, { useState } from 'react';
import styles from './Slider.module.css';
import { PiCaretCircleRightDuotone, PiCaretCircleLeftDuotone } from 'react-icons/pi';
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
    };

    return (
        <div className={styles.slider}>
            <div className={styles.headerContainer}>
                <h1 className={styles.header}>About women</h1>
                <div className={styles.separate}></div>
            </div>
            <div className={styles.slide} style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
                <div className={styles.slideWrapper}>
                    <div className={styles.titleContainer}>
                        {' '}
                        <h1 className={styles.title}>
                            A message to all women: Who are they? What can they do? What do they deserve?
                        </h1>
                    </div>
                    <iframe
                        style={{ borderRadius: '10px' }}
                        width="600"
                        height="450"
                        src="https://www.youtube.com/embed/uWi5iXnguTU"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div className={styles.slide} style={{ transform: `translateX(${-currentSlide * 100 + 0}%)` }}>
                <div className={styles.slideWrapper}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>
                            Video about the strength of women, they can do everything just like men. From work to
                            everything in life.
                        </h1>
                    </div>
                    <iframe
                        style={{ borderRadius: '10px' }}
                        width="600"
                        height="450"
                        src="https://www.youtube.com/embed/cXzlxlDBYy0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div className={styles.slide} style={{ transform: `translateX(${-currentSlide * 100 + 0}%)` }}>
                <div className={styles.slideWrapper}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>
                            {' '}
                            These inspirational women speak on being grateful for who we are today, the obstacles we
                            have overcome, letting go of preconceived ideas for how we should be, and owning our truth.
                            These powerful women agree that this is how we will become the most authentic versions of
                            ourselves and that joy is found in being present, for ourselves, and for each other.
                        </h1>
                    </div>
                    <iframe
                        style={{ borderRadius: '10px' }}
                        width="600"
                        height="450"
                        src="https://www.youtube.com/embed/PevJNGMUEnc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div className={styles.slide} style={{ transform: `translateX(${-currentSlide * 100 + 0}%)` }}>
                <div className={styles.slideWrapper}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.description}>
                            For me, after experiencing numerous relationships and learning about women, I find them
                            truly magnificent. They are born with delicate limbs, yet they bear the weight of countless
                            responsibilities such as childbirth and child-rearing. This inherent inequality, however, is
                            also a noble mission bestowed upon them by the divine. Across the globe, there are countless
                            women who command respect from the world due to their intelligence and indomitable spirit,
                            which rival that of men. Some women have even changed the course of history. Women remain
                            versatile, at times, they are like gentle cats in need of nurturing and support, while at
                            others, they transform into powerful tigers capable of facing any challenge in life. They
                            deserve an abundance of love and empathy. Happy International Women's Day.
                        </h1>
                    </div>
                </div>
            </div>
            <PiCaretCircleRightDuotone onClick={nextSlide} size={50} className={styles.right} />
            <PiCaretCircleLeftDuotone onClick={prevSlide} size={50} className={styles.left} />
        </div>
    );
};

export default Slider;
