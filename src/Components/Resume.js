import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><b>{education.school}</b>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })

      var teachers = this.props.data.teachers.map((t) => {
        return <div key={t.name}>
          <p className="info"><b>{t.name}</b><p>{t.title}</p></p></div>
      });
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Teachers</span></h1>
          </div>

          <div className="nine columns main-col">
            {teachers}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Teaching</span></h1>
          </div>

          <div className="nine columns main-col">
            {/* {work} */}
            <p className="info">
              Every student has the ability to succeed, and it is my job as a teacher to guide them towards
              their fullest potential, regardless of whether or not they choose to pursue music professionally. I
              have high expectations for each of my students and demand a high level of excellence, but what
              I find most important is the journey of development towards each student’s successes.
              Cultivating their own musical voice is how each student will develop curiosity and creativity and
              discover their inner voice, their art, and themselves.
            </p>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
