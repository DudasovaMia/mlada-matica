"use client";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/FotogaleriaAkcia.module.scss";
import { galeria } from "@/app/constants/data";
import Link from "next/link";

const Akcia = ({ params }: { params: { nazov: string } }) => {
  const [open, setOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < post.obrazky.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getURLFriendlyName = (name: string) => {
    const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return normalized.toLowerCase().replace(/\s+/g, "-");
  };
  console.log(getURLFriendlyName(params.nazov));

  const post: any = galeria.find(
    (post) =>
      getURLFriendlyName(post.nazov) === getURLFriendlyName(params.nazov)
  );
  console.log(post);

  const getDirectImageUrl = (url: any) => {
    const fileId = url.match(/\/file\/d\/(.+?)\//)[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  if (!post) {
    return <div className={styles.wrapper}>Post not found!</div>;
  }

  const generateUniqueIdFromImageUrl = (imageUrl: any) => {
    let uniqueId = imageUrl.charAt(4) + imageUrl.charAt(11);

    for (let i = 0; i < 4; i++) {
      const randomNum = Math.floor(Math.random() * 10);
      uniqueId += randomNum;
    }

    return uniqueId;
  };

  return (
    <div className={styles.wrapper}>
      {open ? (
        <div className={styles.akcia}>
          <div className={styles.textWrapper}>
            <span className={styles.nazov}>{post.nazov}</span>
            <span className={styles.popis}>{post.popis}</span>
          </div>
          <div className={styles.imageWrapper}>
            {post.obrazky.map((obrazok: any, index: number) => (
              <Link
                href={`/fotogaleria/${params.nazov}/${index}`}
                key={generateUniqueIdFromImageUrl(obrazok)}
                className={styles.image}
              >
                <img
                  // onClick={() => setOpen(false)}
                  src={obrazok}
                  alt="Fotka"
                  className={styles.img}
                />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {/* // ) : (
      //   <div className={styles.carouselWrapper}>
      //     <div onClick={() => setOpen(!open)} className={styles.backButton}>⟵</div>
      //     <Carousel
      //       className={styles.carousel}
      //       infiniteLoop={true}
      //       transitionTime={350}
      //       showArrows={false}
      //       selectedItem={currentIndex}
      //       onChange={(index) => setCurrentIndex(index)}
      //       emulateTouch={true}
      //     >
      //       {post.obrazky.map((obrazok: any) => (
      //         <div
      //           key={generateUniqueIdFromImageUrl(obrazok)}
      //           className={styles.imgSliderWrapper}
      //         >
      //           <div className={styles.ovladaciButtonL}>
      //             {currentIndex > 0 && (
      //               <button
      //                 onClick={handlePrevious}
      //                 className={styles.button}
      //               ></button>
      //             )}
      //           </div>
      //           <img src={obrazok} alt="Fotka" className={styles.imgSlider} />
      //           <div className={styles.ovladaciButtonP}>
      //             {currentIndex < post.obrazky.length - 1 && (
      //               <button
      //                 onClick={handleNext}
      //                 className={styles.button}
      //               ></button>
      //             )}
      //           </div>
      //         </div>
      //       ))}
      //     </Carousel>
      //   </div>
      // )} */}
    </div>
  );
};

export default Akcia;
