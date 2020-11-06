import React, { Component } from 'react'

const data = [
    {
        mobile_number:"9910231328",
        status:"Is COVID negative",
        color:"#008000"
    },
    {
        mobile_number:"19212918219",
        status:"Is COVID postive",
        color:"#FF0000"
    },
    {
        mobile_number:"2183922",
        status:"Is COVID negative",
        color:"#008000"
    }
]

function DataTable() {
    return(
        <table class="table-auto">
            <tr>
                <th>Mobile Number</th>
                <th>COVID Status</th>
                <th style={{color: '#fff'}}>ch,</th>
            </tr>
            {data.map((i) => (
                <tr>
                    <td>{ i.mobile_number }</td>
                    <td>{ i.status }</td>
                    <td style={{background: i.color, borderRadius:'30px', color: i.color}}>.</td>
                </tr>
            ))}
        </table>
    )
}

export default DataTable