import styled from "styled-components";

export const Content = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    .box-about 
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
            font-size: 1.5rem; 
            width: 85%;
        }
    }
`;