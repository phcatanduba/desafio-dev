import styled from 'styled-components';

import Header from './common/Header';
import Buttons from './Buttons';

export default function Home() {
    return (
        <Container>
            <Header />
            <Buttons />
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #000;
`;
