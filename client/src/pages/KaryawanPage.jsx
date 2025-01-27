import React, { useEffect, useState } from 'react'
import API from './../api';
const KaryawanPage = () => {
    const [result, setResult] = useState([])
    const getData = async () => {
        try {
            const { data } = await API.get('/auth/all-users')
            setResult(data.data)
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="flex w-full justify-center bg-base-300">
            <div className="w-full">
                <table className="table table-xs flex">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nama Lengkap</th>
                            <th>NIP</th>
                            <th>Job</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Nomor Telepon</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default KaryawanPage