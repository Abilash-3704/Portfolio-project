import React from 'react';

export default function Resume() {
  return (
    <div
      className="resume"
      id="resume"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
      data-aos-once>
      <h1>RESUME</h1>

      <div className="res-display">
        <div className="res-1">
          <div className="res-box">
            <h2>Summary</h2>
            <div className="res-text">
              <h3>ABILASH</h3>
              <i></i>
              <ul>
                <li>BITS Pilani,Hyderabad</li>
                <li>7299012957</li>
                <li>kmabilash3704@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="res-box">
            <h2>Education</h2>
            <div className="res-text">
              <h3>BACHELOR OF ENGINEERING - EEE</h3>
              <p style={{fontWeight: 'bolder'}}>2021-25</p>
              <i>BITS Pilani,Hyderabad</i>
              {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
            </div>
            <div className="res-text">
              <h3>CLASS 12</h3>
              <p style={{fontWeight: 'bolder'}}>2020-21</p>
              <i>Sairam Vidyalaya,Chennai</i>
            </div>
          </div>
        </div>
        <div className="res-2">
          <div className="res-box">
            <h2>Professional Experience</h2>
            <div className="res-text">
              <h3>Associate Software Developer</h3>
              <i>Forevv,Visakhapatnam</i>
              <ul>
                <li>
                  Worked as an intern for forevv in the frontend department and
                  helped them develop multiple screens for their app using react
                  native
                </li>
              </ul>
            </div>
          </div>
          <div className="res-box">
            <h2>Languages</h2>
            <div className="res-text">
              <ul>
                <li>English</li>
                <li>Tamil</li>
                <li>Malayalam</li>
                <li>Hindi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
