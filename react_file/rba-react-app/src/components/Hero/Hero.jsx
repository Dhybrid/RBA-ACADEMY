import videoSrc from "../../assets/videos/hero-video.webm";
import styles from "./Hero.module.css"; // Import the module properly

const Hero = () => {
  return (
    <>
      {/* Video Section */}
      <section className={styles.academyVideo}>
        <video
          className={styles.bgVideom} // Use styles from CSS Module
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={videoSrc} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Academy Content Section */}
      <section className={styles.academyTopContent}>
        <div className="container text-center mt-xl-64">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-lg-10 col-md-8 col-sm-10">
              <h1 className="font-size-72-lg font-size-42 mb-24">
                Your Tech journey starts here.
              </h1>
            </div>
          </div>

          <div className="row justify-content-center mb-32">
            <div className="col-xxl-8 col-lg-9">
              <p className="subtitle font-size-24-lg font-size-18">
                Develop your skills with guided training and prove your
                expertise with industry certifications. Become a market-ready IT
                and digital professional.
              </p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="row justify-content-center" style={{ gap: "10px" }}>
            <a href="#">
              <button className="bton bton-primary bton-modify">
                <p className="bton-text">Register / Signup</p>
                <span className="square"></span>
              </button>
            </a>

            <a href="#">
              <button className="bton bton-secondary bton-modify">
                <p className="bton-text">Business</p>
                <span className="square"></span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
