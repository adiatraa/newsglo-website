'use client';

import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from '../components/VideoCarousel.module.css';
import Image from "next/image";
import thumb from '../../public/display.jpg';
import { PlayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
 
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
      title: "Men may be 2.5 times more likely to die from COVID-19 than women",
      category: "HEALTH",
    },
    {
      title: "Men may be 2.5 times more likely to die from COVID-19 than women",
      category: "HEALTH",
    },
    {
      title: "Men may be 2.5 times more likely to die from COVID-19 than women",
      category: "HEALTH",
    }
  ];

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div
        className={`${styles.embla__container} ${
          selectedIndex === 1 ? styles.centerSecondCard : ""
        }`}
      >
        {videoData.map((video, index) => (
          <div className={styles.embla__slide} key={index}>
            <div className={styles.videoCard}>
              <Image
                src={thumb}
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
