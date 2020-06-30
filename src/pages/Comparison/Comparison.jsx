import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components'

import StatsChart2 from '../../components/StatsChart/StatsChart2'
import SearchDropDown from '../../components/SearchableDropDown/SearchDropDown'
import { 
  getPokemon, 
  getPokemonByGeneration,
  getPokemonDetailsForComparison, 
} from '../../actions/simpleAction'
import { selectPokemon, selectComparisonState } from '../../selectors/selectPokemon'
import Icons from '../../styles/icons'

const PokemonName = styled.p`
    text-transform: capialize;
`

export default function ComparisonView(props) {
    return (
      <Container>
          <Row>
            <Col sm>
               <SearchDropDown 
                    placeholder="Search for pokemon here" 
                    onClick={props.onClickDropDownItem} 
                    items={props.pokemonDropDownData}
                    index={0}
                />
            </Col> 
            <Col>
              {props.pokemonForComparison[0] && props.pokemonForComparison[0].name &&
                <div>
                    <p className="capitalize">{props.pokemonForComparison[0].name}</p>
                    <Row>
                        <img alt={props.pokemonForComparison[0].name} src={props.pokemonForComparison[0].sprites.front_default} />
                        <img alt={props.pokemonForComparison[0].name} src={props.pokemonForComparison[0].sprites.back_default} />
                    </Row>
                    <StatsChart2 data={props.pokemonForComparison[0].stats} />
                </div>
              }
            </Col>
            <Col sm>
              {props.pokemonForComparison[1] && props.pokemonForComparison[1].name &&
                <div>
                    <p className="capitalize">{props.pokemonForComparison[1].name}</p>
                    <Row>
                        <img alt={props.pokemonForComparison[1].name} src={props.pokemonForComparison[1].sprites.front_default} />
                        <img alt={props.pokemonForComparison[1].name} src={props.pokemonForComparison[1].sprites.back_default} />
                    </Row>
                    <StatsChart2 data={props.pokemonForComparison[1].stats} />
                </div>
              }
            </Col>
          </Row>
      </Container> 
    )
}
