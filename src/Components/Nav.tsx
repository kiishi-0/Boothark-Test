import React from "react";
import styled from "styled-components";
import search from "../images/search.svg"
import bell from "../images/bell.svg"
import comment from "../images/comment.svg"
import squares from "../images/squares.svg"
import profile from "../images/profile.svg"
import ark from "../images/ark.svg"
import asset from "../images/asset.svg"
import account from "../images/account.svg"

const NavBar = styled.nav`
    width: 100%;
    height: 115px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1D1B1B;
    position: relative;
    z-index: 200;
    padding: 0 60px;
`
const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    li{
        color: #FBFBFB;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        // margin-right: 10px;
    }
`
const NavItemsOne = styled(NavItems)`
    justify-content: space-around;
`
const NavItemsTwo = styled(NavItems)`
    justify-content: flex-end;
`
const SearchForm = styled.form`
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    margin-right: 20px;
    border-radius: 10px;
    overflow: hidden;
`
const SearchInput = styled.input`
    width: 90%;
    padding: 10px 5px 10px 30px;
    font-family: "Poppins", sans-serif;
    border: none;
    :focus{
        outline: none;
    }
`
const IconImageContainer = styled.div`
    width: 37px;
    height: 37px;
    display: flex;
    margin-right: 25px;
`
const IconImage= styled.img`
    width: 100%;
    object-fit: contain;
`
const ItemsOneIcon = styled(IconImageContainer)`
    width: 27px;
    height: 27px;
`
const SearchIcon = styled(IconImageContainer)`
    width: 21px;
    height: 21px;
`
export const Nav: React.FC = () =>{

    return(
        <NavBar>
            <NavItemsOne>
                <li>
                    <ItemsOneIcon>
                        <IconImage src={ark} />
                    </ItemsOneIcon>
                    Ark
                </li>
                <li>
                    <ItemsOneIcon>
                        <IconImage src={asset} />
                    </ItemsOneIcon>
                    Asset
                </li>
                <li>
                    <ItemsOneIcon>
                        <IconImage src={account} />
                    </ItemsOneIcon>
                    Account
                </li>
            </NavItemsOne>
            <NavItemsTwo>
                <SearchForm>
                    <SearchInput placeholder="Search" type="text" />
                    <SearchIcon>
                        <IconImage src={search} />
                    </SearchIcon>
                </SearchForm>
                <IconImageContainer>
                    <IconImage src={bell}/>
                </IconImageContainer>
                <IconImageContainer>
                    <IconImage src={comment}/>
                </IconImageContainer>
                <IconImageContainer>
                    <IconImage src={squares}/>
                </IconImageContainer>
                <IconImageContainer>
                    <IconImage src={profile}/>
                </IconImageContainer>
            </NavItemsTwo>
        </NavBar>
    )
} 