import { useEffect, useState } from "react";
import styles from "./ContactSection.module.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

type Platform = "TikTok" | "Instagram" | "YouTube";

type ContactInfo<T extends "business" | "creator"> = {
  name: string;
  email: string;
  type: T;
} & extraInfo[T];

type extraInfo = {
  creator: {
    followers: number;
    accounts: { platform: Platform; link: string }[];
  };
  business: {};
};

export default function ContactSection() {
  const [contactInfo, setContactInfo] = useState<
    ContactInfo<"business" | "creator">
  >({
    email: "",
    name: "",
    type: "business",
  });

  const [socials, setSocials] = useState<
    { platform: Platform; link: string }[]
  >([]);

  const [submittedInfo, setSubmittedInfo] = useState(false);

  useEffect(() => {
    setContactInfo({ ...contactInfo, accounts: socials });
  }, [socials]);

  const submitContactDetails = async () => {
    const docRef = await addDoc(collection(db, "contacts"), contactInfo);
    setSubmittedInfo(true);
    console.log("Document written with ID: ", docRef.id);
  };

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
        {!submittedInfo ? (
          <form
            className={styles.registrationForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Alex Smith"
              onChange={(e) =>
                setContactInfo({ ...contactInfo, name: e.target.value })
              }
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="example@email.com"
              onChange={(e) =>
                setContactInfo({ ...contactInfo, email: e.target.value })
              }
            />

            <label htmlFor="organisation-type">I am a</label>
            <select
              name="organisation-type"
              id="organisation-type"
              defaultValue={"none"}
              onChange={(e) =>
                setContactInfo({
                  ...contactInfo,
                  type: e.target.value as ContactInfo<
                    "business" | "creator"
                  >["type"],
                })
              }
            >
              <option disabled value={"none"}>
                Please select one
              </option>
              <option value="business">Business</option>
              <option value="creator">Creator</option>
            </select>
            {contactInfo.type === "creator" && (
              <>
                <label htmlFor="follower-count">Followers</label>
                <input
                  type="number"
                  name="follower-count"
                  id="follower-count"
                  onChange={(e) =>
                    setContactInfo({
                      ...contactInfo,
                      followers: Number(e.target.value),
                    })
                  }
                />
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
                    setSocials([
                      ...socials,
                      { platform: "Instagram", link: "" },
                    ])
                  }
                >
                  +
                </button>
              </>
            )}
            <button className={styles.button} onClick={submitContactDetails}>
              Register
            </button>
          </form>
        ) : (
          <>
            <p className={styles.thankYou}>Thank you for registering!</p>
            <p>We will review your details and be in touch soon.</p>
          </>
        )}
      </div>
    </div>
  );
}
