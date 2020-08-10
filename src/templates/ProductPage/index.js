import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles'
import {
  ProductTitle,
  ProductDescription
} from './styles'

const ProductPage = ({ data, location }) => {
  const { shopifyProduct, stripeProduct } = data
  return (
    <>
      <SEO title={shopifyProduct.title} description={shopifyProduct.description} />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            {shopifyProduct.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={shopifyProduct.title}
              />
            ))}
          </GridLeft>
          <GridRight>
            <ProductTitle>{shopifyProduct.title}</ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: shopifyProduct.descriptionHtml }}
            />
            <ProductForm
              product={shopifyProduct}
              stripeData={stripeProduct}
              location={location}
            />
          </GridRight>
        </TwoColumnGrid>
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    stripeProduct(metadata: { handle: { eq: $handle } }) {
      id
      metadata {
        SKU
        handle
        priceId: price_id
      }
      active
      name
      object
      type
      description
    }
  }
`

export default ProductPage
