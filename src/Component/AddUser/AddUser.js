import React, { useState } from "react";

import Modal from "../UI/Modal/Modal";
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'
import styles from './AddUser.module.css'
const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername]= useState('');
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const AddUserHandler = (event) =>{
        event.preventDefault()
        // Checking for validation
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input!',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if(+enteredAge <=0){
            setError({
                title: 'Age can not be negative!',
                message: 'Please enter a valid age (non-negative values)'
            })
            return;
        }
        
        props.onAddUser(enteredUsername, enteredAge)

        // Resetting the state value
        setEnteredUsername('')
        setEnteredAge('')
    }
    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = (event) => {
        setError(null)
    }

    return (
        <div>
            {error && <Modal onConfirm={errorHandler} title={error.title} message={error.message} />}
            <Card>
                <form onSubmit={AddUserHandler} className="form-control">
                    {/* We can add multiple classes on html properties by the following */}
                    <div className={`${styles['form-control__inner']}`}>
                        <label htmlFor="username">User Name</label>
                        <input id="username" type="text" onChange={usernameHandler} value={enteredUsername}/>
                    </div>
                    <div className={`${styles['form-control__inner']}`}>
                        <label htmlFor="age">Age</label>
                        <input id="age" type="number" onChange={ageHandler} value={enteredAge}/>
                    </div>
                    {/* <Button className={styles.anyClassName} type="submit">Add new user</Button> */}
                    <Button type="submit">Add new user</Button>
                </form>
            </Card>
            {/* Or */}
            {/* {error ? (<Modal onChange={errorHandler} title={error.title} message={error.message} />) : (
                <Card>
                    <form onSubmit={AddUserHandler} className="form-control">
                        <div className={`${styles['form-control__inner']}`}>
                            <label htmlFor="username">User Name</label>
                            <input id="username" type="text" onChange={usernameHandler} value={enteredUsername}/>
                        </div>
                        <div className={`${styles['form-control__inner']}`}>
                            <label htmlFor="age">Age</label>
                            <input id="age" type="number" onChange={ageHandler} value={enteredAge}/>
                        </div>
                        <Button type="submit">Add new user</Button>
                    </form>
                </Card>
            )} */}
            
        </div>
    );
};

export default AddUser;