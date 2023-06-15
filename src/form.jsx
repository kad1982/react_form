import * as React from 'react';
import { useState } from 'react';
export default function Form(){
    const [name, setName] = useState('Anna');
    const [age, setAge] = useState(43);
    return(
        <form className='form'>
            <div className='form__wrap'>
            <label htmlFor='name' className='form__label'>Имя</label>
            <input type='text' id='name' value={name} className='form__input' readOnly></input>
            <label htmlFor='age' className='form__label'>Возраст</label>
            <input type='text' id='age' value={age} className='form__input' readOnly></input>
            <p className='form__text'>{name} {age}</p>
            </div>
        </form>
        
    )
}