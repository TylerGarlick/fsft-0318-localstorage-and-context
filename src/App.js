import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'

import Styled from 'styled-components'

import { CartProvider } from './components/Cart/Context'
import ProductsPage from './components/Products'
import CartPage from './components/Cart'

const Container = Styled.section`
  background: white;
`



class App extends Component {
  render() {

    return (
      <Fragment>
        <CartProvider>
          <Container>
            <Router>
              <Switch>
                <Route exact path="/" component={ ProductsPage } />
                <Route path="/cart" component={ CartPage } />
                <Route component={ () => (<div><h1>Four Oh Four....</h1></div>) } />

              </Switch>
            </Router>
          </Container>
        </CartProvider>
      </Fragment>

    )
  }
}

export default App
