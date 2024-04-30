import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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

    const Form = ({ onEdit, setOnEdit, getAtivos }) => {
        const ref = useRef();
        
        useEffect(() => {
            if(onEdit) {
                const ativo = ref.current;

                ativo.ativo.value = onEdit.ativo;
                ativo.data.value = onEdit.data;
                
            }
        }, [onEdit]);

        const handleSubmit = async (e) => {
            e.preventDefault();

            const ativo = ref.current;

            if(
                !ativo.ativo.value ||
                !ativo.data.value 
            ) {
                return toast.warn("Preencha todos os campos!");
            }

            if (onEdit) {
                await axios 
                .put("http://localhost:8800" + onEdit.id, {
                    ativo: ativo.ativo.value,
                    data: ativo.data.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
            } else{
                await axios
                .post("http://localhost:8800", {
                    ativo: ativo.ativo.value,
                    data: ativo.data.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
            }

            ativo.ativo.value = "";
            ativo.data.value = "";

            setOnEdit(null);
            getAtivos();
        };
        
        return(
            <FormContainer ref={ref} onSubmit={handleSubmit}>
                <InputArea>
                    <Label>Ativo</Label>
                    <Input name="ativo" />
                </InputArea>
                <InputArea>
                    <Label>Data</Label>
                    <Input name="data" type="date" />
                </InputArea>
                <Button type="submit">Salvar</Button>
            </FormContainer>
        )
    }

    export default Form;