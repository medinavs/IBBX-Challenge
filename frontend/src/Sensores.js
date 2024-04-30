import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/FormSens.js";
import Grid from "./components/GridSens.js";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

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

    function Sens() {
    const [sensores, setSensores] = useState([]);
    const [ativos, setAtivos] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getSensores = async () => {
        try {
        const res = await axios.get("http://localhost:8800/sensores");
        setSensores(res.data.sort((a, b) => (a.sensor > b.sensor ? 1 : -1)));
        } catch (error) {
        toast.error(error);
        }
    };

    const getAtivos = async () => {
        try {
        const res = await axios.get("http://localhost:8800");
        setAtivos(res.data.sort((a, b) => (a.ativo > b.ativo ? 1 : -1)));
        } catch (getSensoresErr) {
        toast.error(getSensoresErr);
        }
    };

    useEffect(() => {
        getSensores();
    }, [setSensores]);

    useEffect(() => {
        getAtivos();
    }, [getAtivos]);

    return (
        <>
        <Container>
            <Title>SENSORES</Title>
            <Form
            onEdit={onEdit}
            setOnEdit={setOnEdit}
            getSensores={getSensores}
            ativos={ativos}
            />
            <Grid
                sensores={sensores}
                setSensores={setSensores}
                setOnEdit={setOnEdit}
                />
            </Container>
            <ToastContainer autoClose={3000} position={toast.POSITION} />
            <GlobalStyle />
            </>
        );
    }

    export default Sens;
