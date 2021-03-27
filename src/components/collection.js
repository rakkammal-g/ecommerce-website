import React from 'react';
import ProductCard from './card';
import  { products }   from '../data';

class ProductList extends React.Component {
    render() {
      return (
          <div class="row">
              {products.map((item, id) => (
                <ProductCard id={id} product={item}/>
              ))}
          </div>
      )
    }
}

export default ProductList;

