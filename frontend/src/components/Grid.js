import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
width: 100%;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
max-width: 800px;
margin: 20px auto;
word-break: break-all
`;


export const A = styled.a``;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-allign: start;
    border-bottom: inset;
    padding-bottom: 5px;
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start" )};
    width: ${(props) => (props.width ? props.width : "auto")};
`;



const Grid = ({ ativos, setAtivos, setOnEdit }) => 

{

    const handleEdit = (item) => {
        setOnEdit(item);
    }


    const handleDelete = async (id) => {
        await axios
        .delete("http://localhost:8800/" + id)
        .then(({ data }) => {
            const newArray = ativos.filter((ativo) => ativo.id !== id);

            setAtivos(newArray);
            toast.success(data);
        })
        .catch(({ data }) => toast.error(data));

    setOnEdit(null);
    }


    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Ativo</Th>
                    <Th>Data</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {ativos.map ((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.ativo}</Td>
                        <Td width="30%">{item.data}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)} />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td>
                    </Tr>
                ))}
                <Tr>
                    <Td colSpan="4" alignCenter>
                        <A href="http://localhost:3000/sensores">Ver sensores</A>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    );
};

export default Grid;