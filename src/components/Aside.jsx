import profile from "../assets/images/profile.png";
import { useState } from "react";

function Aside() {
   const [isInfoVisible, setIsInfoVisible] = useState(false);

   const handleToggleClick = () => {
     setIsInfoVisible(prevState => !prevState);
   };
  return (
   <aside className={`sidebar ${isInfoVisible ? 'active' : ''}`} data-sidebar="">
   <div className="sidebar-info">
     <figure className="avatar-box">
       <img
         alt="Ibrahim"
         src={profile}
         style={{
           borderRadius: "50%",
         }}
         width="80"
       />
     </figure>
     <div className="info-content">
       <h1 className="name" title="Ibrahim Momin">
       Ibrahim Momin
       </h1>
       <p className="title">Web developer</p>
     </div>

     <button 
       className="info_more-btn" 
       data-sidebar-btn="" 
       onClick={handleToggleClick}
     >
       <span>{isInfoVisible ? 'Hide Contacts' : 'Show Contacts'}</span>
       <ion-icon name={isInfoVisible ? 'chevron-up' : 'chevron-down'} />
     </button>
   </div>
   <div className="sidebar-info_more">
     <div className="separator" />
     <ul className="contacts-list">
       <li className="contact-item">
         <div className="icon-box">
           <ion-icon name="mail-outline" />
         </div>
         <div className="contact-info">
           <p className="contact-title">Email</p>
           <a
             className="contact-link"
             href="mailto:mominibrahim98.im85@gmail.com"
           >
             mominibrahim98.im85@gmail.com
           </a>
         </div>
       </li>
       <li className="contact-item">
         <div className="icon-box">
           <ion-icon name="phone-portrait-outline" />
         </div>
         <div className="contact-info">
           <p className="contact-title">Phone</p>
           <a className="contact-link" href="tel:+918956631416">
             +91-8956631416
           </a>
         </div>
       </li>
       <li className="contact-item">
         <div className="icon-box">
           <ion-icon name="calendar-outline" />
         </div>
         <div className="contact-info">
           <p className="contact-title">Birthday</p>
           <time dateTime="1982-06-23">Oct 01 - 2001</time>
         </div>
       </li>
       <li className="contact-item">
         <div className="icon-box">
           <ion-icon name="location-outline" />
         </div>
         <div className="contact-info">
           <p className="contact-title">Location</p>
           <address>Bhiwandi, Mumbai</address>
         </div>
       </li>
     </ul>
     <div className="separator" />
     <ul className="social-list">
       <li className="social-item">
         <a className="social-link" href="https://github.com/Ibrahim1249">
           <ion-icon name="logo-github" />
         </a>
       </li>
       <li className="social-item">
         <a
           className="social-link"
           href="https://www.linkedin.com/in/ibrahim-momin-a7761a1aa/"
         >
           <ion-icon name="logo-linkedin" />
         </a>
       </li>
     </ul>
   </div>
 </aside>
  )
}

export default Aside