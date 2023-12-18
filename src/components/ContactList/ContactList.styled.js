import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  gap: 16px;
`;

const Item = styled.li`
  border: 1px solid grey;
  border-radius: 8px;
  background-color: rgba(255, 227, 227, 0.4);
`;

const Wrapper = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 12px;
`;

const AccentText = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-style: oblique;
`;

const Button = styled.button`
  background-color: rgb(231, 53, 53);
  font-size: 14px;
  padding: 10px 16px;
  &:active,
  &:focus,
  &:hover {
    background-color: rgb(184, 42, 42);
  }
`;

export { List, Item, Wrapper, AccentText, Text, Button };
