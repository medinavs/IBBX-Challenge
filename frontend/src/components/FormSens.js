    import React, { useEffect, useRef, useState } from "react";
    import styled from "styled-components";
    import axios from "axios";
    import { toast } from "react-toastify";

    const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    `;

    const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    `;

    const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    `;

    const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
    `;

    const Label = styled.label``;

    const Form = ({ onEdit, setOnEdit, getSensores, ativos }) => {
    const ref = useRef();
    const [ativoId, setAtivoId] = useState("");

    useEffect(() => {
        if (onEdit) {
        const sensor = ref.current;

        sensor.tipo.value = onEdit.tipo;
        sensor.valor.value = onEdit.valor;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const sensor = ref.current;

        if (!sensor.tipo.value || !sensor.valor.value) {
        return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
        await axios
            .put("http://localhost:8800/sensores" + onEdit.id, {
            ativo_id: ativoId,
            tipo: sensor.tipo.value,
            valor: sensor.valor.value,
            
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {

            await axios
            .post("http://localhost:8800/sensores", {
            ativo_id: ativoId,
            tipo: sensor.tipo.value,
            valor: sensor.valor.value,
            
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
    }

        sensor.tipo.value = "";
        sensor.valor.value = "";

        setOnEdit(null);
        getSensores();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
            <Label>Tipo</Label>
            <Input name="tipo" />
        </InputArea>
        <InputArea>
            <Label>Valor</Label>
            <Input name="valor" />
        </InputArea>
        <select onChange={(e) => setAtivoId(e.target.value)}>
            <option />
            {ativos.map((ativo, index) => (
            <option
                key={`${ativo.ativo}-${index}`}
                value={ativo.id}
            >
                {ativo.ativo}
            </option>
            ))}
        </select>

        <Button type="submit">Salvar</Button>
        </FormContainer>
    );
    };

    export default Form;
