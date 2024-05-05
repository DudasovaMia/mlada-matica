"use client"
import React, { useState, useEffect } from "react";
import styles from "../styles/Fotogaleria.module.scss";
import { galeria } from "../constants/data";
import Prispevok from "../components/Prispevok/Prispevok";
import Loading from "../components/Loading/Loading";
import Filtre from "../components/Filtre/Filtre";

const Fotogaleria = () => {
  const fotogaleria = galeria.filter(
    (prispevok) => prispevok.obrazky.length > 0
  );

  const [isLoading, setIsLoading] = useState(true);
  const [rokFilter, setRokFilter] = useState<string>("");
  const [trvanieFilter, setTrvanieFilter] = useState<string>("");
  const [filteredGaleria, setFilteredGaleria] = useState(fotogaleria);

  function parseDate(dateStr: any) {
    const [datePart, timePart] = dateStr.split(" ");
    const [day, month, year] = datePart.split(".");
    const [hour = "00", minute = "00", second = "00"] = (
      timePart || "00:00:00"
    ).split(":");
    return new Date(
      `${month}/${day}/${year} ${hour}:${minute}:${second}`
    ).getTime();
  }

  function compareDatumZaciatok(a: any, b: any) {
    const timeA = parseDate(a.datumZaciatok);
    const timeB = parseDate(b.datumZaciatok);

    return timeA - timeB;
  }

  const sortedGaleria = fotogaleria.slice().sort(compareDatumZaciatok).reverse();
  console.log(sortedGaleria);

  sortedGaleria.sort(compareDatumZaciatok).reverse();

  useEffect(() => {
    const loadingDelay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingDelay);
  }, []);

  useEffect(() => {
    const filteredData = sortedGaleria.filter((prispevok) => {
      const matchesRokFilter =
        rokFilter === "" || prispevok.datumZaciatok.includes(rokFilter);

      if (trvanieFilter === "Stretnutie") {
        return (
          matchesRokFilter &&
          prispevok.datumZaciatok.split(" ")[0] ===
            prispevok.datumKoniec.split(" ")[0] &&
          prispevok.datumZaciatok.includes(":")
        );
      } else if (trvanieFilter === "Jednodňová akcia") {
        return (
          matchesRokFilter &&
          prispevok.datumZaciatok.split(" ")[0] ===
            prispevok.datumKoniec.split(" ")[0] &&
          !prispevok.datumZaciatok.includes(":")
        );
      } else if (trvanieFilter === "Viacdňová akcia") {
        return (
          matchesRokFilter &&
          prispevok.datumZaciatok.split(" ")[0] !==
            prispevok.datumKoniec.split(" ")[0]
        );
      } else {
        return matchesRokFilter;
      }
    });

    setFilteredGaleria(filteredData);
  }, [rokFilter, trvanieFilter]);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.content}>
          <Filtre
            rokFilter={rokFilter}
            trvanieFilter={trvanieFilter}
            setRokFilter={setRokFilter}
            setTrvanieFilter={setTrvanieFilter}
          />
          <div className={styles.prispevky}>
            {filteredGaleria.map((prispevok) => (
              <Prispevok key={prispevok.id} prispevok={prispevok} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fotogaleria;
