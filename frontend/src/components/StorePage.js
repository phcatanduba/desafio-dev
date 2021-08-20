import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from './common/Header';

export default function StorePage() {
    const [wasClicked, setWasClicked] = useState([]);
    const [stores, setStores] = useState([]);
    useEffect(() => {
        setStores([
            {
                name: 'Padaria dos Catandubas',
                transactions: [
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                ],
            },
            {
                name: 'Padaria dos Catandubas',
                transactions: [
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                    { type: 'teste', value: '123456', data: '18/07/2000' },
                ],
            },
        ]);
    }, []);

    function handleClick(index) {
        const newWasClicked = [...wasClicked];
        if (newWasClicked[index]) {
            newWasClicked[index] = false;
            setWasClicked(newWasClicked);
        } else {
            newWasClicked[index] = true;
            setWasClicked(newWasClicked);
        }
    }

    return (
        <Container teste={'teste'}>
            <Header />
            <div className="stores">
                <p>Seleciona um loja: </p>
                <ul>
                    {stores.map((store, index) => {
                        return (
                            <li key={index}>
                                <button onClick={() => handleClick(index)}>
                                    {store.name}
                                </button>
                                <div
                                    className="infos"
                                    hidden={!wasClicked[index]}
                                >
                                    <div className="title">
                                        <span>Tipo</span>
                                        <span>Valor</span>
                                        <span>Data</span>
                                    </div>
                                    {store.transactions.map(
                                        (transaction, i) => {
                                            return (
                                                <div className="datas" key={i}>
                                                    <div className="data">
                                                        {transaction.type}
                                                    </div>
                                                    <div className="line"></div>
                                                    <div className="data">
                                                        {transaction.value}
                                                    </div>
                                                    <div className="line"></div>
                                                    <div className="data">
                                                        {transaction.data}
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    color: white;

    .datas {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }

    .data {
        font-size: 20px;
        margin-bottom: 7px;
        color: ${(props) => (props.teste ? 'red' : 'green')};
    }

    .title {
        display: flex;
        margin: 10px;
        justify-content: center;
        color: #000;
        span {
            width: calc((100% / 3));
        }
    }

    .line {
        height: 100% inherit;
        width: 1px;
        background-color: #000;
    }

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

    .stores {
        display: flex;
        flex-direction: column;
        margin-top: 120px;
        align-items: center;
        font-size: 30px;
        font-weight: bold;
    }

    .infos {
        width: 320px;
        height: 320px;
        background-color: white;
        border-radius: 20px;
    }

    ul {
        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        button {
            border: none;
            margin: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #000;
            width: 320px;
            height: 50px;
            border-radius: 20px;
            font-size: 22px;
            font-weight: bold;
            font-family: 'Roboto' sans-serif;
            cursor: pointer;
            background-size: 100% 200%;
            background-image: linear-gradient(to bottom, #fff 50%, #02be3b 50%);
            overflow: hidden;
            transition: background-position 0.2s ease-in-out,
                color 0.2s ease-in-out;

            &:hover {
                background-position: 0 100%;
                color: #fff;
            }
        }
    }
`;
