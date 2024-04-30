import GlobalStyle from './styles/global';
import styled from 'styled-components';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form.js"
import Grid from "./components/Grid.js"
import {useState} from "react"; 
import axios from 'axios';
import { useEffect } from 'react';



    const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    `;

    const Title = styled.h2``;



    function Active() {

    const [ativos, setAtivos] = useState([]);
    const [onEdit, setOnEdit] = useState (null);

    const getAtivos = async () => {
        try {
        const res = await axios.get("http://localhost:8800");
        setAtivos(res.data.sort((a, b) => (a.ativo > b.ativo ? 1 : -1)));
        } catch (error) {
        toast.error(error);
        }
    };

    useEffect(() => {
        getAtivos();
    }, [setAtivos]);



    return (
        <>
        <Container>
            <Title>ATIVOS</Title>
            <Form onEdit={onEdit} setOnEdit={setOnEdit} getAtivos={getAtivos} />
            <Grid ativos={ativos} setAtivos={setAtivos} setOnEdit={setOnEdit} />
        </Container>
        <ToastContainer autoClose={3000} position={toast.POSITION} />
        <GlobalStyle />
        </>
    );
    }

    export default Active;
