import {useState} from 'react'

function Login(){

    const loginObj={
        email:'',
        password:''
    }

    const[login,setLogin]=useState(loginObj)
    
    const onChange=(event)=>{
        const {name,value}=event.target 
        setLogin({...login,[name]:value})
    }

    const loginCheck=()=>{
        console.log(login)
    }
    return(
        <form>
            <h2>Sign In</h2>
            <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" 
                       name="email" 
                       id="email"
                       className="form-control"
                       placeholder="Enter email"
                       onChange={onChange}
                       value={login.email}/>

                <label htmlFor="password">Password:</label>
                <input type="password" 
                       name="password" 
                       id="password"
                       className="form-control"
                       placeholder="Enter password"
                       onChange={onChange}
                       value={login.password}/>
                       
                <button type="button"
                        className="btn btn-primary"
                        onClick={loginCheck}>
                        Login
                </button>       
            
            </div>
        </form>
    )
}

export default Login