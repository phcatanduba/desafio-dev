import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from './common/Header';

export default function ImportPage() {
    const [file, setFile] = useState();
    const [text, setText] = useState();
    let infosByStore = [];

    function onChangeFile(file) {
        setFile(file);
    }

    async function handleFile(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.readAsText(file);
        reader.addEventListener('load', (e) => setText(e.target.result));
    }

    infosByStore = text?.split('\n');
    if (infosByStore !== undefined) {
        axios.post('http://localhost:4000/file', infosByStore);
    }

    return (
        <Container>
            <Header />
            <form>
                <div>
                    <label id="file">
                        Carregue um arquivo com as informações da loja
                    </label>
                    <input
                        name="file"
                        type="file"
                        onChange={(e) => {
                            onChangeFile(e.target.files[0]);
                        }}
                    />
                </div>
                <div>
                    <button onClick={handleFile}>Enviar</button>
                </div>
            </form>
            <div accept></div>
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #000;
    color: white;
    form {
        width: 320px;
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
