import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
`;

const Title = styled.h2`
text-align: center;
margin-bottom: 25px;
`;

const Form = styled.form`
width: 320px;

`;

const Label = styled.label`
display: flex;
    flex-direction: column;
    margin-bottom: 25px;
`;

const Input = styled.input`
  border: 2px solid grey;
  border-radius: 4px;
  font-size: 14px;
  min-width: 125px;
  padding: 8px;
  &:hover {
    border: 1px solid blue;
  }
`;

const Button = styled.button`
display: block;
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
margin: 0 auto;
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

export {Form, Label, Button, Wrapper, Title, Input}