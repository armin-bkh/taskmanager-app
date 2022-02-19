import styled from "styled-components";

export const Head = styled.header`
    grid-column: 1 / span 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 5px 0 5px #dbdbdb;

    & .me{
        display: flex;
        align-items: center;

        & img{
            border-radius: 50%;
            height: auto;
            width: 50px;
            margin-right: 7px;
        }
        
        @media screen and (max-width: 767px){
            & img {
                width: 30px;
            }
            font-size: 13px;
        }
    }

    & .logo{

    }
`;