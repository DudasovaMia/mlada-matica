"use client";
import { galeria } from "@/app/constants/data";
import styles from "../../../styles/FotogaleriaGaleria.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import router, { useRouter } from "next/router";
import React from "react"

const Obrazok = ({ params }: { params: { nazov: string; id: string } }) => {
  const getURLFriendlyName = (name: string) => {
    const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return normalized.toLowerCase().replace(/\s+/g, "-");
  };

  const idString = params.id != null ? params.id.toString() : "";

  const post: any = galeria.find(
    (post) =>
      getURLFriendlyName(post.nazov) === getURLFriendlyName(params.nazov)
  );

  useEffect(() => {
    const handleArrowKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        window.location.href = `/fotogaleria/${params.nazov}`;
      }
      if (event.key === "ArrowLeft") {
        if (parseInt(params.id) > 0) {
          const prevId = parseInt(params.id) - 1;
          window.location.href = `/fotogaleria/${params.nazov}/${prevId}`;
        }
      } else if (event.key === "ArrowRight") {
        if (parseInt(params.id) < post?.obrazky?.length - 1) {
          const nextId = parseInt(params.id) + 1;
          window.location.href = `/fotogaleria/${params.nazov}/${nextId}`;
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleArrowKeyPress);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", handleArrowKeyPress);
      }
    };
  }, [params.nazov, params.id]);

  if (!post) {
    return <div>Post not found or loading...</div>; // Handle the case when post is not available
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.close}>
          <Link href={`/fotogaleria/${params.nazov}`} className={styles.x}>
            X
          </Link>
        </div>
        <div className={styles.image}>
          <Link
            href={`/fotogaleria/${params.nazov}/${
              parseInt(params.id) >= 1 ? parseInt(params.id) - 1 : params.id
            }`}
            className={`${styles.nav} ${
              parseInt(params.id) === 0 ? styles.notPrev : styles.nav
            }`}
          >
            <img
              src="/icons/arrow.svg"
              alt="predchádzajúci"
              className={styles.prevArrow}
            />
          </Link>
          <img src={post.obrazky[idString]} alt="" className={styles.img} />
          <Link
            href={`/fotogaleria/${params.nazov}/${
              parseInt(params.id) < post?.obrazky?.length - 1
                ? parseInt(params.id) + 1
                : params.id
            }`}
            className={`${styles.nav} ${
              parseInt(params.id) === post?.obrazky?.length - 1
                ? styles.notPrev
                : styles.nav
            }`}
          >
            <img
              src="/icons/arrow.svg"
              alt="ďaľší"
              className={styles.nextArrow}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Obrazok;
