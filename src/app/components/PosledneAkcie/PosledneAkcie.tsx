"use client";
import styles from "./styles/PosledneAkcie.module.scss";
import { Carousel } from "react-responsive-carousel";
import { galeria } from "@/app/constants/data";
import { useState } from "react";

const PosledneAkcie = ({akcieGaleria}: any) => {
  function datumy(a: any, b: any) {
    const datePartsA = a.datumZaciatok.split(".");
    const datePartsB = b.datumZaciatok.split(".");
    const dateA = new Date(
      Number(datePartsA[2]),
      Number(datePartsA[1]) - 1,
      Number(datePartsA[0])
    );
    const dateB = new Date(
      Number(datePartsB[2]),
      Number(datePartsB[1]) - 1,
      Number(datePartsB[0])
    );

    return dateB.getTime() - dateA.getTime();
  }
  galeria.sort(datumy);
  const posledne3prispevky = galeria.slice(0, 5);

  const [expandedPopisId, setExpandedPopisId] = useState<string | null>(null);

  // Helper function to truncate popis to the last full word
  function truncatePopis(text: any, maxLength: any) {
    if (text.length <= maxLength) return text;
    return text.slice(0, text.lastIndexOf(" ", maxLength)) + "...";
  }

  const getDirectImageUrl = (url: any) => {
    const match = url.match(/\/file\/d\/([^/]+)/);
    if (match) {
      const fileId = match[1];
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    return url;
  };

  const generateUniqueIdFromImageUrl = (imageUrl: any) => {
    let uniqueId = imageUrl.charAt(4) + imageUrl.charAt(11);

    for (let i = 0; i < 4; i++) {
      const randomNum = Math.floor(Math.random() * 10);
      uniqueId += randomNum;
    }

    return uniqueId;
  };

  const getURLFriendlyName = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  if (akcieGaleria === "galeria") {
    return (
      <Carousel
        className={styles.carousel}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        interval={3500}
        showStatus={false}
      >
        {galeria.slice(0, 5).map((prispevok) => (
          <a
            href={"/fotogaleria/" + getURLFriendlyName(prispevok.nazov)}
            key={prispevok.id}
            className={styles.prispevok}
          >
            {posledne3prispevky.some(
              (item) => item.nazov === prispevok.nazov
            ) && (
              <div className={styles.akcia} key={prispevok.nazov}>
                <span className={styles.nazov}>{prispevok.nazov}</span>
                <span className={styles.datum}>
                  {prispevok.datumZaciatok} - {prispevok.datumKoniec}
                </span>
                <span className={styles.popis}>
                  {expandedPopisId === prispevok.id
                    ? prispevok.popis
                    : truncatePopis(prispevok.popis, 100)}
                  {prispevok.popis.length > 100 && (
                    <>
                      {expandedPopisId === prispevok.id ? (
                        // <button
                        //   className={styles.viacMenej}
                        //   onClick={() => setExpandedPopisId(null)}
                        // >
                        //   zobraziť menej
                        // </button>
                        <div></div>
                      ) : (
                        // <button
                        //   className={styles.viacMenej}
                        //   onClick={() => setExpandedPopisId(prispevok.id)}
                        // >
                        //   zobraziť viac
                        // </button>
                        <div></div>
                      )}
                    </>
                  )}
                </span>
                <div className={styles.obrazky}>
                  {prispevok.obrazky.slice(0, 4).map((obrazok) => (
                    <img
                      src={getDirectImageUrl(obrazok)}
                      alt="Obrazok"
                      key={generateUniqueIdFromImageUrl(obrazok)}
                      className={styles.obrazok}
                    />
                  ))}
                </div>
              </div>
            )}
          </a>
        ))}
      </Carousel>
    );
  }
};

export default PosledneAkcie;
