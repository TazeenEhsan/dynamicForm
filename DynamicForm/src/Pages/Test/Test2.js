import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Test2 = () => {


    const history = useHistory();

    const formName = [];

    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);
        let value = localStorage[key];
        // let newU = [...formName, key];
        // setFormName(newU)
        if (!key.includes('table')) {
            formName.push(key)
        }

        console.log(`localStorage ${key}:  ${value}`);
    }

    const handleClick = (p) => {
        console.log(p);

        history.push(`/inputform/${p}`)
    }

    console.log(formName);

    const handleStatus = (p) => {
        history.push(`/inputform/${p}`)
    }

    const handleAction = (p) => {
        history.push(`/showdata/${p}`)
    }
    let i = 1;
    return (
        <div>


            <div className="container" style={{ border: '4px solid green', backgroundColor: 'white' }}>
                <h1>All Forms</h1>

                <div className="orders-con container table-responsive">

                    <table className="table table-hover table-sm w-100" >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>


                            </tr>
                        </thead>
                        {
                            formName.map(key => <tbody key={key}>
                                <tr>
                                    <th scope="row">{i++}</th>
                                    <td><button style={{ color: 'black', padding: '2px' }} onClick={() => handleStatus(key)}>{key}</button></td>


                                    <td><button style={{ backgroundColor: 'yellow', color: 'black', padding: '10px', borderRadius: '5px' }} onClick={() => handleAction(key)}>Report</button></td>


                                </tr>

                            </tbody>)

                        }
                    </table>

                </div>
            </div>


        </div>
    );
};

export default Test2;