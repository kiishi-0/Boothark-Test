import React from "react"
import styled from "styled-components"
import { BidSideNav } from "../Components/BidSideNav"
import { BidMain } from "../Components/BidMain"
 
const BidMainContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex; 
    align-items: flex-start;
    justify-content: flex-end;
`

export const BidPage: React.FC = () =>{
    return(
        <BidMainContainer>
            <BidSideNav />
            <BidMain />
        </BidMainContainer>

    )
}