import styled from 'styled-components';

export default function Buttons() {
    return (
        <Container>
            <Button>Importe as informações de uma loja</Button>
            <Button>Veja as informações de uma loja</Button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    margin-top: 100px;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 300px;
`;

const Button = styled.button`
    height: 120px;
    width: 400px;
    border-radius: 40px;
    border: none;
    font-size: 22px;
    font-weight: bold;
    font-family: 'Roboto' sans-serif;
    cursor: pointer;

    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, #fff 50%, #02be3b 50%);
    transition: background-position 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
        background-position: 0 100%;
        color: #fff;
    }
`;
