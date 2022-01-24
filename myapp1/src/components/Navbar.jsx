import React from 'react';
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";


const Container = styled.div`
    height: 50px;
    background-color: #696969;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex;
`
// const Center = styled.div`
//     flex: 1;
// `
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Product</MenuItem>
                </Left>
                {/* <Center>center</Center> */}
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem><Badge BadgeContent={4} color="primary"><ShoppingCartOutlined /></Badge></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
