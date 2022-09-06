import React from "react"
import styled from "styled-components"
// import { BidSideNav } from "../Components/BidSideNav"
// import { BidMain } from "../Components/BidMain"
 
const SwitchContainer = styled.main`
    width: 231px;
    position: relative;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    padding: 5px;
    margin-bottom: 50px;
    border-radius: 7px;
    .active{
        color: #FFF;
        background: #A14807;
    }
`
const SwitchButton = styled.button`
    padding: 10px 0;
    width: 112px;
    color: #000;
    background: #FFF;
    border-radius: 7px;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 17px;
    font-weight: 600;
`

export const Switch: React.FC = () =>{
    return(
        <SwitchContainer>
            <SwitchButton>Patronise</SwitchButton>
            <SwitchButton className="active">Bid</SwitchButton>
        </SwitchContainer>

    )
}