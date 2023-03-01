
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);
    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };
        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const IncreaseBy10 = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };
    const DecresesBy10 = (name) =>{
        const expense ={
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td>
        <td><FaTimesCircle size='2.2em' color="green" onClick={IncreaseBy10}></FaTimesCircle></td>
        <td><FaTimesCircle size='2.2em' color="red" onClick={DecresesBy10}></FaTimesCircle></td>
        <td><FaTimesCircle size='1.1em' color="gray" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};
export default ExpenseItem;