import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import { IndexLink, Link } from 'react-router'

export const HomeView = () => (
  <div>
    <section role="main">
      <article>
        <h1> Howdy,</h1>
        <h2> My name is Ivan Pidov and I am located in Sofia, Bulgara. </h2>
        <p>
          I'm JavaScript developer working with <a href="https://facebook.github.io/react/">React</a>. <br />
          You can find more info about me at the <Link to='/blog'>blog</Link> or if you want to get in touch, drop me a line at <a href="mailto:ivan.pidov@gmail.com">ivan.pidov@gmail.com</a> or check out the links below
        </p>
      </article>
    </section>

    <footer>
      <ul>
        <li><a href="https://github.com/pidov">github</a></li>
        <li><a href="https://linkedin.com/in/ivanpidov">linkedin</a></li>
        <li><a href="https://twitter.com/IvanPidov">twitter</a></li>
      </ul>
    </footer>
  </div>
)

export default HomeView
