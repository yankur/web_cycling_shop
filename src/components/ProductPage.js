import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions'
import styled from "styled-components";

 class ProductPage extends Component{

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render(){
        let productList = this.props.products.map(product=>{
            return(
                <CardWrapper>
                    <div className="card" key={product.id}>
                            <div className="card-image">
                                <img src={product.image} alt={product.name}/>
                                <span className="card-name">{product.name}</span>
                                <span to="/" onClick={()=>{this.handleClick(product.id)}}>
                                    <i className="add">add</i>
                                </span>
                            </div>

                            <div className="card-content">
                                <p>{product.desc}</p>
                                <p><b>Price: {product.price}$</b></p>
                            </div>
                     </div>
                </CardWrapper>
            )
        })
        return(
            <ProductWrapper>
                <div className="container">
                    <h3 className="center ">CYCLING JERSEYS</h3>
                    <div className="box">
                        {productList}
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      products: state.products
    }
  }

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

const CardWrapper = styled.div`
    padding-top: 3rem`

const ProductWrapper = styled.div`
    text-align: center;
    line-height: 0.5rem;
    margin-top: 2rem;
`

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)