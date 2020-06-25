import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeFromCart, addQuantity, subtractQuantity} from '../redux/actions';
import styled from "styled-components";


class Cart extends Component{

    handleRemove = (id)=>{
        this.props.removeFromCart(id);
    }

    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){
        let addedProducts = this.props.products.length ?
            (
                this.props.products.map(product=>{

                    return(
                        <li className="collection-product avatar" key={product.id}>
                            <div className="product-img">
                                <img src={product.image} alt={product.image} className=""/>
                            </div>

                            <div className="product-desc">
                                <span className="name">{product.name}</span>
                                <p>{product.desc}</p>
                                <p><b>Price: {product.price}$</b></p>
                                <p>
                                    <b>Quantity: {product.quantity}</b>
                                </p>
                                <AddRemoveWrapper>
                                    <div>
                                        <Link to={"/cart"}>
                                            <i className="add-remove" onClick={()=>{this.handleAddQuantity(product.id)}}>
                                                <h1>
                                                    +
                                                </h1>
                                            </i>
                                            <i className="add-remove" onClick={()=>{this.handleSubtractQuantity(product.id)}}>
                                                <h1>
                                                    -
                                                </h1>
                                            </i>
                                        </Link>
                                    </div>
                                </AddRemoveWrapper>
                                <button className="removeButton"onClick={()=>{this.handleRemove(product.id)}}>REMOVE</button>
                                 {/*<li className="total"><b>Total: {this.props.total} $</b></li>*/}
                            </div>
                        </li>
                    )
                })
            ):

            (
                <p>Nothing.</p>
            )

       return(
          <CartWrapper>
            <div className="container">
                <div className="cart">
                    <h3 className="text-uppercase">YOU HAVE ORDERED:</h3>
                    <ul className="collection box">
                        {addedProducts}
                    </ul>
                </div>
            </div>
          </CartWrapper>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedProducts,
        // total: state.total,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeFromCart: (id)=>{dispatch(removeFromCart(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

const CartWrapper = styled.div`
  text-align: center`

const AddRemoveWrapper = styled.div`
  color: black;
  font-weight: 400`


export default connect(mapStateToProps, mapDispatchToProps)(Cart)