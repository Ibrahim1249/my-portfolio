import c from "../assets/images/c.svg"
import java from "../assets/images/java.svg"
import javascript from "../assets/images/javascript.svg"
import mongoDB from "../assets/images/mongodb.svg"
import react from "../assets/images/react.svg"
import node from "../assets/images/nodejs.svg"
import sql from "../assets/images/mysql.svg"
import firebase from "../assets/images/firebase.svg"
import github from "../assets/images/github.svg"
import css from "../assets/images/css.svg"
import html from "../assets/images/html.svg"
import tailwindCss from "../assets/images/tailwind.svg"
import express from "../assets/images/Express-JS-logo.jpg"
import vercel from "../assets/images/vercel.png"


function Resume() {
  return (
     <>
        <article className="resume" data-page="resume">
        <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <ion-icon name="mail-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
        <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
               Geekster , Full Stack Bootcamp - remote
            </h4>
            <span>2023 - present</span>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
               Theem College of Engineering , Boisar 
            </h4>
            <span>2019 - 2023</span>
            <p className="timeline-text">
              B.Tech - Computer Science and Engineering - 8.57 CGPA
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Scholar Jr College, Bhiwandi
            </h4>
            <span>2017 - 2019</span>
            <p className="timeline-text">12th - 64%</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Al-Ummat English High School, Bhiwandi
            </h4>
            <span>2007 - 2017</span>
            <p className="timeline-text">10th - 69%</p>
          </li>
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <div className="skill-list content-card">
            <div className="skills-list " >
               <img src={c} alt="" />
            </div>
            <div className="skills-list " >
               <img src={java} alt="" />
            </div>
            <div className="skills-list " >
               <img src={javascript} alt="" />
            </div>
            <div className="skills-list " >
               <img src={react} alt="" />
            </div>
            <div className="skills-list " >
               <img src={node} alt="" />
            </div>
            <div className="skills-list " >
               <img src={mongoDB} alt="" />
            </div>
            <div className="skills-list " >
               <img src={sql} alt="" />
            </div>
            <div className="skills-list " >
               <img src={firebase} alt="" />
            </div>
            <div className="skills-list " >
               <img src={github} alt="" />
            </div>
            <div className="skills-list " >
               <img src={tailwindCss} alt="" />
            </div>
            <div className="skills-list " >
               <img src={css} alt="" />
            </div>
            <div className="skills-list " >
               <img src={html} alt="" />
            </div>
            <div className="skills-list " >
               <img src={express} alt="" />
            </div>
            <div className="skills-list " >
               <img src={vercel} alt="" />
            </div>

        </div>
      </section>
        </article>
     </>
  )
}

export default Resume