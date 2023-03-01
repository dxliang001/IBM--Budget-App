
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);
    
    const handleDeleteItem = () => {

        dispatch({
            type: 'DELETE_ITEM',
            payload: props.id
        });
    };

    const IncreaseBy10 = (name) => {
        const expense = {
            name: name,
            cost : 10,
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
        <td>{Currency}{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={event => IncreaseBy10(props.name)}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={event => DecresesBy10(props.name)}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.1em' color="gray" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};
export default ExpenseItem;