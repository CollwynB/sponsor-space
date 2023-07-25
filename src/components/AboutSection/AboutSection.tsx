import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h2>About</h2>
        <p>
          At Sponsor Space, we understand the power of influential voices in the
          digital landscape. Our mission is to bridge the gap between brands and
          influencers, creating authentic connections that drive engagement,
          growth, and success.
        </p>
        <p>
          With a passion for creativity and a data-driven approach, we curate
          seamless partnerships that resonate with your target audience. Whether
          you're a brand looking to expand your reach or an influencer seeking
          meaningful collaborations, our experienced team is here to guide you
          every step of the way.
        </p>
        <p>
          We take pride in our extensive network of influencers representing
          various industries and niches. By harnessing the potential of these
          dynamic partnerships, we help you unlock new opportunities and elevate
          your brand to new heights.
        </p>
      </div>
    </div>
  );
}
