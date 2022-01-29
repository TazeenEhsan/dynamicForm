import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowData = () => {

    // const [allTableData, setAllTableData] = useState([]);
    const { formFieldName } = useParams();

    const tableData = JSON.parse(localStorage.getItem(`${formFieldName}table`));

    let allTableData = []

    for (const key in tableData) {

        console.log(`${key}: ${tableData[key]}`);

        const newData = {
            key: key,
            value: tableData[key]
        }

        allTableData.push(newData);


        console.log('arr', allTableData);

    }

    let i = 1;
    return (
        <div>


            <div>


                <div className="container" style={{ border: '4px solid green', backgroundColor: 'white', padding: '30px' }}>
                    <h1 style={{ color: 'black', margin: '30px' }}>Forms Data of {formFieldName}</h1>

                    <div className="orders-con container table-responsive" style={{ paddingBottom: '30px' }}>

                        <table className="table table-hover table-sm w-100" >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    {
                                        allTableData.map(singleData => <th scope="col">{singleData.key}</th>)

                                    }
                                    {/* <th scope="col">Name</th>
                                    <th scope="col">Action</th> */}


                                </tr>
                            </thead>

                            <tbody >
                                <tr>
                                    <th scope="row">{i++}</th>

                                    {
                                        allTableData.map(key => <td>{key.value}</td>)
                                    }





                                </tr>

                            </tbody>


                        </table>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default ShowData;