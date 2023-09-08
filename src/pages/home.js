import Globe from '@/components/assets/globe';
import Logo from '@/components/assets/logo';
import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div>
      <nav className="max-w-screen-xl px-4 mx-auto ">
        <Logo className="h-[40px] w-auto" />
        <div className="">
          <a href="">About us</a>
          <a href="">Room</a>
          <a href="">Living</a>
          <a href="">WorkSpace</a>
        </div>
        <div className="">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
        <div className="">
          <p>EN</p>
          <Globe className="h-[18px] w-[18px]" />
        </div>
      </nav>
      <section id="hero" className="max-w-screen-xl px-4 mx-auto">
        <div className="">
          <h1>Find the best place you have to stay for</h1>
          <p>
            Discover the perfect blend of community and comfort in our modern
            co-living space, fostering connections that last a lifetime
          </p>
        </div>
        <div className="">
          <Image src="/discovered.png" width={289} height={108} />
          <label htmlFor="" className="relative">
            <input type="text" placeholder="Search here by city or country" />
            <button className="absolute bg-[#21C2E5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.58333 18.125C4.875 18.125 1.04167 14.2917 1.04167 9.58335C1.04167 4.87502 4.875 1.04169 9.58333 1.04169C14.2917 1.04169 18.125 4.87502 18.125 9.58335C18.125 14.2917 14.2917 18.125 9.58333 18.125ZM9.58333 2.29169C5.55833 2.29169 2.29167 5.56669 2.29167 9.58335C2.29167 13.6 5.55833 16.875 9.58333 16.875C13.6083 16.875 16.875 13.6 16.875 9.58335C16.875 5.56669 13.6083 2.29169 9.58333 2.29169Z"
                  fill="white"
                />
                <path
                  d="M18.3333 18.9583C18.175 18.9583 18.0167 18.9 17.8917 18.775L16.225 17.1083C15.9833 16.8667 15.9833 16.4667 16.225 16.225C16.4667 15.9833 16.8667 15.9833 17.1083 16.225L18.775 17.8917C19.0167 18.1333 19.0167 18.5333 18.775 18.775C18.65 18.9 18.4917 18.9583 18.3333 18.9583Z"
                  fill="white"
                />
              </svg>
            </button>
          </label>
        </div>
        <div id="slider">
          <Image src="/slider.png" width={1232} height={442} alt="Mint House" />
        </div>
      </section>
      {/* How it works */}
    </div>
  );
};

export default Home;
