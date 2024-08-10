'use client';

import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/TrendingSlide.module.css';
import display from '../../public/display.jpg';

interface TrendingCarouselAttributes {
  articles: {
    title: string;
    byline: string;
    url: string;
    multimedia?: { url: string }[];
  }[];
}

export default function TrendingCarousel({ articles }: TrendingCarouselAttributes) {
  const [emblaRef] = useEmblaCarousel({ loop: false });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Side Article
  const startIndex = (currentPage - 1) * itemsPerPage + 1; 
  const sideArticles = articles.slice(startIndex, startIndex + itemsPerPage);
  const largeSlideArticle = articles[0]; 

  // Handle Pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Large Slide
  const largeSlideIndex = (currentPage - 1) * itemsPerPage;
  const largeSlideArticleForPage = articles[largeSlideIndex] || largeSlideArticle;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Trending Now</h2>
        <div className={styles.pagination}>
          {[1, 2, 3, 4, 5].map((page) => (
            <span
              key={page}
              className={page === currentPage ? styles.active : ''}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {/* Slide Large */}
          <Link href={largeSlideArticleForPage.url} className={styles.embla__slide_large}>
            <Image
              src={largeSlideArticleForPage.multimedia && largeSlideArticleForPage.multimedia.length > 0 ? largeSlideArticleForPage.multimedia[0].url : display} 
              alt={largeSlideArticleForPage.title}
              width={800} 
              height={450}
              className={styles.imageLarge}
            />
            <div className={styles.textOverlay}>
              <p className={styles.category}>Trending</p>
              <h3 className={styles.title}>{largeSlideArticleForPage.title}</h3>
              <p className={styles.authorTime}>Author | {largeSlideArticleForPage.byline}</p>
            </div>
          </Link>
          {/* Side List Container */}
          <div className={styles.sideListContainer}>
            <div className={styles.sideList}>
              {sideArticles.map((article, index) => (
                <Link href={article.url} className={styles.sideItem} key={index}>
                  <Image
                    src={article.multimedia && article.multimedia.length > 0 ? article.multimedia[0].url : display}
                    alt="Thumbnail Image"
                    width={80}
                    height={80}
                    className={styles.imageSmall}
                  />
                  <div className={styles.sideText}>
                    <p className={styles.category}>Trending</p>
                    <h3 className={styles.titleSmall}>{article.title}</h3>
                    <p className={styles.authorTimeSmall}>Author | {article.byline}</p>
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
