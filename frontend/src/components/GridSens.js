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



const Grid = ({ sensores, setSensores, setOnEdit }) => 

{




    const handleDelete = async (id) => {
        await axios
        .delete("http://localhost:8800/sensores",{
            data: {
                id: id,
            },
        })
        .then(({ data }) => {
            const newArray = sensores.filter((sensor) => sensor.id !== id);

            setSensores(newArray);
            toast.success(data);
        })
        .catch(({ data }) => toast.error(data));

    setOnEdit(null);
    }


    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Sensor</Th>
                    <Th>Valor</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {sensores.map ((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.tipo}</Td>
                        <Td width="10%">{item.valor}</Td>
                        <Td alignCenter width="40%">
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;