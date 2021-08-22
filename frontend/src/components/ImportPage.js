import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from './common/Header';
import { useHistory } from 'react-router-dom';

export default function ImportPage() {
    const [file, setFile] = useState();
    const [text, setText] = useState();
    const [boolean, setBoolean] = useState(true);
    const history = useHistory();
    let infosByStore = [];

    function onChangeFile(file) {
        setFile(file);
        setBoolean(false);
    }

    async function handleFile(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.readAsText(file);
        reader.addEventListener('load', (e) => setText(e.target.result));
    }

    infosByStore = text?.split('\n');
    if (infosByStore !== undefined) {
        infosByStore.forEach((info, index) => {
            const body = {
                ownerName: info.substring(48, 62),
                storeName: info.substring(62, 81),
                typeId: +info.substring(0, 1),
                value: +info.substring(9, 19) / 100,
                cpf: info.substring(19, 30),
                creditCard: info.substring(30, 42),
                date: info.substring(1, 9),
                hour: info.substring(42, 48),
            };
            const promise = axios.post(
                `${process.env.REACT_APP_API_BASE_URL}/store-info`,
                body
            );
            if (index === infosByStore.length - 2) {
                promise.then(() => {
                    history.push('/');
                });
                promise.catch(() => {
                    alert('ERRO!');
                });
            }
        });
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
                        accept=".txt"
                        name="file"
                        type="file"
                        onChange={(e) => {
                            onChangeFile(e.target.files[0]);
                        }}
                    />
                </div>
                <div>
                    <button onClick={handleFile} disabled={boolean}>
                        Enviar
                    </button>
                </div>
            </form>
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

    input {
        margin-top: 20px;
        word-break: break-all;
    }

    button {
        margin-top: 20px;
        width: 120px;
        height: 40px;
        border-radius: 20px;
    }
`;
