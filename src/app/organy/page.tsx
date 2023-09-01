"use client";
import styles from "../styles/Organy.module.scss";
import { useState } from "react";

const OrganyB = () => {
  const [predseda, setPredseda] = useState(false);
  const [vybor, setVybor] = useState(false);
  const [dozorca, setDozorca] = useState(false);
  const [valneZhromazdenie, setValneZhromazdenie] = useState(false);

  return (
    <div
      className={`${styles.wrapper} ${
        valneZhromazdenie !== false ? styles.notCentered : true
      } ${vybor !== false ? styles.notCentered : true}`}
    >
      <div
        className={`${styles.predseda} ${
          predseda !== false ? styles.selected : true
        } ${valneZhromazdenie !== false ? styles.valne : true}  ${
          vybor !== false ? styles.valne : true
        }`}
        onClick={() => {
          setPredseda(!predseda);
          setDozorca(false);
          setValneZhromazdenie(false);
          setVybor(false);
        }}
      >
        <img src="/images/predseda.jpeg" alt="Predseda" />
        <div className={styles.infoWrapper}>
          <div className={styles.button}>
            <div className={styles.nazov}>Predseda</div>{" "}
            <span style={{ textAlign: "right" }}>⮟</span>
          </div>
          {predseda && (
            <div className={styles.info}>
              Predseda je štatutárny orgánom OMM, ktorý reprezentuje OMM navonok
              a vystupuje v jeho mene a súčasne predsedá výboru.
              <br />
              <br />
              Predsedu volí valné zhromaždenie, zložené zo všetkých členov OMM,
              na obdobie 4 rokov.
              <br />
              <br />
              Predseda riadi a koordinuje celkovú činnosť OMM prostredníctvom
              volených orgánov, chráni a obhajuje demokratické tradície OMM,
              slobodu prejavu, úctu k hodnotám národného dedičstva, humanitné
              a demokratické princípy.
            </div>
          )}
        </div>
      </div>
      <div
        className={`${styles.vybor} ${
          vybor !== false ? styles.selected : true
        } ${valneZhromazdenie !== false ? styles.valne : true}  ${
          vybor !== false ? styles.valne : true
        }`}
        onClick={() => {
          setVybor(!vybor);
          setDozorca(false);
          setPredseda(false);
          setValneZhromazdenie(false);
        }}
      >
        <img src="/images/vybor.jpg" alt="Výbor" />
        <div className={styles.infoWrapper}>
          <div className={styles.button}>
            <div className={styles.nazov}>Výbor</div>{" "}
            <span style={{ textAlign: "right" }}>⮟</span>
          </div>
          {vybor && (
            <div className={styles.info}>
              Výbor je najvyšším výkonným orgánom OMM. Funkčné obdobie výboru je
              štvorročné. Výbor na svojich zasadnutiach prerokováva najbežnejšie
              záležitosti vedenia a organizácie OMM.
              <br />
              <br />
              Tvorí ho predseda a 3 členovia výboru volení valným zhromaždením.
              Traja členovia výboru sa členia na podpredsedu, tajomníka
              a hospodára OMM.
              <br />
              <br />
              Podpredseda OMM, zastupuje predsedu na základe jeho poverenia
              v presne vymedzených vzťahoch. Podpredseda preberá právomoci
              predsedu iba v prípade jeho dlhodobej práceneschopnosti.
              <br />
              <br />
              Tajomník OMM vykonáva zväčša administratívnu agendu na základe
              poverenia predsedu.
              <br />
              <br />
              Hospodár OMM vykonáva hospodársku agendu a spravuje pokladňu OMM.
            </div>
          )}
        </div>
      </div>
      <div
        className={`${styles.dozorca} ${
          dozorca !== false ? styles.selected : true
        } ${valneZhromazdenie !== false ? styles.valne : true}  ${
          vybor !== false ? styles.valne : true
        }`}
        onClick={() => {
          setDozorca(!dozorca);
          setPredseda(false);
          setValneZhromazdenie(false);
          setVybor(false);
        }}
      >
        <img src="/images/dozorca.jpeg" alt="Dozorca" />
        <div className={styles.infoWrapper}>
          <div className={styles.button}>
            <div className={styles.nazov}>Dozorca</div>{" "}
            <span style={{ textAlign: "right" }}>⮟</span>
          </div>
          {dozorca && (
            <div className={styles.info}>
              Dozorca OMM je najvyšším kontrolným orgánom OMM, jeho funkčné
              obdobie je 4-ročné. Za svoju činnosť zodpovedá valnému
              zhromaždeniu OMM a nie je v podriadenom vzťahu k predsedovi OMM.
              <br />
              <br />
              Dozorca kontroluje činnosť a hospodárenie OMM, dohliada nad
              dodržiavaním zákonov a iných ustanovení v rámci OMM a vykonáva
              všeobecnú kontrolu a previerky v rámci OMM.
            </div>
          )}
        </div>
      </div>
      <div
        className={`${styles.valneZhromazdenie} ${
          valneZhromazdenie !== false ? styles.selected : true
        } ${valneZhromazdenie !== false ? styles.valne : true}  ${
          vybor !== false ? styles.valne : true
        }`}
        onClick={() => {
          setValneZhromazdenie(!valneZhromazdenie);
          setDozorca(false);
          setPredseda(false);
          setVybor(false);
        }}
      >
        <img src="/images/valne-zhromazdenie.jpg" alt="valneZhromazdenie" />
        <div className={styles.infoWrapper}>
          <div className={styles.button}>
            <div className={styles.nazov}>Valné zhromaždenie</div>{" "}
            <div className={styles.arrow}>⮟</div>
          </div>
          {valneZhromazdenie && (
            <div className={styles.info}>
              Valné zhromaždenie je najvyšším orgánom OMM, ktorý rozhoduje
              o jeho smerovaní v súlade s poslaním, úlohami a stanovami OMM, MM
              a MS. Tvoria ho všetci členovia OMM. Zvoláva sa spravidla raz
              ročne. Valné zhromaždenie:
              <br />
              <ol type="a">
                <li>
                  volí a odvoláva v priamych a tajných voľbách predsedu, členov
                  výboru a dozorcu,
                </li>
                <li> schvaľuje a mení stanovy OMM, </li>
                <li>
                  schvaľuje vopred schválený návrh rokovacieho a volebného
                  poriadku VZ,
                </li>
                <li> schvaľuje a mení program OMM,</li>
                <li>
                  schvaľuje správu o činnosti a hospodárení OMM za uplynulé
                  funkčné obdobie,
                </li>
                <li> schvaľuje správu dozorcu OMM, </li>
                <li> schvaľuje plán práce OMM, </li>
                <li> schvaľuje zásady hospodárenia OMM, </li>
                <li> navrhuje výboru OMM výšku členského príspevku,</li>
                <li>
                  rozhoduje o ďalších závažných otázkach činnosti a hospodárenia
                  OMM,
                </li>
                <li>
                  rozhoduje o zániku OMM a likvidácii majetku po jeho zániku,
                </li>
                <li>
                  volí delegáta na valné zhromaždenie a snem MM a MS a navrhuje
                  kandidátov do orgánov MM a MS,
                </li>
                <li> udeľuje čestné členstvo v OMM.</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganyB;
