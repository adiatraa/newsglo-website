'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import thumb from '../../public/display.jpg';
import styles from '@/components/TrendingSlide.module.css';

export default function TrendingCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: false });

    const slides = [
        { title: 'Coronavirus: Warning over easing lockdown measures too quickly', author: 'Hula Hula', link: '#' },
        { title: 'Coronavirus: Warning over easing lockdown measures too quickly', author: 'Hula Hula', link: '#' },
        { title: 'Coronavirus: Warning over easing lockdown measures too quickly', author: 'Hula Hula', link: '#' },
        { title: 'Coronavirus: Warning over easing lockdown measures too quickly', author: 'Hula Hula', link: '#' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Trending Now</h2>
                <div className={styles.pagination}>
                    <span className={styles.active}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {/* Slide Large */}
                    <Link href={slides[0].link} className={styles.embla__slide_large}>
                        <Image
                            src={thumb}
                            alt="Thumbnail Image"
                            layout="responsive"
                            width={500}
                            height={300}
                            className={styles.imageLarge}
                        />
                        <div className={styles.textOverlay}>
                            <p className={styles.category}>Health</p>
                            <h3 className={styles.title}>{slides[0].title}</h3>
                            <p className={styles.authorTime}>Author | {slides[0].author}</p>
                        </div>
                    </Link>
                    {/* Side List Container */}
                    <div className={styles.sideListContainer}>
                        <div className={styles.sideList}>
                            {slides.map((slide, index) => (
                                <Link href={slide.link} className={styles.sideItem} key={index}>
                                    <Image
                                        src={thumb}
                                        alt="Thumbnail Image"
                                        layout="fixed"
                                        width={80}
                                        height={80}
                                        className={styles.imageSmall}
                                    />
                                    <div className={styles.sideText}>
                                        <p className={styles.category}>Health</p>
                                        <h3 className={styles.titleSmall}>{slide.title}</h3>
                                        <p className={styles.authorTimeSmall}>Author | {slide.author}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
