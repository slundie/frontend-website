import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/HeadMetadata.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="About Me | Coding Blog"
          metaDescription="I’m Sam Lundie, a Systems Operations Manager."
        />
        <Header />
        <div className="about-container">
          <div className="about-section">
            <h1>About Me</h1>
            <p>I’m Sam Lundie, a Systems Operations Manager.</p>
            <p>I started this website as a place to document everything I'm doing and to help myself and others learn.</p>
          </div>
          <div className="about-section">
            <h2>My Projects</h2>
            <ul>
              <li><a href="https://github.com/discourse/discourse">Discourse</a> – A platform for community discussion. Free, open, simple.</li>
              <li><a href="https://github.com/nmajor25/seconds-converter">Seconds Converter</a> – Convert milliseconds or seconds to days, hours, minutes, and seconds in node.js.</li>
              <li><a href="https://github.com/showdownjs/showdown">Showdown</a> – A bidirectional Markdown to HTML to Markdown converter written in Javascript.</li>
              <li><a href="https://github.com/node-schedule/node-schedule">Node Schedule</a> –A cron-like and not-cron-like job scheduler for Node.</li>
            </ul>
          </div>
          <div className="about-section">
            <h2>Currently Using</h2>
            <ul>
              <li><strong>Computer</strong>: Custom Linux Desktop</li>
              <li><strong>Hosting</strong>: <a href="https://m.do.co/c/ce20017d8588">DigitalOcean</a></li>
              <li><strong>Editor</strong>: <a href="https://atom.io">Atom</a></li>
              <li><strong>Coding Framework</strong>: <a href="https://nextjs.org">Next.js</a></li>
              <li><strong>Syntax Highlighting</strong>: <a href="https://prismjs.com">PrismJS</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}