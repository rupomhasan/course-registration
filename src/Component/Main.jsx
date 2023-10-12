/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../../public/course.json';
import Card from '../Component/Card';
const Main = ({handleToSelectCourse}) => {

    const [cards , setCards] =useState([])

    useEffect (()=> {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:w-2/3 my-10 order-0'>
             {
                cards.map(card=> <Card handleToSelectCourse={handleToSelectCourse} key={card.id} card={card}></Card>)
             }   
        </div>
    );
};

export default Main;