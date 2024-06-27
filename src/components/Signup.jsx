import React from 'react'

export default function Signup(props) {
    const [name, setName] = React.useState({ fname: '', lname: '' });
    const [cred, setCred] = React.useState({ email: '', password: '', cpassword: '' })

    const handleChange = (e)=>{
        const {id, value} = e.target;
        if(id === 'fname'){
            setName({...name, fname: value});
        }
        else if(id === 'lname'){
            setName({...name, lname: value});
        }
        else if(id === 'email'){
            setCred({...cred, email: value});
        }
        else if(id === 'password'){
            setCred({...cred, password: value});
        }
        else if(id === 'cpassword'){
            setCred({...cred, cpassword: value});
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const host = "http://localhost:5000/api/auth";
        // Backend API Call: To create User;
        if(cred.password === cred.cpassword){
            const url = `${host}/createUser`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: `${name.fname} ${name.lname}` , email: cred.email, password: cred.password })
            });
            const authtoken = await response.json();
            setName({ fname: '', lname: '' });
            setCred({ email: '', password: '', cpassword: '' });
            if(authtoken.token){
                localStorage.setItem('token', authtoken.token);
                window.location.href = "/";
            }
        }
        else{
            props.showAlert("Password didn't match","danger");
        }
    }
    return (
        <div className='container my-3'>
            <h1>Signup:</h1>
            <form onSubmit={handleSubmit}>
                <div className="row my-3">
                    <div className="col">
                        <label htmlFor="fname">First Name: </label>
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" id='fname' value={name.fname} onChange={handleChange} required/>
                    </div>
                    <div className="col">
                        <label htmlFor="lname"> Last Name: </label>
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id='lname' value={name.lname} onChange={handleChange}/>
                    </div>
                </div>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={cred.email} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={cred.password} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' value={cred.cpassword} onChange={handleChange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
