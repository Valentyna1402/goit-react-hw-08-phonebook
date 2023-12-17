import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;

const Title = styled.h1`
margin-bottom: 30px;

`;

const Text = styled.p`
max-width: 300px;
font-size: 20px;
`;

const Button = styled.button`
background-color: #f1870e;
border-radius: 8px;
border-style: none;
box-sizing: border-box;
color: #000000;
cursor: pointer;
font-family: inherit;
font-size: 16px;
font-weight: 500;
height: 50px;
line-height: 20px;
margin: 0;
outline: none;
padding: 15px 15px;
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

const Image = styled.img`
min-width: 360px;
max-width: 700px;
`;

const Container = styled.div`
display: flex;
justify-content: space-between;
`;

export {Wrapper, Text, Title, Button, Image, Container}