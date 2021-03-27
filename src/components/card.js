import React from 'react';
import { Card, Button  } from 'react-bootstrap';

class ProductCard extends React.Component {
    render() {
      return (
        <Card id={this.props.product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.product.image} />
        <Card.Body>
          <Card.Title>{this.props.product.title}</Card.Title>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
      )
    }
}

export default ProductCard;
