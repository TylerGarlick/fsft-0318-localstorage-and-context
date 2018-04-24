import React, { Fragment } from 'react'
import { Consumer } from '../Cart/Context'

export default () => {
  return (
    <Consumer>
      { ({ addToCart }) => {
        return (
          <Fragment>
            <h1>Products</h1>
            <button onClick={ e => addToCart({ name: 'Blah', price: 999 }) }>Add to Cart</button>
          </Fragment>
        )
      } }

    </Consumer>
  )
}
