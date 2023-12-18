import styled from 'styled-components';
import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as ErrorMsg,
} from 'formik';

const ErrorMessage = styled(ErrorMsg)`
  color: red;
  font-size: 12px;
`;

const Field = styled(FormikField)`
  border: 2px solid grey;
  border-radius: 4px;
  font-size: 14px;
  min-width: 125px;
  padding: 8px;
  &:hover {
    border: 1px solid blue;
  }
`;

const Form = styled(FormikForm)`
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
`;

const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: 12px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: rgb(76, 234, 81);
  font-size: 14px;
  padding: 10px 16px;
  &:active,
  &:focus,
  &:hover {
    background-color: rgb(54, 167, 57);
  }
`;

const Container = styled.div`
  max-width: 100%;
  margin-bottom: 40px;
`;

export { ErrorMessage, Field, Form, FormGroup, Button, Container };
