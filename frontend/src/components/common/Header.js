import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo_bycoders.svg';

export default function Header() {
    return (
        <Title>
            <Link to="/">
                <img src={Logo} alt="logo bycoders" />
            </Link>
        </Title>
    );
}

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%;
    background-color: #02be3b;
    color: white;

    img {
        height: 50px;
    }
`;
