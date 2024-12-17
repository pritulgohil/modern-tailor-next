"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer-container w-full bg-zinc-100 p-24 flex justify-between">
        <div className="brand-and-address-container flex flex-col w-1/3 gap-5">
          <div className="brand-image-container text-black font-bold text-3xl">
            <h2>Modern Tailor & Cloth Store</h2>
          </div>
          <div className="brand-details w-full flex flex-col justify-around gap-4">
            <div className="brand-address text-black text-sm flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>

              <p>
                6,7-F.F, Palak Park Shopping Center, near Umiya Hall
                Underbridge, KK Nagar, Ghatlodiya, Ahmedabad, Gujarat, India -
                380061
              </p>
            </div>
            <div className="brand-contact text-black flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>+91 79 2745 2952</p>
            </div>
          </div>
        </div>
        <div className="opening-hours-container">
          <div className="opening-hours-container text-black font-bold text-3xl">
            <h2>Opening Hours:</h2>
          </div>
          <div className="operation-time text-black mt-5 flex flex-col gap-4 text-sm">
            <p>
              <b>Monday</b> - 10:00 AM to 9:00 PM
            </p>
            <p>
              <b>Tuesday</b> - 10:00 AM to 9:00 PM
            </p>
            <p>
              <b>Wednesday</b> - 10:00 AM to 9:00 PM
            </p>
            <p>
              <b>Thursday</b> - 10:00 AM to 9:00 PM
            </p>
            <p>
              <b>Friday</b> - 10:00 AM to 9:00 PM
            </p>
            <p>
              <b>Saturday</b> - 10:00 AM to 6:00 PM
            </p>
            <p>
              <b>Sunday</b> - 10:00 AM to 6:00 PM
            </p>
          </div>
        </div>
        <div className="opening-hours-container">
          <div className="opening-hours-container text-black font-bold text-3xl">
            <h2>Follow Us</h2>
          </div>
          <div className="social-media-logo flex gap-4 mt-5">
            <div className="facebook">
              <Image
                src="/Assets/social-media/facebook.png"
                alt="Logo"
                width={30}
                height={30}
              />
            </div>
            <div className="instagram">
              <Image
                src="/Assets/social-media/instagram.webp"
                alt="Logo"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end bg-gray-950 h-22 w-full p-4 flex justify-center">
        <p>© 2024 Modern Tailor & Cloth Store. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
