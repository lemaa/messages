import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { Button } from '../Buttons';

const Errors = styled.p`
    color:red;
    &::before{
        display: inline;
        content: "⚠ ";
    }
`;
const FormContainer = styled(Container)`
    margin-top: 25px;
`;
const SubmitButton = styled(Button)`
padding : 5px 30px; 
`;

export { Errors, FormContainer, SubmitButton };