import React from 'react';
import ProductCard from './card';
import  { products }   from '../data';

class ProductList extends React.Component {
    render() {
      return (
          <div class="row justify-content-center">
              {products.map((item, id) => (
                <ProductCard id={id} product={item}/>
              ))}
          </div>
      )
    }
}

export default ProductList;

