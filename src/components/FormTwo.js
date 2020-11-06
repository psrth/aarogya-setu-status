import React, { Component } from 'react'
import { useForm } from "react-hook-form"

function FormTwo(){
    const {register, handleSubmit} = useForm();

    // TODO: make a post request
    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Multiple Phone Numbers" name="phone_numbers" ref={register}/>
            <input type="submit"/>
        </form>
    );
}

export default FormTwo;