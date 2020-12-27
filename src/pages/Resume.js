import React from 'react';
import { Link } from 'react-router-dom';
import resumeSchema from 'resume-schema';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import ReducedCourses from '../components/Resume/ReducedCourses';
import Courses from '../components/Resume/Courses';

import References from '../components/Resume/References';

import courses from '../data/resume/courses';
// import skills from '../data/resume/skills';

import json from '../data/resume/resume.json';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

const reducedCourses = json.education.map((school) => school.courses).flat();

const Resume = () => (
  <Main
    title="Resume"
    description="Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
          <div className="link-container">
            {Object.keys(resumeSchema.schema.properties).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Education data={json.education} />
      <Experience data={json.work} />
      <Skills skills={json.skills} />
      <ReducedCourses data={reducedCourses} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;