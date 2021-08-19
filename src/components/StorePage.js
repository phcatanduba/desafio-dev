import { useState } from 'react';
import styled from 'styled-components';

import Header from './common/Header';

export default function StorePage() {
    return (
        <Container>
            <Header />
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #000;
    color: white;
    form {
        min-width: 320px;
        height: 320px;
        background-color: gray;
        border-radius: 20%;
        margin: 50px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
            width: 170px;
            word-break: break-all;
        }
    }
`;
