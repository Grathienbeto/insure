import "./cts.css";

export const Cta = () => {
  return (
    <section id="cta">
      <div
        id="cta_wrapper"
        className="d-flex align-items-center justify-content-between"
      >
        <div>
          <p>Find out more about how we work</p>
        </div>
        <div>
          <a href="#">HOW WE WORK</a>
        </div>
      </div>
      <img
        src="https://raw.githubusercontent.com/Grathienbeto/insure/54676ef9600b777b72a8a118d59dc8bf084facda/challenge/images/bg-pattern-how-we-work-desktop.svg"
        alt=""
        className="cta_bg_img"
      />
      <img
        src="https://raw.githubusercontent.com/Grathienbeto/insure/54676ef9600b777b72a8a118d59dc8bf084facda/challenge/images/bg-pattern-how-we-work-mobile.svg"
        alt=""
        className="cta_bg_img_mobile"
      />
    </section>
  );
};
