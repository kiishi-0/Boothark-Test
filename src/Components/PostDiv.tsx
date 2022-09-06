import React from "react"
import styled from "styled-components"
import heart from '../images/heart.svg'
import thumb from "../images/thumb_down.svg"
import check from "../images/check.svg"
import locate from "../images/locate.svg"
import stars from "../images/stars.svg"
// import { BidSideNav } from "../Components/BidSideNav"
// import { BidMain } from "../Components/BidMain"
 
const PostDivContainer = styled.main`
    width: 100%;
    // min-height: 100vh;
    position: relative;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 0.5px solid #707070;
    padding: 30px 40px; 

`
const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 27px;
`
const Title = styled.h3`
    font-size: 15px;
    color: #A14807;
`
const IconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const IconImageContainer = styled.span`
    width: 20px;
    height: 20px;
    display: flex;
    margin-left: 10px;
`
const IconImageContainerEdit = styled(IconImageContainer)`
    margin-right: 10px;
`
const IconStarsEdit = styled(IconImageContainer)`
    width: 100px;
    margin-left: 25px;
`
const IconImage= styled.img`
    width: 100%;
    object-fit: contain;
`
const InfoTextDiv = styled.div`
    width: 100%;
    color: #686868;
    font-size: 14px;
    text-align: left;
    margin-bottom: 20px;
`
const InfoTextDivEdit = styled(InfoTextDiv)`
    display: flex;
`
const InfoText1 = styled.p`
    font-weight: 600;
    
`
const InfoText2Div = styled(InfoTextDiv)`
    margin-bottom: 13px;
`
const InfoText2 = styled.p`
    font-weight: 500;
    
`
const FeaturesDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 30px;
`
const Features = styled.span`
    background:  rgba(196, 196, 196, 0.3);
    font-size: 10px;
    padding: 2px 10px;
    border-radius: 10px;
    margin-right: 20px;
`
const Text = styled.p`
    color: #686868;
    font-size: 12px; 
`
const TextEdit = styled(Text)`
    margin: 0 25px;
`
export const PostDiv: React.FC = () =>{
    return(
        <PostDivContainer>
            <TitleDiv>
                <Title>
                    Need a graphic designer who 
                    can handle my social media
                </Title>
                <IconDiv>
                    <IconImageContainer>
                        <IconImage src={thumb} />
                    </IconImageContainer>
                    <IconImageContainer>
                        <IconImage src={heart} />
                    </IconImageContainer>
                </IconDiv>
            </TitleDiv>
            <InfoTextDiv>
                <InfoText1>
                    Hourly: $20.00-$30.00 - intermediate - Est. 
                    Time: Less than 1 month, Less than 30 hrs/week -
                    Posted 1 hour ago
                </InfoText1>
            </InfoTextDiv>
            <InfoText2Div>
                <InfoText2>
                    I have a page called blurry_cosmos I want someone who can manage my account. I need a
                    graphic designer and also creative.
                </InfoText2>
            </InfoText2Div>
            <FeaturesDiv>
                <Features>Instagram</Features>
                <Features>Social Media Imagery</Features>
                <Features>Graphic Design</Features>
                <Features>Adobe Photoshop</Features>
            </FeaturesDiv>
            <InfoTextDiv>
                <Text>Proposal: Less than 5</Text>
            </InfoTextDiv>
            <InfoTextDivEdit>
                    <IconImageContainerEdit>
                        <IconImage src={check} />
                    </IconImageContainerEdit>
                <Text>Payment inverified</Text>
                    <IconStarsEdit>
                        <IconImage src={stars} />
                    </IconStarsEdit>
                    <TextEdit>$0 spent</TextEdit>
                    <IconImageContainerEdit>
                        <IconImage src={locate} />
                    </IconImageContainerEdit>
                <Text>India</Text>
            </InfoTextDivEdit>
        </PostDivContainer>

    )
}