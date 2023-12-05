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
        <div className="hero_wrapper_container mx-auto w-75 d-flex">
          <div id="hero_text">
            <h1>Humanizing your insurance.</h1>
            <p>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <a href="#">View plans</a>
          </div>
          <div id="hero_img">
            <img
              src="https://raw.githubusercontent.com/Grathienbeto/insure/main/challenge/images/image-intro-desktop.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

/*
          
*/
