import React, { useState } from  'react';

const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createNewUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmpassword};
        console.log("Welcome", newUser);
    };

    return(
        <div>
            <form onSubmit={createNewUser}>
                <div>
                    <label>First Name </label> 
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label>Last Name </label> 
                    <input type="text" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Email </label> 
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input type="text" onChange={(e) => setConfirmpassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name {firstname}</p>
                <p>Last Name {lastname}</p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {confirmpassword}</p>
            </div>
        </div>
    );
};

export default UserForm;