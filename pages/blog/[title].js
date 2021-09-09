import { Component } from "react"
import Prism from "prismjs"

import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetadata from "../../components/HeadMetadata.js"
import moment from "moment"

import getBlogPostByUrlTitle from "../../api/getBlogPostByUrlTitle.js"
import GoogleAnalytics from "../../components/googleAnalytics.js"

export default class extends Component {
  static async getInitialProps ({ query }) {
    const apiResult = await getBlogPostByUrlTitle(query.title)
  
    return {
      post: apiResult && apiResult.post,
      getDataError: apiResult && apiResult.getDataError,
      notFoundError: apiResult && apiResult.notFoundError
    }
  }  
  
  componentDidMount() {
    Prism.highlightAll()
  }

  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Your Blog Post Title | Coding Blog"
          metaDescription="This meta description will be pulled from our backend REST API when we have it build later on in this course."
        />
        <GoogleAnalytics />
        <Header />
        <div className="blog-post-container">
          {
            this.props.post && !this.props.getDataError && !this.props.notFoundError ?
            <>
              <div className="blog-post-top-section">
                <h1>{this.props.post.title}</h1>
                <div className="blog-post-top-meta">
                  <span>{moment.unix(this.props.post.dateTimestamp).format("MMMM Do, YYYY")}</span>
                  {
                    this.props.post.tags.map((tag, index) => {
                      return (
                        <a
                          className="blog-post-top-tag-btn"
                          key={index}
                          href={`/blog/tags/${tag}`}
                        >
                          <span>{tag}</span>
                        </a>
                      )
                    })
                  }
                </div>
              </div>
              <div dangerouslySetInnerHTML={{__html: this.props.post.markdownContent}} className="blog-post-body-content"></div>
            </> :
            <div className="blog-post-get-data-error-msg">
              {
                this.props.notFoundError ?
                <span>Blog post not found.</span> :
                <span>An error occurred.</span>
              }
            </div>
          }
        </div>
        <Footer />
      </div>
    )
  }
}