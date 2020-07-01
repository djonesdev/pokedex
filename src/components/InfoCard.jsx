import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const InfoCardContainer = styled.div`
    background: #FF0000;
    border-radius: 12px;
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
            <StyledLink className="capitalize" to={`/detail/${name}`}>{name}</StyledLink>
        </InfoCardContainer>
    )
}
