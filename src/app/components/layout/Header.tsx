"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../layout/styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  useClient();

  const [isOpen, setIsOpen] = useState(false);
  const [organyOpened, setOrganyOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleOrgany = () => {
    setOrganyOpened(!organyOpened);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css"
        />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.logoWrapper}>
            <Link href="/" className={styles.domov}>
              <img
                src="/images/logoM.png"
                alt="Logo Mladá Matica"
                className={styles.logo}
              />
            </Link>
          </div>
        </div>

        <div className={styles.navbar}>
          <div className={`${styles.navbarItems} ${isOpen ? styles.open : ""}`}>
            <li>
              <Link href="/kto-sme" className={styles.navbarItem}>
                Kto sme
              </Link>
            </li>
            <li>
              <Link href="/clanky" className={styles.navbarItem}>
                Články
              </Link>
            </li>
            <li>
              <Link href="/organy" className={styles.navbarItem}>
                Orgány
              </Link>
              {/* <div className={styles.navbarItem} onClick={toggleOrgany}>
                Orgány
              </div>
              {organyOpened && (
                <div className={styles.organy}>
                  <div
                    className={`${styles.organyItems} ${
                      organyOpened ? styles.open : ""
                    }`}
                  >
                    <Link href="/organy/predseda" className={styles.organyItem}>
                      Predseda
                    </Link>
                    <Link href="/organy/vybor" className={styles.organyItem}>
                      Výbor
                    </Link>
                    <Link href="/organy/dozorca" className={styles.organyItem}>
                      Dozorca
                    </Link>
                    <Link
                      href="/organy/valne-zhromazdenie"
                      className={styles.organyItem}
                    >
                      Valné zhromaždenie
                    </Link>
                  </div>
                </div>
              )} */}
            </li>
            <li>
              <Link href="/dokumenty" className={styles.navbarItem}>
                Dokumenty
              </Link>
            </li>
            <li>
              <Link href="/kontakty" className={styles.navbarItem}>
                Kontakty
              </Link>
            </li>
            <li>
              <Link href="/stan-sa-clenom" className={styles.navbarItem}>
                <span className={styles.button}>Staň sa členom</span>
              </Link>
            </li>
          </div>
          <img
            src="/images/menu.png"
            alt="Menu"
            id="menu-icon"
            className={styles.menuIcon}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

function useClient() {}
