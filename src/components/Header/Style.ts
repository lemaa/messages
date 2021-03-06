import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const HeaderStyle = styled(Container)`
    background: #212529;
`;

const HeaderTitle = styled(Row)`
    letter-spacing: 3.6px;
    word-spacing: 0.6px;
    color: #e3e3e3;
    padding: 5px;
`;
export { HeaderStyle, HeaderTitle };