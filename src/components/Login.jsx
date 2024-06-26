import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Login() {
    let history = useHistory();
    const [cred, setCred] = React.useState({
        email:'',
        password:''
    });
    const handleChange = (e)=>{
        setCred({...cred,[e.target.name]:e.target.value});
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(cred)
            });
            const data = await res.json();
            console.log(data);
            setCred({ email: '', password: ''});
            if(data.token){
                history.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='container my-5'>
            <h1>Login:</h1>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={cred.email} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={cred.password} onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
  )
}
