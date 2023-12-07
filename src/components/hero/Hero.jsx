import "./hero.css";

export const Hero = () => {
  return (
    <section id="hero">
      {/* background */}
      <div className="div-top w-100"></div>
      <img
        src="https://raw.githubusercontent.com/Grathienbeto/insure/f677b7a3dedec185b933f062396bb88ce91caa8e/challenge/images/bg-pattern-intro-right-desktop.svg"
        alt=""
        className="hero-img-right hero-img-back "
      />
      <img
        src="https://raw.githubusercontent.com/Grathienbeto/insure/f677b7a3dedec185b933f062396bb88ce91caa8e/challenge/images/bg-pattern-intro-left-desktop.svg"
        alt=""
        className="hero-img-left hero-img-back"
      />
      {/*  */}

      <div className="w-100" id="hero_wrapper">
        <div className="hero_wrapper_container mx-auto d-flex">
          <hr className="little-line " />

          <div id="hero_text" className="">
            <img
              src="https://raw.githubusercontent.com/Grathienbeto/insure/f5020b1153eb6e21260a55d5d8c5d98e16bb644c/challenge/images/bg-pattern-intro-left-mobile.svg"
              alt=""
              className="mobile-bg-left hero-img-back-mobile"
            />

            <h1>Humanizing your insurance.</h1>
            <p className="mb-5">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <a href="#" className="cta-btn">
              VIEW PLANS
            </a>
          </div>

          <div id="hero_img">
            <picture>
              <source
                srcSet="https://raw.githubusercontent.com/Grathienbeto/insure/main/challenge/images/image-intro-mobile.jpg"
                media="(orientation: portrait)"
              />
              <img
                src="https://raw.githubusercontent.com/Grathienbeto/insure/main/challenge/images/image-intro-desktop.jpg"
                alt=""
              />
            </picture>
          </div>
        </div>
        <img
          src="https://raw.githubusercontent.com/Grathienbeto/insure/f5020b1153eb6e21260a55d5d8c5d98e16bb644c/challenge/images/bg-pattern-intro-right-mobile.svg"
          alt=""
          className="mobile-bg-right hero-img-back-mobile"
        />
      </div>

      <div className="div-bot"></div>
    </section>
  );
};

/*
          
*/
