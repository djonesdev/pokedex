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

export default function InfoCard({ name, onClick, url }) {
    return (
        <InfoCardContainer onClick={() => onClick(url)}>
            <Link to='/detail'>{name}</Link>
        </InfoCardContainer>
    )
}
