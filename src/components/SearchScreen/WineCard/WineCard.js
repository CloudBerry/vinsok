import React, { Component } from 'react'
import Vinmonopolet from 'vinmonopolet'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

const style = {
  textAlign: 'left',
}


const WineCard = ({ wine }) => (
      <ListItem
        style={style}
        primaryText={wine.name}
        leftAvatar={<Avatar src={wine.images[0].url} />}
        secondaryText={wine.productType + ", " + wine.mainCountry.name}
      />

    )

export default WineCard
