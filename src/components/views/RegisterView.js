export default function RegisterView() {

    return (
      <div>
          <title>Please fill out this form for registration</title>
  
        <form onSubmit="" autoComplete="off">
          <label>
            Name: 
            <input type="text" name="name" value="" onChange="" />
          </label>
  
          <label>
            E-mail: 
            <input
              type="email"
              name="email"
              value=""
              onChange=""
            />
          </label>
  
          <label >
            Password: 
            <input
              type="password"
              name="password"
              value=""
              onChange=""
            />
          </label>
  
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }