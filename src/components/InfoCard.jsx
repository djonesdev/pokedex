import React from 'react'
import styled from 'styled-components'
import {
    Link,
    useParams
  } from "react-router-dom";

const InfoCardContainer = styled.div`
    background: #FF0000;
    width: 100%;
    margin: 3%;
    font-size: 2vw;
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
