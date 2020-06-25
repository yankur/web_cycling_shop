import {ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, ADD_QUANTITY, EMPTY_CART} from './actionTypes.js';

const initialState = {
  products: [
      {
      "id": 0,
      "name": "TS1",
      "image": "https://shop.vintageofbikes.com/wp-content/uploads/2017/07/peugggg2-300x300.jpg",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 2,
      "selected": false
    },
    {
      "id": 1,
      "name": "TS2",
      "image": "https://shop.vintageofbikes.com/wp-content/uploads/2017/10/Capture-d%E2%80%99e%CC%81cran-2018-12-19-a%CC%80-3.10.16-PM-300x300.png",
      "desc": "Nice velo T-shirt",
      "price": "$30",
      "quantity": 1,
      "selected": false
    },
    {
      "id": 2,
      "name": "TS3",
      "image": "https://shop.vintageofbikes.com/wp-content/uploads/2017/07/Sans-titre-5-300x300.jpg",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 3,
      "selected": false
    },
    {
      "id": 3,
      "name": "TS4",
      "image": "https://shop.vintageofbikes.com/wp-content/uploads/2017/07/Capture-d%E2%80%99e%CC%81cran-2017-08-21-a%CC%80-12.17.25-copie-300x300.jpg",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 2,
      "selected": false
    },
    {
      "id": 4,
      "name": "TS5",
      "image": "https://shop.vintageofbikes.com/wp-content/uploads/2017/07/maillot-cycliste-z-300x300.jpg",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 2,
      "selected": false
    },
      {
      "id": 5,
      "name": "TS6",
      "image": "https://shop.vintageofbikes.com/wp-content/uploads/2017/08/HTB14AHhSpXXXXb8XXXXq6xXFXXX9-300x300.jpg",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 2,
      "selected": false
    }
    ,
      {
      "id": 6,
      "name": "TS7",
      "image": "https://shop.vintageofbikes.com/wp-content/uploads/2017/08/Capture-d%E2%80%99e%CC%81cran-2017-09-07-a%CC%80-16.11.50-300x300.png",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 2,
      "selected": false
    }
    ,
      {
      "id": 7,
      "name": "TS8",
      "image": "https://shop.vintageofbikes.com/wp-content/uploads/2017/08/hjbkj-300x300.jpg",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 2,
      "selected": false
    }
    ,
      {
      "id": 8,
      "name": "TS9",
      "image": "https://i.ebayimg.com/images/g/tqcAAOSwXIdcO4gp/s-l300.png",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 2,
      "selected": false
    }
    ,
      {
      "id": 9,
      "name": "TS10",
      "image": "https://shop.vintageofbikes.com/wp-content/uploads/2017/08/kbj-300x300.jpg",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 2,
      "selected": false
    }
    ,
      {
      "id": 10,
      "name": "TS11",
      "image": "https://i.ebayimg.com/images/g/0IUAAOSw0NVbt6aG/s-l300.jpg",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 2,
      "selected": false
    }
    ,
      {
      "id": 11,
      "name": "TS12",
      "image": "https://cdn.shopify.com/s/files/1/0012/0438/7852/products/peugeot-michelin-esso-shell-retro-cycling-jersey-cycling-jersey-outdoor-good-store-white-s-8_300x300.jpg?v=1574496722",
      "desc": "Nice velo T-shirt",
      "price": "$20",
      "quantity": 2,
      "selected": false
    }
  ],
  addedProducts:[],
  total: 0
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:
         let addedProduct = state.products.find(product=> product.id === action.id)
         let existed_product= state.addedProducts.find(product=> action.id === product.id)
         if(existed_product)
         {
            addedProduct.quantity += 1
             return{
                ...state,
                 total: state.total + addedProduct.price
                  }
         }
         else{
             addedProduct.quantity = 1;
             let newTotal = state.total + addedProduct.price

             return{
                ...state,
                addedProducts: [...state.addedProducts, addedProduct],
                total : newTotal
            }
         }

    case REMOVE_FROM_CART:
        let productToRemove= state.addedProducts.find(product=> action.id === product.id)
        let new_products = state.addedProducts.filter(product=> action.id !== product.id)

        let newTotal = state.total - (productToRemove.price * productToRemove.quantity )
        console.log(productToRemove)
        return{
            ...state,
            addedProducts: new_products,
            total: newTotal
        }

    case ADD_QUANTITY:
          let addedProduct1 = state.products.find(product=> product.id === action.id)
          addedProduct1.quantity += 1
          let newTotal1 = state.total + addedProduct1.price
          return{
              ...state,
              total: newTotal1
          }

    case SUB_QUANTITY:
      let addedItem = state.products.find(product=> product.id === action.id)
        if(addedItem.quantity === 1){
            let new_items = state.addedProducts.filter(product=>product.id !== action.id)
            let newTotal2 = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal2
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal3 = state.total - addedItem.price
            return{
                ...state,
                total: newTotal3
            }
        }

    // case EMPTY_CART:
    //   return {
    //     ...state,
    //     products: state.products.map(product =>
    //       product.selected
    //         ? {...product, selected: false, quantity: 1}
    //         : product,
    //     ),
    //   };

    default:
      return state;
  }
};

export default CartReducer;