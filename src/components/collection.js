import React from 'react';
import ProductCard from './card';
import  { products }   from '../data';

class ProductList extends React.Component {
    state={
      minValue:'',
      maxValue: '',
    }

    // Minimum Price Change
    handleMinValueChange = (e) => {
      this.setState({minValue : e.target.value })
    }

    // Maximum Price Change
    handleMaxValueChange = (e) => {
      this.setState({maxValue : e.target.value })
    }
    
    render() {
      const { minValue, maxValue } = this.state;

      return (
        <>
         <div className="price-filter">
         <label for="minValue">minimum Price</label>
         <input name="minValue" value={this.state.minValue} onChange={this.handleMinValueChange}></input>
         <label for="maxValue">maximum Price</label>
         <input value={this.state.maxValue} onChange={this.handleMaxValueChange}></input>
         </div>
          <div class="row justify-content-center">
          {products.filter((item) => minValue || maxValue ?  
          (parseInt(minValue) && parseInt(maxValue) ? (parseInt(item.Price) <= parseInt(maxValue) && parseInt(item.Price) >= parseInt(minValue)) : (parseInt(item.Price) <=parseInt(maxValue)) || (parseInt(item.Price) >= parseInt(minValue)) )
          : true)
            .map((item, i) => ( (
                <ProductCard id={item.id} product={item}/>
              )))} 
          </div>
          </>
      )
    }
}

export default ProductList;

