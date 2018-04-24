import React, { Fragment } from 'react'
import { Consumer } from './Context'

export default () => (
  <Fragment>
    <Consumer>
      { ({ state, cart, totalItems, totalPrice }) => {

        const currentCart = cart()
        const items = totalItems()
        const price = totalPrice()

        return (
          <Fragment>
            <h1>Cart</h1>
            { currentCart.map((c, index) => (
              <Fragment key={ index }>
                <h3>{ c.name }</h3>
              </Fragment>
            )) }

            <div>Total Items: { items }</div>
            <div>Total Price: { price }</div>
          </Fragment>
        )
      } }

    </Consumer>

  </Fragment>
)
