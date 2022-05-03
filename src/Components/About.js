import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = "images/resume.pdf";
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Grayson Gayle Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>
                     {`For most of my life, music has been present throughout in many different forms.  I started on piano in my youth like any fortunate child should. Entering middle school, I had the choice to stick with piano or join the band; I chose the band, and trumpet because I apparently have a small mouth. Over the next seven years, I had the priviledge to learn and take lessons from Randy Graham.  Hallmarked by his ability to make a phrase, he was genuine, caring, and served an instrumental role in my development as a musician. After high school, I spent the summer of 2013 with Carolina Crown Drum & Bugle Corps. `}
                  </p>
                  <p>{`In college, I had put the horn down for a year, in pursuit of a degree in information systems at the McCombs School of Business at UT Austin. During this time, and with stern encouragment from my mother, I couldn't just give up on music.  I was lucky to spend my next two years in undergrad playing with the university orchestra. This experience was pivotal towards my eventual career shift.  I finished my business degree, and entered the work force with bliss, starting as a software developer for a technology consulting firm in Dallas.`}</p>
                  <p>
                     {`While I enjoyed the fruits of a software career, I had accumulated an intense desire to pursue music as something more than an intense hobby.  For the next few years I had played with multiple community orchestras in DFW, while preparing to audition for graduate schools. A great deal of patience and persistence over the years had finally yielded an opportunity to study trumpet performance at UT Austin with Billy Hunter of the Metropolitan Opera. I graduated in May 2022 with my Masters in trumpet performance.  	     `}
                  </p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name} Gayle</span><br />
                           <span>{phone}</span><br />
                           <p><a href="mailto:grayson.gayle95@gmail.com">{email}</a></p>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} target="_blank" download="Grayson Gayle, Resume.pdf" className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section >
      );
   }
}

export default About;
