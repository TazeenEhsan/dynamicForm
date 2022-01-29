import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Test1 = () => {


    const history = useHistory();

    // let ap = [{ type: 'text', placeholder: 'Text' }, { type: 'email', placeholder: 'Email' }, { type: 'number', placeholder: 'Phone' }];

    const [formItem, setFormItem] = useState([{ type: 'text', name: 'formName', placeholder: 'Form Name' }]);

    const [formField, setFormField] = useState([])



    const handleText = (type, name, placeholder) => {

        const up = {
            type: type,
            name: name,
            placeholder: placeholder
        }
        const newFormItem = [...formItem, up]
        setFormItem(newFormItem);

        console.log(formItem);
    }



    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        console.log(e.target.type);

        const type = e.target.name;
        const value = e.target.value;
        // const type = e.target.type;
        // const up = { [name]: value,type:type }
        const update = { placeholder: value, type: type }
        const newValue = [...formField, update]
        setFormField(newValue);

    }



    function handleSubmit(event) {
        event.preventDefault();

        console.log(formField);

        localStorage.setItem(formField[0]?.placeholder, JSON.stringify(formField));

        // const isLogin = JSON.parse(localStorage.getItem(formField[0]?.placeholder));
        // console.log('from local', isLogin);
        history.push('/test2')





    }



    return (
        <div>

            <button onClick={() => handleText('text', 'Name', 'Text')} style={{ border: '2px solid black', width: '120px', marginBottom: '10px', borderRadius: '4px', backgroundColor: 'green' }}> Text</button><br />
            <button onClick={() => handleText('number', 'Amount', 'Number')} style={{ border: '2px solid black', width: '120px', marginBottom: '10px', borderRadius: '4px', backgroundColor: 'green' }}> Number</button><br />
            <button onClick={() => handleText('date', 'MadeAt', 'Date')} style={{ border: '2px solid black', width: '120px', marginBottom: '10px', borderRadius: '4px', backgroundColor: 'green' }}> Date</button><br />
            <button onClick={() => handleText('textarea', 'About', 'Text Area')} style={{ border: '2px solid black', width: '120px', marginBottom: '10px', borderRadius: '4px', backgroundColor: 'green' }}> Text Area</button><br />




            <p>Dynamic Form</p>

            <div className='container' style={{ border: '3px solid white', padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    {

                        formItem.map(n =>
                            <>

                                <input onBlur={handleChange} type='text' name={n.type} placeholder={n.placeholder} required style={{ border: '2px solid black', width: '270px', marginBottom: '10px', borderRadius: '4px' }} /> <br />
                            </>



                        )

                    }
                    <button type="submit" style={{ backgroundColor: 'yellow' }}>Generate</button>
                </form>
            </div>



        </div>
    );
};


// localStorage.setItem('user', JSON.stringify(data.user))

// // const isLogin = JSON.parse(localStorage.getItem('isLogin'));
// const isLogin = localStorage.getItem('isLogin');



// const Login = JSON.stringify("login")

// const token = JSON.parse(localStorage.getItem('token'));


export default Test1;
