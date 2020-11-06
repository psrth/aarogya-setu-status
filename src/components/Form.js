import React, { Component } from 'react'
import { useForm } from "react-hook-form"

function Form(){
    const {register, handleSubmit} = useForm();

    // TODO: make a post request
    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Single Phone Numbers" name="phone_number" ref={register}/>
            <input type="submit"/>
        </form>
    );
}

export default Form;