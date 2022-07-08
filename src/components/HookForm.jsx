import React, { useState } from  'react';
import DisplayForm from './DisplayForm';

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
                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label>Last Name </label> 
                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Email </label> 
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <DisplayForm firstname={firstname} lastname={lastname} email={email} password={password} confirmpassword={confirmpassword}/>
        </div>
    );
};

export default UserForm;