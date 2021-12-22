import styled from "styled-components";

export const Content = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    .box-description 
    {
        background-color: #fff;
        width: 100%;
        max-width: 980px;
        height: 150px;
        box-shadow: 0px 0px 30px #00000025;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: center;

        h2 
        {
            font-size: 2rem;
        }

        p 
        {
            margin: auto;
            font-size: 1.2rem; 
            width: 85%;
            margin: 10px;
        }
    }   

    @media (min-width: 260px) and (max-width: 650px)
    {
        .box-description
        {
            width: 90%;
            height: auto;

            p 
            {
                font-size: 1rem;
            }
        }
    }

    @media (min-width: 650px) and (max-width: 1100px)
    {
        .box-description
        {
            width: 750px;
        }
    }
`;