import styled from "@emotion/styled";

export const ButtonList = styled.div`
    display: inline-flex;
    min-width: 100px;
    justify-content: space-evenly;
`

export const Button = styled.button`
    display: inline-block;
    padding: 8px;
    min-width: 65px;
    font-size: 20px;
    border-radius: 4px;

    &:hover {
        background-color: grey;    
    }
`