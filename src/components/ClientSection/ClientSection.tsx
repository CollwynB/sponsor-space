import styles from "./ClientSection.module.css";

export default function ClientSection() {
  return (
    <div className={styles.clients}>
      <div>
        <h2>Who we work with</h2>
        <section className={styles.horizontalScroll}>
          <figure>
            <img
              src="/creator-pic-1.png"
              alt="profile"
              width={256}
              height={256}
              className={styles.profilePic}
            ></img>
            <figcaption>Collwyn, 21m followers</figcaption>
          </figure>
          <figure>
            <img
              src="/creator-pic-2.png"
              alt="profile "
              width={256}
              height={256}
              className={styles.profilePic}
            ></img>
            <figcaption>Collwyn, 5m followers</figcaption>
          </figure>
          <figure>
            <img
              src="/creator-pic.png"
              alt="profile "
              width={256}
              height={256}
              className={styles.profilePic}
            ></img>
            <figcaption>Collwyn, 15k followers</figcaption>
          </figure>
        </section>
        <section className={styles.horizontalScroll}>
          <img
            src="/next.svg"
            alt="logo"
            width={64}
            height={32}
            className={styles.logo}
          ></img>
          <img
            src="/vercel.svg"
            alt="logo"
            width={64}
            height={32}
            className={styles.logo}
          ></img>
          <img
            src="/next.svg"
            alt="logo"
            width={64}
            height={32}
            className={styles.logo}
          ></img>
          <img
            src="/vercel.svg"
            alt="logo"
            width={64}
            height={32}
            className={styles.logo}
          ></img>
        </section>
      </div>
    </div>
  );
}
