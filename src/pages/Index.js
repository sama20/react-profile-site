import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main
    description={
      "Moha Asghari's Resume. Fullstack web developer. Expert in react, javascript, php and laravel."
    }
    fullPage="true"
  >
    <article className="post" id="index">
      <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.webp`} alt="" />
        </Link>
        <header>
          <h2 style={{ marginBottom: '5px' }}>Moha Asghari</h2>
          <h4>A Fullstack web developer</h4>
          {/* <h3>Full Stack Developer</h3> */}
          <p><a href="mailto:asghari.moha@gmail.com">asghari.moha@gmail.com</a></p>
        </header>
      </section>
      <p>
        Hi everyone,
        <br />
        Welcome to my website. I am Moha Asghari a full stack web developer.{' '}
        This site is written by React{' '}
        and here you can find any information about me.{' '}
        Please feel free to read follow sections{' '}
        <div className="button-holder">
          <Link to="/resume" className="button">resume</Link>{' '}
          <Link to="/about" className="button">about</Link>{' '}
          <Link to="/projects" className="button">projects</Link>{' '}
          <Link to="/stats" className="button">site statistics</Link>{' '}
          <Link to="/contact" className="button">contact</Link>{' '}
        </div>
        <br />
        <div id="footer">
          <span className="copyright">
            Also you can get the source of this project in <Link to="https://github.com/sama20/react-profile-site">Github ( here )</Link>
          </span>
        </div>
      </p>
    </article>
  </Main>
);

export default Index;
