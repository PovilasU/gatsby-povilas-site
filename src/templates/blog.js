import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      body {
        raw
        references {
          description
          file {
            url
          }
        }
      }
    }
  }
`

const Blog = props => {
  const options1 = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)
        // const alt = node.data.target.fields.title["en-US"]
        // const url = node.data.target.fields.file["en-US"].url
        // return <img alt={alt} src={url} />
      },
    },
  }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // console.log(node)
        const alt = node.data.target.title
        const url = node.data.target.fixed.src
        console.log(url)
        // return <img alt={alt} src={url} />
      },
    },
  }

  const references = props.data.contentfulBlogPost.body.references

  const images = references.map((ref, i) => {
    return (
      <figure key={i}>
        <img src={ref.file.url} alt={ref.description} />
        <figcaption>{ref.description}</figcaption>
      </figure>
    )
  })

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw)
      )}

      {images}
    </Layout>
  )
}

export default Blog
