import React from "react"
import styled from "styled-components"
import search from "../images/search-white.svg"
import { PostDiv } from "./PostDiv"
// import { BidSideNav } from "../Components/BidSideNav"
 
const BidPageContainer = styled.section`
    width: 70%;
    min-height: 80vh;
    // background: red;
    position: relative;
    padding: 6%;
`
const SearchSection = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
`
const SearchContainer = styled.form`
    width: 100%;
    background: #FFF;
    box-shadow: 2px 2px 7px 3px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;  
`
const SearchInput = styled.input`
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    padding: 10px 25px;
    border: none;
    width: 95%;
    :focus{
        outline: none;
    }
`
const SearchImageButton = styled.button`
    background: #A14807;
    width: 55px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`
const IconImageContainer = styled.span`
    width: 20px;
    height: 20px;
    display: flex;
`
const IconImage= styled.img`
    width: 100%;
    object-fit: contain;
`
const Text = styled.span`
    font-size: 18px;
    margin: 10px 0;
    color: #A14807;
`
const SortDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
`
const TextEdit = styled(Text)`
    font-weight: 600;
    margin-right: 14px;
`
const SortButton = styled.button`
    padding: 0 10px;
    border: none;
    border: 0.8px solid #000;
    border-radius: 7px;
    background: #FFF; 
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    margin-right: 19px;
`
const PostsContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    box-shadow: 2px 2px 7px 3px rgba(0, 0, 0, 0.06);
    border-radius: 7px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
    ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #dfdfdf;
        border-radius: 10px;
    }
`
export const BidMain: React.FC = () =>{
    return(
        <BidPageContainer>
            <SearchSection>
                <SearchContainer>
                    <SearchInput placeholder="Search Request"/>
                    <SearchImageButton>
                        <IconImageContainer>
                            <IconImage src={search} />
                        </IconImageContainer>
                    </SearchImageButton>
                </SearchContainer>
                <Text>Advanced Search</Text>
                <SortDiv>
                    <TextEdit>Sort</TextEdit>
                    <SortButton>Best Match</SortButton>
                    <SortButton>Most Recent</SortButton>
                </SortDiv>
            </SearchSection>
            <PostsContainer>
                <PostDiv />
                <PostDiv />
                <PostDiv />
            </PostsContainer>
            
        </BidPageContainer>

    )
}