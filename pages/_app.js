// layout
import "../styles/layout.css"

// components
import "../styles/components/header.css"
import "../styles/components/footer.css"

// pages
import "../styles/pages/homepage.css"
import "../styles/pages/blog-posts.css"
import "../styles/pages/post.css"
import "../styles/pages/contact.css"
import "../styles/pages/about.css"

// External import css style from Prism 
import "../styles/prismjs.css"

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }