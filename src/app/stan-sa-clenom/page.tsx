import styles from "../styles/StanSaClenom.module.scss";

const StanSaClenom = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <div className={styles.nadpis}>Staň sa členom</div>
          <div className={styles.popis}>
            Členom
            <span style={{ fontWeight: "bold" }}>
              &nbsp;Odboru Mladej Matice Bratislava – Staré Mesto&nbsp;
            </span>
            sa môže stať každý občan Slovenskej republiky, ako aj občan iného
            štátu, ktorý vyjadrí súhlas s poslaním, Programom a so Stanovami
            odboru Mladej Matice (OMM), Mladej Matice (MM) a Matice slovenskej
            (MS) a podá si prihlášku za riadneho člena OMM.
            <br />
            <br />
            Vzhľadom na príslušnosť OMM k MM, môže byť členom OMM iba občan do
            35 rokov. Členovia OMM sú členmi Mladej Matice a Matice slovenskej.
            <br />
            <br />
            Členský príspevok bol na tento rok stanovený na 10,-€.
          </div>
          <ol type="1">
            <span style={{ fontWeight: "bold" }}>Ako sa stať členom OMM:</span>
            <li>
              {" "}
              &nbsp; &nbsp; Vypíš a pošli nám mailom alebo poštou prihlášku za
              člena OMM.
            </li>
            <a href="mailto:ommbratislava@gmail.com">
              &nbsp; &nbsp;
              <img src="/icons/red-mail.svg" alt="mail" />
              &nbsp; ommbratislava@gmail.com
            </a>
            <a href="/files/prihlaska-za-clena-OMM.pdf" target="_blank">
              &nbsp; &nbsp;
              <img src="/icons/dokument.svg" alt="dokument" />
              &nbsp; Prihláška za člena OMM
            </a>
            <li> &nbsp; &nbsp; Výbor OMM schváli Tvoje členstvo.</li>
            <li> &nbsp; &nbsp; Zaplatíš členský príspevok.</li>
            <li> &nbsp; &nbsp; Vystavíme Ti členský preukaz.</li>
            <li>
              &nbsp; &nbsp; Môžeš sa zúčastňovať našich akcií a podujatí.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default StanSaClenom;
