import "./standouts.css";

export const Standouts = () => {
  return (
    <section id="standouts" className="container-fluid p-0">
      <div className="little-s-line"></div>
      <div className="mb-5">
        <h2>We’re different</h2>
      </div>
      <div id="diferences" className="d-flex flex-xl-row gap-4 pt-4">
        <div className="">
          <img
            src="https://raw.githubusercontent.com/Grathienbeto/insure/98a782d6fa049e3068abeeb4b3555f24272cfbaf/challenge/images/icon-snappy-process.svg"
            alt="Snappy Process"
            className="mb-4"
          />
          <h3>Snappy Process</h3>
          <p className="mt-3">
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/Grathienbeto/insure/98a782d6fa049e3068abeeb4b3555f24272cfbaf/challenge/images/icon-affordable-prices.svg"
            alt="Affordable Prices"
            className="mb-4"
          />
          <h3>Affordable Prices</h3>
          <p className="mt-3">
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/Grathienbeto/insure/98a782d6fa049e3068abeeb4b3555f24272cfbaf/challenge/images/icon-people-first.svg"
            alt="People First"
            className="mb-4"
          />
          <h3> People First</h3>
          <p className="mt-3">
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
    </section>
  );
};
