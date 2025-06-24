import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import BreadCrum from '../BreadCrum/BreadCrum';
import ProductDisplay from '../BreadCrum/ProductDisplay';
import DescriptionBox from '../BreadCrum/DescriptionBox';
import RelatedProducts from '../BreadCrum/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find(item => item.id === Number(productId));

  if (!product) return <div className="text-center mt-10">Product not found</div>;

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
      {/* Add product display here */}
    </div>
  );
};

export default Product;
