import styles from "../styles/Dokumenty.module.scss";

const Dokumenty = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <h1 className={styles.nadpis}>Dokumenty</h1>
          Odbor Mladej Matice Bratislava – Staré Mesto je verejnoprávnou
          inštitúciou zriadenou § 4 zákona č. 68/1997 Z. z. o Matici slovenskej.
          <ul>
            <li>
              <a
                href="/files/zakon-c-681997-o-matici-slovenskej.pdf"
                target="_blank"
              >
                Zákon č. 68/1997 o Matici slovenskej{" "}
              </a>
            </li>
          </ul>
          OMM má vlastné stanovy, ktorými sa riadi. Taktiež sa riadi stanovami
          Mladej Matice a Matice slovenskej.
          <ul>
            <li>
              <a href="/files/Stanovy-OMM.pdf" target="_blank">
                Stanovy OMM
              </a>
            </li>
            <li>
              <a href="/files/stanovy-MM.pdf" target="_blank">
                Stanovy MM
              </a>
            </li>
            <li>
              <a href="/files/Stanovy-Matice-slovenskej.pdf" target="_blank">
                Stanovy MS
              </a>
            </li>
          </ul>
          OMM sa taktiež hlási k programu Matice slovenskej, ktorý sa snaží
          svojou činnosťou plniť.
          <ul>
            <li>
              <a
                href="/files/Program-Matice-slovenskej-na-roky-2023-až-2027-s-výhľadom-do-roku-2030.pdf"
                target="_blank"
              >
                Program Matice slovenskej
              </a>
            </li>
          </ul>
          Valné zhromaždenie OMM sa zvoláva spravidla raz ročne. Z valného
          zhromaždenia sa zhotovujú zápisnice a uznesenia.
          <ul>
            <li>
              <a
                href="/files/uznesenia-valneho-zhromazdenia-2023.pdf"
                target="_blank"
              >
                Uznesenie valného zhromaždenia 2023
              </a>
            </li>
            <li>
              <a
                href="/files/zapisnica-valneho-zhromazdenia-2024.pdf"
                target="_blank"
              >
                Zápisnica valného zhromaždenia 2024
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dokumenty;
