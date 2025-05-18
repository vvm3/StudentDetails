import React from "react"
import { useLocation } from "react-router-dom";

const StudentDetails = () => {
    const loc = useLocation();
    const onestudent = loc.state;

    if (!onestudent) {
        return <h2>Data not found</h2>;
    }

    return (
        <>
            <h1>Studnet Details</h1>
            <div>
                <h2>{onestudent.name}</h2>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Sr No</td>
                        <td>{onestudent.srno}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default StudentDetails;