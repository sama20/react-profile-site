import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.webp`} alt="" />
      </Link>
      <header>
        <h2>Moha Asghari</h2>
        {/* <h3>Full Stack Developer</h3> */}
        {/* <p><a href="mailto:asghari.moha@gmail.com">asghari.moha@gmail.com</a></p> */}
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mohamad Asghari. A full-stack developer with 8+ years of experience
        as a professional web developer graduated with a master&apos;s degree in
        computer engineering from <a href="https://en.um.ac.ir/">FUM</a>. I have my startup, also I&apos;ve worked for
        several companies.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Moha Asghari <Link to="/">mohacoding.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
