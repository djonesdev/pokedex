import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import styled from 'styled-components'
import Icons from 'styles/icons'

const ErrorImage = styled.img`
    margin 0 auto;
    height: 400px; 
    width: 500px;
`

const ErrorText = styled.h3`
    margin 0 auto;
    height: 400px; 
    width: 500px;
`


export default function ErrorPage() {
    return (
        <Container> 
            <Row>
                <ErrorImage src={Icons.surprisedPikachu} />   
            </Row>
            <ErrorText>Sorry about that, looks like something went wrong :( </ErrorText>
        </Container>
    )
}
