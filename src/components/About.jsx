import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import webpic from '../images/webpic.jpeg';
export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="about"
        id="about"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
        data-aos-once
        style={{overflowX: 'hidden'}}>
        <h1>ABOUT</h1>
        <p>
          Hi,I am Abilash from Chennai currenty an undergraduate student at BITS
          Pilani,Hyderabad campus pursuing Electrical and Electronics
          Engineering. I am passionate about the exciting world of software
          development. My journey in this field began with a strong interest in
          web development and app development.
        </p>
        <div className="bio">
          <div className="bio-image">
            <img
              src={webpic}
              //   src="../images/coffin.png"
              alt=""
            />
          </div>
          <div className="bio-data">
            {/* <h2>Web Developer.</h2> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
            <ul>
              <li>Birthday: 3 July 2004</li>
              <li>Age: 19</li>

              <li>Degree: Bachelors</li>
              <li>Phone: 7299012957</li>
              <li>Email: kmabilash3704@gmail.com </li>
              <li>City: Hyderabad,India</li>
            </ul>
            <p>
              I am excited about the possibilities that software development
              holds, and I am eager to collaborate with like-minded individuals
              and organizations to create remarkable digital experiences. Let's
              embark on this journey together and build a better future through
              the power of code!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
