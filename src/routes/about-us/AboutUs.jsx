import aboutUsMeet from '../../assets/about_us_meet_our_team.png';
import performance from '../../assets/performance.png';
import partnership from '../../assets/partnership.png';
import eduInte from '../../assets/edu_inte_daru.png';

const AboutUs = () => {
  return (
    <div className="min-h-screen h-auto overflow-auto p-4">
      <div className="p-4 -mt-4 -mx-4">
        <img src={aboutUsMeet} alt="aboutUsMeet" className="mt-4 w-full" />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-[rgb(82,222,124)] flex flex-col items-center">
          OUR VALUES
        </h2>
        <h2 className="text-neutral-950 flex flex-col items-center">
          DebtFree was founded in 2020. We are a boutique firm committed to our
          customers’ success with progress towards financial freedom.
        </h2>

        <h3 className="flex flex-col align-middle -mt-4 ">
          Our team of professionals works closely with you to create and empower
          financial stability. Eliminate debt, build credit scores, personal
          budgeting, qualify for better financing, or reach financial goals
          faster. Here at Debtfree, we help you learn about your options to help
          you make informed decisions. Debtfree is accredited by the Better
          Business Bureau with an A+ rating.
        </h3>
      </div>
      <div>
        <img src={performance} alt="performance" className="mt-4 w-full" />
        <img src={partnership} alt="partnership" className="mt-4 w-full" />
        <img src={eduInte} alt="eduInte" className="mt-4 w-full" />
      </div>
      <div>
        <button
          className="w-[129px] h-[33px] bg-[rgb(51,143,209)] text-white mt-6 rounded-[23.74px] flex justify-center items-center"
          style={{ fontSize: '12px', backgroundColor: '#328ED1' }}
        >
          Contact Us
        </button>
      </div>

      <div className="flex flex-col align-middle">
        <h2>Our Customers Frequently Ask…</h2>

        <div className="flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
          What credentials do you have?
          <span className="ml-2 text-[rgb(82,222,124)]">+</span>
        </div>
        <div className="flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
          What is your client success rate?
          <span className="ml-2 colo text-[rgb(82,222,124)]">+</span>
        </div>
        <div className="flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
          What makes Debtfree different?
          <span className="ml-2 text-[rgb(82,222,124)]">+</span>
        </div>
        <div className="flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
          What is your client success rate?
          <span className="ml-2 text-[rgb(82,222,124)]">+</span>
        </div>
      </div>
      <div>
        <h1 className="flex flex-col items-center">DebtFree</h1>
        <div>
          <h2 className="flex flex-col items-center">Mumbai - HQ</h2>
          <h2 className="flex flex-col items-center">(0522)55555</h2>
          <input type="button" value="text" />
          {/* in 1st input field write Enter your Name? */}
          <input type="button" value="text" />
          {/* in 2nd  input field write Enter your Email? */}
        </div>

        <button
          className="w-[129px] h-[33px] bg-[rgb(51,143,209)] text-white mt-6 rounded-[23.74px] flex justify-center items-center"
          style={{ fontSize: '12px', backgroundColor: '#328ED1' }}
        >
          SUBSCRIBE
        </button>
      </div>

      <div className="flex gap-4 justify-around mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className="w-8 h-8"
        >
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className="w-8 h-8"
        >
          <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className="w-8 h-8"
        >
          <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
        </svg>
      </div>
      <div className="">
        <p>BLOG</p>
        <p>FAQ</p>
        <p>REVIEWS</p>
        <p>ACCESSIBILITY</p>
        <button
          className="w-[129px] h-[33px] bg-[rgb(51,143,209)] text-white mt-6 rounded-[23.74px] flex justify-center items-center"
          style={{ fontSize: '12px', backgroundColor: '#328ED1' }}
        >
          Contact Us
        </button>
        <p>Sitemap | Privacy Policy | Terms & Conditions</p>
        <p>© Copyright 2022 All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default AboutUs;
