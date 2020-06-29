import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Grid } from 'react-flexbox-grid'

import BarChart from '../../components/StatsChart/StatsChart'
import { selectFavourites } from '../../selectors/selectPokemon'

function Comparison(props) {
  const dataset1 = [21, 31, 22, 17, 25, 18, 29, 14, 9]
  const dataset2 = [22, 23, 2, 14, 5, 11, 23, 3, 9]
  console.log(props.favouritePokemon)
    return (
      <Grid className="Comparison">
        <Row around="xs">
          {props.favouritePokemon.map(pokemon => <img src={pokemon.sprite} />)}
          <BarChart data={dataset2} />
          <BarChart data={dataset1} />
        </Row>
      </Grid>
      
    )
}

const mapStateToProps = state => ({
    favouritePokemon: selectFavourites(state),
})

export default connect(mapStateToProps)(Comparison)