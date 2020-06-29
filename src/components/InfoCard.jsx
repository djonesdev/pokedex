import React from 'react'
import styled from 'styled-components'
import {
    Link,
  } from "react-router-dom"
import config from '../config'

//TODO take media query from config
const InfoCardContainer = styled.div`
    background: #FF0000;
    width: 100%;
    margin: 3%;
    font-size: 2vw;
    @media screen and (max-width: 480px) {
        height: 98%;
        margin-top: 20%;
        font-size 8vw;
    }
`

const StyledLink = styled(Link)`
  color: inherit;
  :hover {
      text-decoration: none;
      color: white;
  }
`

export default function InfoCard({ name, onClick, url }) {
    return (
        <InfoCardContainer onClick={() => onClick(url)}>
            <StyledLink to='/detail'>{name}</StyledLink>
        </InfoCardContainer>
    )
}
