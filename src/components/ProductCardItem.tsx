import * as React from "react"
import { Link } from "gatsby"
import { ProductCardItemStyles } from "../styles/ProductCardItem.module.less"

type ProductCardItemPropsType = {
  /**
   * 商品卡片大小
   */
  size: "big" | "small"
  /**
   * 商品详情路径
   */
  path: string
  /**
   * 商品小图
   */
  picSrc: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品价格
   */
  price: string
}

const ProductCardItem: React.FC<ProductCardItemPropsType> = ({
  size,
  path,
  picSrc,
  name,
  price,
}) => {
  return (
    <article className={ProductCardItemStyles}>
      <div className={size === "big" ? "big-size" : "small-size"}>
        <Link to={path}>
          <div className="product-item">
            <div className="img">
              <img src={picSrc} alt="" />
            </div>
            <div className="desc">
              <div className="name">{name}</div>
              <span className="price">{price}</span>
            </div>
          </div>
        </Link>
      </div>
    </article>
  )
}
export default ProductCardItem
