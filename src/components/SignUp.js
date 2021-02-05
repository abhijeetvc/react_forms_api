import {useState} from 'react'

function SignUp(){

    const userInitialize={
        firstName:'',
        lastName:'',
        city:'',
        email:'',
        password:''
    }

    const[user,setUser]=useState(userInitialize)

    const onChange=(event)=>{
        const {name,value}=event.target
        setUser({...user,[name]:value})
    }

    const register=()=>{
        console.log(user)
    }
    return(
        <div>
            <form>
                <h2>Sign Up</h2>
                <div className="form-group">
                <label htmlFor="firstName">FirstName : </label>
                <input type="text" 
                       className="form-control"
                       name="firstName"
                       value={user.firstName}
                       onChange={onChange}
                       />
                </div>
                
                <div className="form-group">
                <label htmlFor="lastName">LastName : </label>
                <input type="text" 
                       className="form-control"
                       name="lastName"
                       value={user.lastName}
                       onChange={onChange}
                       />
                </div>

                <div className="form-group">
                <label htmlFor="city">City : </label>
                <input type="text" 
                       className="form-control"
                       name="city"
                       value={user.city}
                       onChange={onChange}
                       />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email : </label>
                <input type="email" 
                       className="form-control"
                       name="email"
                       value={user.email}
                       onChange={onChange}
                       />
                </div>

                <div className="form-group">
                <label htmlFor="password">Password : </label>
                <input type="password" 
                       className="form-control"
                       name="password"
                       value={user.password}
                       onChange={onChange}
                       />
                </div>

                <button className="btn btn-success"  
                        type="button" 
                        onClick={register}>
                        Sign Up
                </button>
            </form>
        </div>
    )

}

export default SignUp