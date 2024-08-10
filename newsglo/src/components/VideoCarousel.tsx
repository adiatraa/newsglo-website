'use client';

import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from '../components/VideoCarousel.module.css';
import Image from "next/image";
import thumb from '../../public/display.jpg';
import { PlayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import basket from '../../public/basket.jpeg';
import artificial from '../../public/artificial.webp';
import indonesia from '../../public/indonesia.webp';
import roblox from '../../public/roblox.jpg';

export function VideoCarousel() {
    const [emblaRef, embla] = useEmblaCarousel();
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (embla) {
            embla.on('select', () => {
                setSelectedIndex(embla.selectedScrollSnap());
            });
        }
    }, [embla]);

    const videoData = [
        {
            title: "World Cup qualifying hopes grow for Indonesia's heroes",
            category: "SPORTS",
            image: indonesia,
        },
        {
            title: "Can You Be Emotionally Reliant on an A.I. Voice? OpenAI Says Yes.",
            category: "TECHNOLOGY",
            image: artificial,
        },
        {
            title: "It's Steph's world: Curry's hot shooting gets USA another gold",
            category: "SPORTS",
            image: basket,
        },
        {
            title: "The growing influence of virtual gaming platforms like Roblox on how we interact online",
            category: "GAMES",
            image: roblox,
        },
        {
            title: "It's Steph's world: Curry's hot shooting gets USA another gold",
            category: "SPORTS",
            image: basket,
        },
    ];

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div
                className={`${styles.embla__container} ${selectedIndex === 1 ? styles.centerSecondCard : ""
                    }`}
            >
                {videoData.map((video, index) => (
                    <div className={styles.embla__slide} key={index}>
                        <div className={styles.videoCard}>
                            <Image
                                src={video.image || thumb}
                                alt="Video Thumbnail"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-sm"
                            />
                            <div className={styles.videoOverlay}>
                                <span className={styles.videoCategory}>{video.category}</span>
                                <h3 className={styles.videoTitle}>{video.title}</h3>
                            </div>
                            <Link href="#">
                                <div className={styles.playButton}>
                                    <PlayIcon className='h-6 w-6 text-black' />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
