import React, { Component } from 'react'
import Vinmonopolet from 'vinmonopolet'

import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import { List } from 'material-ui/List'

import WineCard from './WineCard/WineCard'

class App extends Component {

  constructor() {
    super()

    this.state = {
      wineName: '',
      products: [],
    }

    this.startWineSearch = this.startWineSearch.bind(this)
  }

  startWineSearch() {
    Vinmonopolet.searchProducts(this.state.wineName).then(res => {
      this.setState({ products: res.products.filter(wine => wine.status === 'active') })
    })
  }

  render() {
    console.log(this.state.products)
    const listItems = this.state.products.map(w => <WineCard wine={w} key={w.code} />)
    return (
      <div>
        <div>
          <TextField
            hintText="Navn på vinen"
            value={this.state.wineName}
            onChange={(_, v) => this.setState({ wineName: v })}/>
          <IconButton
            onTouchTap={this.startWineSearch}>
            <i className="material-icons">search</i>
          </IconButton>
        </div>
        <List>
          {listItems}
        </List>
      </div>
    )
  }
}

export default App
