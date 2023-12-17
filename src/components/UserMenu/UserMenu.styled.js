import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
`;

const Text = styled.p`
font-size: 16px;
font-weight: 500;
margin-right: 20px;
margin-left: 5px;
`;

const Button = styled.button`
background-color: #f1870e;
border-radius: 8px;
border-style: none;
box-sizing: border-box;
color: #000000;
cursor: pointer;
font-family: inherit;
font-size: 12px;
font-weight: 500;
height: 40px;
line-height: 20px;
margin: 0;
outline: none;
padding: 10px 10px;
position: relative;
text-align: center;
text-decoration: none;
transition: color 100ms;
vertical-align: baseline;
touch-action: manipulation;
&:active,
&:focus,
&:hover {
  background-color: rgb(54, 167, 57);
}
`;

export {Wrapper, Text, Button}