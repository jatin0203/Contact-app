import React from 'react';
import user from '../Images/user.png';
const ContactCard=(props)=>{
    const {id,name,email}=props.contact;
    return(
        <div className='item'>
                <img src={user} className='ui avatar image' alter="user"/>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline item" style={{color:"red", marginTop:"7px"}}></i>
        </div>
    );
};

export default ContactCard;