import { useRouter } from "next/router";
import styles from "../../styles/Akcia.module.scss";
import { Prispevok, galeria } from "@/app/constants/data";
import React from "react";

const Akcie = ({ params }: { params: { nazov: string } }) => {
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
      <div className={styles.post}>
        <div className={styles.textWrapper}>
          <span className={styles.nazov}>{post.nazov}</span>
          <div className={styles.datum}>
            {post.datumZaciatok} - {post.datumKoniec}
          </div>
          <span className={styles.popis}>{post.popis}</span>
        </div>
        {post.obrazky.length !== 0 ? (
          <div className={styles.imageWrapper}>
            <img
              src={post.obrazok}
              alt="Hlavná fotka"
              className={styles.mainImage}
            />
            <div className={styles.obrazky}>
              <div className={styles.horne}>
                <img src={post.obrazky[0]} alt="Fotka" className={styles.lu} />
                <img src={post.obrazky[1]} alt="Fotka" className={styles.ru} />
              </div>
              <div className={styles.dolne}>
                <img src={post.obrazky[2]} alt="Fotka" className={styles.ld} />
                <a
                  href={"/fotogaleria/" + params.nazov}
                  className={styles.viacObrazkov}
                >
                  <img
                    src={post.obrazky[3]}
                    alt="Fotka"
                    className={styles.obrazok}
                  />
                  <div className={styles.filter}></div>
                  <p className={styles.pocet}>+ {post.obrazky.length - 3}</p>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.imageWrapper}>
            <img
              src={post.obrazok}
              alt="Hlavná fotka"
              className={styles.mainImg}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Akcie;
