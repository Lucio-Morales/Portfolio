import styled from "styled-components"

export const NavContainer = styled.nav`
    position: fixed; 
    bottom: 20px; 
    left: 50%; 
    transform: translateX(-50%); 
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.06); 
    backdrop-filter: blur(30px); 
    border-radius: 20px; 
    box-shadow: inset 0 1px 5px rgba(255, 255, 255, 0.1);
    padding: 10px; 
    max-width: 600px; 
    width: calc(100% - 40px); 
    color: #FAFAFA; 
    z-index: 1000; 

    a {
        padding: 10px;
        margin: 0 5px; 
        color: #FAFAFA;
        text-decoration: none; 
        transition: background 0.3s;

        &:hover {
            background: rgba(255, 255, 255, 0.2); /* Efecto hover */
        }
    }
`;

