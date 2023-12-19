import React from "react";

function Footer() {
  return (
    <>
      <div className="footer gap-16 md:gap-0 px-20 grid md:grid-cols-2 bg-[#F2F8FC] py-10">
        <div>
          <h1 className="uppercase text-2xl font-bold">logo</h1>
          <p className=" font-normal text-base leading-6 py-10  ">
            We earned a reputation of being good at what we do. <br /> Let us take your
            online shop to new dimension in success!
          </p>
          <div className="py-5 flex ">
            <i className="bi bi-geo-alt me-5"></i>
            <p>Camilla, Bangladesh 3500</p>
          </div>
          <p className=" border-b-2 border-w inline-block">
            kawsarahmed0210@gmail.com
          </p>
          <p className="py-3">01647470457</p>
          <div className="footer__icons space-x-3 mt-3">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </div>
        <div>
          <h1 className=" font-bold text-2xl leading-9">
            RECIVE EMAIL UPDATES
          </h1>
          <form className="py-3">
            <input
              className=" w-56 lg:w-96"
              type="email"
              placeholder="Your email adress..."
            />
            <button className=" bg-gray-500 px-10 text-center uppercase">
              Join
            </button>
          </form>

          <table className=" w-full">
            <thead className=" ">
              <tr className=" uppercase ">
                <th className="text-start py-5">shop</th>
                <th className="text-start">help</th>
                <th className="text-start">about</th>
              </tr>
            </thead>
            <tbody className=" uppercase ">
              <tr className="">
                <td className="py-2">shop</td>
                <td>faq</td>
                <td>journal</td>
              </tr>
              <tr>
                <td className="py-2">collection</td>
                <td>Private policy</td>
                <td>our story</td>
              </tr>
              <tr>
                <td className="py-2">outlet</td>
                <td>terams and conditions</td>
                <td>contact</td>
              </tr>
              <tr>
                <td className="py-2">lookbook</td>
                <td>eturn and exchange</td>
                <td>store location</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center py-5 bg-emerald-200 font-semibold">
        Copyright © 2020 . Your company name All rights reserved
      </div>
    </>
  );
}

export default Footer;
