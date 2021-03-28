import React from 'react';
import { Card, Button  } from 'react-bootstrap';

class ProductCard extends React.Component {
    render() {
      return (
        <Card className="margin-card" id={this.props.product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.product.image} />
        <Card.Body>
          <Card.Title>{this.props.product.title}</Card.Title>
          <Card.Text>
         {this.props.product.Price}
    </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
      )
    }
}

export default ProductCard;
