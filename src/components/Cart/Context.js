import React, { Component } from 'react'

const { Consumer, Provider } = React.createContext('cart')

export {
  Consumer,
}

const saveCart = cart => localStorage.setItem('cart', JSON.stringify(cart))
const getCart = () => (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

export class CartProvider extends Component {

  state = {
    cart: (getCart() || [])
  }

  add = product => {
    this.setState({
      cart: [...this.state.cart, product]
    })
    saveCart(this.state.cart)
  }

  remove = product => {
    this.setState({
      cart: []
    })
    saveCart(this.state.cart)
  }

  clear = () => {
    this.setState({
      cart: []
    })
    saveCart(this.state.cart)
  }

  render() {
    return (
      <Provider
        value={ {
          state: this.state,

          cart: () => localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],

          addToCart: product => this.add(product),
          removeFromCart: product => this.remove(product),
          clearCart: () => this.clear(),

          totalItems: () => (getCart()).length,
          totalPrice: () => (getCart()).map(c => c.price).reduce((prev, current) => prev + current, 0)
        } }
      >
        { this.props.children }
      </Provider>
    )
  }
}
