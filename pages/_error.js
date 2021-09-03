import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
  static getInitialProps({ req, res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null

    return {
      statusCode: statusCode
    }
  }

  render () {
    return (
      <div className="layout-wrapper">
         <HeadMetadata
          title="Error | Coding Blog"
        />
        <Header />
        <div className="error-container">
          {
            this.props.statusCode === 404 ?
            <>
              <h1>404 Page Not Found</h1>
              <p>Nope it's not working....</p>
            </> :
            <>
              <h1>An Error Occurred</h1>
              <p>An error occurred when trying to fulfill your request. Please try reloading the page or going back to the homepage.</p>
            </>
          }
        </div>
        <Footer />
      </div>
    )
  }
}