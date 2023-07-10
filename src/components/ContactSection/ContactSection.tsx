import { useState } from "react";
import styles from "./ContactSection.module.css";

type Platform = "TikTok" | "Instagram" | "YouTube";

export default function ContactSection() {
  const [clientType, setClientType] = useState<null | string>(null);
  const [socials, setSocials] = useState<
    { platform: Platform | null; link: string }[]
  >([]);

  const changePlatformOfSocial = (
    platformToChangeTo: Platform,
    target: number
  ) => {
    const newSocials = [...socials];
    newSocials[target].platform = platformToChangeTo;
    setSocials(newSocials);
  };

  const changeLinkOfSocial = (linkToChangeTo: string, target: number) => {
    const newSocials = [...socials];
    newSocials[target].link = linkToChangeTo;
    setSocials(newSocials);
  };

  const removeSocial = (index: number) => {
    const newSocials = [...socials];
    newSocials.splice(index, 1);
    setSocials(newSocials);
  };

  return (
    <div className={styles.contact}>
      <div>
        <h2>Contact us</h2>
        <form
          className={styles.registrationForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Alex Smith" />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="example@email.com" />

          <label htmlFor="organisation-type">I am a</label>
          <select
            name="organisation-type"
            id="organisation-type"
            defaultValue={"none"}
            onChange={(e) => setClientType(e.target.value)}
          >
            <option disabled value={"none"}>
              Please select one
            </option>
            <option value="business">Business</option>
            <option value="creator">Creator</option>
          </select>
          {clientType === "creator" && (
            <>
              <label htmlFor="follower-count">Followers</label>
              <input type="number" name="follower-count" id="follower-count" />
              <label>Social media accounts</label>
              {socials.map((_, i) => (
                <div className={styles.socialsRow} key={`social-${i}`}>
                  <select
                    defaultValue="none"
                    onChange={(e) =>
                      changePlatformOfSocial(e.target.value as Platform, i)
                    }
                    value={socials[i].platform ?? "none"}
                  >
                    <option disabled value={"none"}>
                      Platform
                    </option>
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                  </select>
                  <input
                    type="url"
                    placeholder={
                      socials[i].platform
                        ? `${socials[i].platform} profile link`
                        : `Please select a platform`
                    }
                    disabled={socials[i].platform == null}
                    onChange={(e) => changeLinkOfSocial(e.target.value, i)}
                    value={socials[i].link ?? ""}
                  />

                  <button
                    className={`${styles.button} ${styles.buttonDelete}`}
                    onClick={() => removeSocial(i)}
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                className={`${styles.button} ${styles.secondary}`}
                onClick={() =>
                  setSocials([...socials, { platform: null, link: "" }])
                }
              >
                +
              </button>
            </>
          )}
          <button className={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
}
