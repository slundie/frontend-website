import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/HeadMetadata.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Contact | Coding Blog"
          metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
        />
        <Header />
        <div className="contact-container">
          <div className="contact-section">
            <h1>Contact</h1>
            <p>Hi, I’m Sam, a guy with many interests. I like to dabble in writing code, building cars and machining</p>
            <p>If you have any comments, ideas, critiques, or you just want to say hi, don’t hesitate to send me an email at slundie@techisolutions.com.au!</p>
          </div>
          <div className="contact-section">
            <h2>Around the Web</h2>
            <ul>
              <li><strong>Email</strong>: slundie@techisolutions.com.au</li>
              <li><strong>GitHub</strong>: <a href="https://github.com/slundie">My github bits and bobs</a></li>
              <li><strong>Twitter</strong>: <a href="https://twitter.com/Tassiebloke0">Twitter I rarely use</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}