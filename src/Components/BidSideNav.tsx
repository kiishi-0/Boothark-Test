import React from "react"
import styled from "styled-components"
import tick from "../images/tick.svg"
import globe from "../images/globe.svg"
import time from "../images/time.svg"
import brief from "../images/case.svg"
import creates from "../images/create.svg"
import plus from "../images/plus.svg"
 
const BidSideNavContainer = styled.div`
    width: 440px;
    background: #000;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 0;
    left: 0;
    padding: 69px 5% 120px;
    // padding-bottom: 120px;
`
const CategoryInfoDiv = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    font-size: 17px;
    color: #FFF;
    width: 100%;
    margin-bottom: 54px;
    // background: brown;
`
const SectionTitle = styled.h3`
    font-weight: 700;
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const SectionText = styled.p`
    // background: yellow;
    width: 100%;
    
`
const SectionTextEdit = styled(SectionText)`
    align-items: center;
    justify-content: flex-start;
    display: flex;
`
const IconImageContainer = styled.span`
    width: 20px;
    height: 20px;
    display: flex;
    // margin-right: 25px;
`
const IconImageContainerEdit = styled(IconImageContainer)`
    margin-right: 10px;
`
const IconImageContainerEditEdit = styled(IconImageContainer)`
    margin-left: 10px;
`
const IconImage= styled.img`
    width: 100%;
    object-fit: contain;
`
const BarsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`
const Bar = styled.div`
    width: 55px;
    height: 4px;
    background: #A14807;
    margin: 0 3px;
`
export const BidSideNav: React.FC = () =>{
    return(
        <BidSideNavContainer>
            <CategoryInfoDiv>
                <SectionTitle>My Categories</SectionTitle>
                <SectionText>
                    Other-Admin Support
                    Personal/Virtual Assistant
                    Web Research
                    Pro 
                    <IconImageContainer>
                        <IconImage src={tick} />
                    </IconImageContainer>
                </SectionText>
            </CategoryInfoDiv>
            <CategoryInfoDiv>
                <SectionTitle>Visibility<IconImageContainerEditEdit>
                        <IconImage src={tick} />
                    </IconImageContainerEditEdit>
                </SectionTitle>
                <SectionTextEdit>
                    <IconImageContainerEdit>
                        <IconImage src={globe} />
                    </IconImageContainerEdit>
                    Public
                </SectionTextEdit>
            </CategoryInfoDiv>
            <CategoryInfoDiv>
                <SectionTitle>Availability<IconImageContainerEditEdit>
                        <IconImage src={tick} />
                    </IconImageContainerEditEdit>
                </SectionTitle>
                <SectionTextEdit>
                    <IconImageContainerEdit>
                        <IconImage src={time} />
                    </IconImageContainerEdit>
                    More than 30hr/week
                </SectionTextEdit>
            </CategoryInfoDiv>
            <CategoryInfoDiv>
                <SectionTitle>Booth Completion<IconImageContainerEditEdit>
                        <IconImage src={tick} />
                    </IconImageContainerEditEdit>
                </SectionTitle>
                <BarsDiv>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                    <span>100%</span>
                </BarsDiv>
                <SectionTextEdit>
                    <IconImageContainerEdit>
                        <IconImage src={plus} />
                    </IconImageContainerEdit>
                    More than 30hr/week
                </SectionTextEdit>
            </CategoryInfoDiv>
            <CategoryInfoDiv>
                <SectionTitle>Inventory</SectionTitle>
                <SectionTextEdit>
                    <IconImageContainerEdit>
                        <IconImage src={brief} />
                    </IconImageContainerEdit>
                    My Inventory
                </SectionTextEdit>
            </CategoryInfoDiv>
            <CategoryInfoDiv>
                <SectionTitle>Bids</SectionTitle>
                <SectionTextEdit>
                    <IconImageContainerEdit>
                        <IconImage src={creates} />
                    </IconImageContainerEdit>
                    50 available connects
                </SectionTextEdit>
            </CategoryInfoDiv>
            
        </BidSideNavContainer>
    )
}