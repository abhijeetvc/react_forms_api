
function Login(){
    return(
        <form>
            <h2>Sign In</h2>
            <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" 
                       name="email" 
                       id="email"
                       className="form-control"
                       placeholder="Enter email"/>

                <label htmlFor="password">Password:</label>
                <input type="password" 
                       name="password" 
                       id="password"
                       className="form-control"
                       placeholder="Enter password"/>
                       
                <button type="submit"
                        className="btn btn-primary">
                        Login
                </button>       
            
            </div>
        </form>
    )
}

export default Login