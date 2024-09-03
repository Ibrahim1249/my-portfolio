import iconDesign from "../assets/images/icon-design.svg"
import iconDev from "../assets/images/icon-dev.svg"
import computer from "../assets/images/computer.png"
import versionControl from "../assets/images/version-control.png"


function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
        I'm a Full Stack Developer with a strong command of the MERN stack MongoDB, Express.js, React, and Node.js. My expertise in these technologies allows me to build dynamic, responsive, and fully functional web applications from the ground up.
        </p>
        <p>
        My job is to develop robust, scalable, and user-friendly websites that not only meet functional requirements but also deliver a seamless and engaging user experience. With a keen eye for detail and a passion for clean, efficient code, I ensure your product is both visually appealing and highly performant. My goal is to effectively convey your message and brand identity through creative and intuitive web solutions.</p>
      </section>
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={iconDesign}
                alt="design icon"
                width={60}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={iconDev}
                alt="Web development icon"
                width={60}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={computer}
                alt="mobile app icon"
                width={60}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Programming</h4>
              <p className="service-item-text">
                Leveraging code to build innovative solutions and solve complex
                problems.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={versionControl}
                alt="camera icon"
                width={60}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Version Control</h4>
              <p className="service-item-text">
                Collaborating seamlessly and tracking changes with precision for
                streamlined development workflows.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default About