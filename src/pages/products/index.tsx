import React, { useState } from "react"
import Layout from "../../components/Layout"
import ProductCardItem from "../../components/ProductCardItem"
import Seo from "../../components/Seo"
import { productsStyles } from "../../styles/products.module.less"

const Products: React.FC = () => {
  const [currentSize, setCurrentSize] = useState<"big" | "small">("big")
  const onChangeSize = (Size: "big" | "small") => setCurrentSize(Size)

  return (
    <Layout>
      <Seo title="Products" />
      <div className={productsStyles}>
        <h1 className="title">All Products</h1>
        <div className="size-btn">
          <button
            className={currentSize === "big" ? "check" : undefined}
            onClick={() => onChangeSize("big")}
          >
            <svg
              className="fill-current w-4 h-4"
              viewBox="0 0 341.333 341.333"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="grid"
            >
              <path d="m128 128h85.333v85.333h-85.333z"></path>
              <path d="m0 0h85.333v85.333h-85.333z"></path>
              <path d="m128 256h85.333v85.333h-85.333z"></path>
              <path d="m0 128h85.333v85.333h-85.333z"></path>
              <path d="m0 256h85.333v85.333h-85.333z"></path>
              <path d="m256 0h85.333v85.333h-85.333z"></path>
              <path d="m128 0h85.333v85.333h-85.333z"></path>
              <path d="m256 128h85.333v85.333h-85.333z"></path>
              <path d="m256 256h85.333v85.333h-85.333z"></path>
            </svg>
          </button>
          <button
            className={currentSize === "small" ? "check" : undefined}
            onClick={() => onChangeSize("small")}
          >
            <svg
              className="fill-current w-4 h-4"
              viewBox="0 0 560.414 560.415"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="List"
            >
              <path d="m115.65 24.92h-82.143c-18.476 0-33.507 15.031-33.507 33.501v82.143c0 18.477 15.031 33.501 33.507 33.501h82.143c18.476 0 33.501-15.031 33.501-33.501v-82.143c-.006-18.476-15.031-33.501-33.501-33.501z"></path>
              <path d="m526.908 24.92h-314.703c-18.477 0-33.501 15.031-33.501 33.501v82.143c0 18.477 15.025 33.501 33.501 33.501h314.703c18.477 0 33.506-15.031 33.506-33.501v-82.143c0-18.476-15.037-33.501-33.506-33.501z"></path>
              <path d="m115.65 205.632h-82.143c-18.476 0-33.507 15.031-33.507 33.501v82.143c0 18.476 15.031 33.5 33.507 33.5h82.143c18.476 0 33.501-15.024 33.501-33.5v-82.143c-.006-18.476-15.031-33.501-33.501-33.501z"></path>
              <path d="m526.908 205.632h-314.703c-18.477 0-33.501 15.031-33.501 33.501v82.143c0 18.476 15.025 33.5 33.501 33.5h314.703c18.477 0 33.506-15.024 33.506-33.5v-82.143c0-18.476-15.037-33.501-33.506-33.501z"></path>
              <path d="m115.65 386.343h-82.143c-18.476 0-33.507 15.031-33.507 33.507v82.143c0 18.477 15.031 33.501 33.507 33.501h82.143c18.476 0 33.501-15.024 33.501-33.501v-82.143c-.006-18.476-15.031-33.507-33.501-33.507z"></path>
              <path d="m526.908 386.343h-314.703c-18.477 0-33.501 15.03-33.501 33.507v82.143c0 18.477 15.025 33.501 33.501 33.501h314.703c18.477 0 33.506-15.024 33.506-33.501v-82.143c0-18.476-15.037-33.507-33.506-33.507z"></path>
            </svg>
          </button>
        </div>
        <div className="product-card">
          {new Array(9).fill({}).map(() => (
            <ProductCardItem
              path="Blue Desk"
              size={currentSize}
              name="Blue Desk"
              price="$250.00"
              picSrc={
                [
                  "https://demo.elasticpath.com/static/12af663b87c3a4933fc3930bae18e7e7/e9c7b/486349d6-c234-4c31-87ab-131f90230fb5.png",
                  " https://demo.elasticpath.com/static/13eae8f7d28eeb66a999d20f919a4d72/c1ced/a0063567-2c2a-4546-ba34-7709991ef8f8.png",
                  "https://demo.elasticpath.com/static/b103597cb29d58be491915f41328a444/c1ced/f21d99f6-242f-4921-8fb8-1af677b83c2e.png",
                ][
                  Math.floor(
                    Math.random() * (Math.floor(2) - Math.ceil(0) + 1)
                  ) + Math.ceil(0)
                ]
              }
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Products
