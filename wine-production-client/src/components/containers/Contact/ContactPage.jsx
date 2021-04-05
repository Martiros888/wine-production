import React, { useState, useEffect, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ContactPage.scss';


function ContactPage() {

    return (
        <>
            <section className='ContactPage'>
                Hello you are in Contact
            </section>
        </>
    )
}


export default ContactPage = memo(ContactPage);
        