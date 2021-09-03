import { Component } from "react"

import Header from "../../../components/header.js"
import Footer from "../../../components/footer.js"
import HeadMetadata from "../../../components/HeadMetadata.js"

import getBlogPostsByTag from "../../../api/getBlogPostsByTag.js"

export default class extends Component {
  static async getInitialProps ({ query }) {
    const apiResult = await getBlogPostsByTag(query.tag)
  
    return {
      posts: apiResult && apiResult.posts,
      tag: query.tag
    }
  }

  render () {
    return (
      <div className="layout-wrapper">
            <HeadMetadata
              title={`Blog posts tagged as "${this.props.tag}" | Coding Blog`}
              metaDescription={`All blog posts tagged as "${this.props.tag}".`}
            />
        <Header />
        <div className="blog-posts-container">
          <h1>Blog posts tagged as <u>{this.props.tag}</u></h1>
        <div className="blog-posts-list">
            {
              this.props.posts ?
              this.props.posts.map((post, index) => {
                return (
                  <a key={index} href={`/blog/${post.urlTitle}`}>
                    <div className="blog-posts-list-item">
                      <div className="blog-posts-thumbnail">
                        <img src={post.thumbnailImageUrl} />
                      </div>
                      <div className="blog-posts-list-item-title-and-date">
                        <h2>{post.title}</h2>
                        <div className="blog-posts-list-item-date">
                          <span>{moment.unix(post.dateTimestamp).format("MMMM Do, YYYY")}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                )
              }) : null
            }
          </div>
      </div>
        <Footer />
      </div>
    )
  }
}