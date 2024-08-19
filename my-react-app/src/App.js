// import logo from 'logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav>
        <a href="#">
          <img src="logo.svg"/>
        </a>
      </nav>
      <div className="form-wrapper">
        <h2>Sign In</h2>
        <form action="#" method="post">
          <div className="form-control">
              <input type="text" required/>
              <label>Email or phone number</label>
          </div>
          <div className="form-control">
              <input type="password" required/>
              <label>Password</label>
          </div>
          <button type="submit">Sign In</button>
          <div className="form-help"> 
              <div className="remember-me">
                <input type="checkbox" id="remember-me"/>
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="#">Need help?</a>
          </div>
        </form>
        <p>New to Netflix? <a href="#">Sign up now</a></p>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. 
          <a href="#">Learn more.</a>
        </small>
      </div>
      <header className="App-header"></header>
      
    </div>
  );
}

export default App;