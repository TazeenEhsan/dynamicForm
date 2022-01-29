import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const InputForm = () => {

    const [loginData, setLoginData] = useState([]);

    const history = useHistory();

    const { formName } = useParams();

    const formInfo = JSON.parse(localStorage.getItem(formName));
    formInfo?.shift();
    console.log(formInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        console.log(loginData);

        localStorage.setItem(`${formName}table`, JSON.stringify(loginData));

        history.push(`/showdata/${formName}`)
        e.preventDefault();
    }


    console.log(loginData);
    return (
        <div>
            <h1>{formName}</h1>
            <div className='container' style={{ border: '3px solid white', padding: '20px' }}>
                <form onSubmit={handleLoginSubmit}>
                    {
                        formInfo?.map(singleInfo => <>
                            {
                                singleInfo.type === 'textarea' ? <> <small>{singleInfo.placeholder}</small> <br /> <textarea onBlur={handleOnBlur} style={{ border: '2px solid black', width: '370px', marginBottom: '10px', borderRadius: '4px' }}></textarea> <br /> </> : <>
                                    <small>{singleInfo.placeholder}</small> <br />

                                    <input onBlur={handleOnBlur} type={singleInfo.type} name={singleInfo.placeholder} placeholder={singleInfo.placeholder} required style={{ border: '2px solid black', width: '370px', marginBottom: '10px', borderRadius: '4px' }} /><br /></>



                            }
                        </>)
                    }
                    <button type="submit">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default InputForm;