import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const MainContainer = styled(Container)`
    min-height: 90vh;
    margin-bottom: 13px;
    position: relative;
`;

const NoMessages = styled.div`
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
`;
const MessageSection = styled(Row)`
    overflow: auto;
    height: 400px;
`;
const FormSection = styled(Row)`
`;
export {
    MainContainer,
    NoMessages,
    MessageSection,
    FormSection
};