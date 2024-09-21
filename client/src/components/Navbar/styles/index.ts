import styled from "styled-components"

export const NavContainer = styled.nav`
    position: fixed; 
    bottom: 14px; 
    left: 50%; 
    transform: translateX(-50%); 
    background-color: rgba(0, 0, 0, 0.30); 
    backdrop-filter: blur(8px); 
    border-radius: 26px; 
    box-shadow: inset 0px 1px 4px rgba(180, 180, 180, 0.7);
    padding: 10px; 
    width: 100%; 
    max-width: 90%; 
    color: #FAFAFA; 
    z-index: 1000;
    display: flex;
    justify-content: center;


    ul {
        list-style: none; 
        display: flex; 
        justify-content: space-around; 
        width: 100%;
        padding: 0;
        margin: 0;
    }
    
    li {
        flex-grow: 1; 
        text-align: center; 
    }

    a {
        display: block; 
        padding: 10px 5px;
        color: #FAFAFA;
        text-decoration: none; 
        font-size: 18px; 
        transition: background 0.3s;
        white-space: nowrap; 
        
    }

    @media(min-width: 768px) {
        max-width: 600px;
        padding: 6px 22px;
        
        a {
            font-size: 18px;
            padding: 10px 10px; /* Espaciado más cómodo */
        }

        li {
            margin: 0 10px; 
        }
    }
`;


