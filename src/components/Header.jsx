import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

export default function Header() {
  useEffect(() => {
    AOS.init({duration: 8000});
  }, []);
  return (
    <div className="header" id="header">
      <div
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1200"
        className="header-text">
        <h1>Abilash</h1>
        <p>
          I'm {'a  '}
          <span>
            <Typewriter
              options={{
                strings: ['developer', 'student'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/abilash-k-m-a3bb16228"
              target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/abilash_3704?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          {/* <li><a href="#"><i class="fab fa-twitter"></i></a></li> */}
          {/* <li><a href="#"><i class="fab fa-facebook-square"></i></a></li> */}
          {/* <li><a href="#"><i class="fab fa-skype"></i></a></li> */}
        </ul>
      </div>
    </div>
  );
}
