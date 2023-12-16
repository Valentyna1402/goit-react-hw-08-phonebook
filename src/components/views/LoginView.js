export default function LoginView() {
    
    return (
      <div>
        <h1>Welcome</h1>
  
        <form autoComplete="off">
          <label>
            E-mail: 
            <input
              type="email"
              name="email"
              value=""
              onChange=""
            />
          </label>
  
          <label>
            Password: 
            <input
              type="password"
              name="password"
              value=""
              onChange=""
            />
          </label>
  
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }