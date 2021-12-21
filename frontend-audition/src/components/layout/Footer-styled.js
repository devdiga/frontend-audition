import Styled from 'styled-components';

export const Content = Styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 10px;

    .box-footer
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 850px;
        flex-wrap: wrap;
        margin: auto;
        
        .box-info
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 15px;
            color: #000;

            h2 
            {
                font-size: 1rem;
                font-weight: bold;
            }

            ul
            {
                display: flex;
                flex-direction: column;

                li 
                {
                    list-style: none;
                    display: flex;
                    align-items: center;

                    img 
                    {
                        width: 20px;
                        height: 20px;
                    }

                    a
                    {
                        text-decoration: none;
                        color: #7e7d7d;
                        font-size: .8rem;
                        font-weight: bold;
                        line-height: 20px;

                        &:hover 
                        {
                            color: #000;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 260px) and (max-width: 650px)
    {
        .box-footer 
        {
            .box-info 
            {
                margin: 20px;
            }
        }
    }
`;