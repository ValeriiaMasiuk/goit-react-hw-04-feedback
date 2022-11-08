import styled from "@emotion/styled";

export const List = styled.ul`
    margin-top: 0;
    padding-left: 0;
`

export const ListItem = styled.li`
    list-style: none;
    font-size: 36px;
    padding-left: 0;

    &:nth-of-type(1) {
        color: green;
    }

    &:nth-of-type(2) {
        color: rgb(175, 164, 59);
    }

    &:nth-of-type(3) {
        color: red;
    }

    &:nth-of-type(4) {
        color: blue;
    }    
    
    &:nth-of-type(5) {
        color: rgb(26, 206, 26);
    }

`