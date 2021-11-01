import React,{Component, Fragment} from 'react';
import './App.css';

import WelcometoAiDEA from './WelcometoAiDEA.png';
import googlebutton from './google-button.png';

class App extends Component {

  
  render() {
    return (
      
        <div className="App">

          <header className="App-Body">
            <h5>LOGO</h5>
          <h4> Welcome to AIDEA </h4>
          <h2> Login to your account </h2>
          <img scr={require('./Fr.png').default} height={100} width={100} />

          
          <div className="input">
        
            <form>

              <label>E-mail:</label>
              <input type="text" required
              />
              <br />
               <label>Password:</label>
              <input type="text" required
              />
              {/* <label>blog body:</label>
              <textarea  required></textarea> */}
              <br />
              <label>: Remember me :</label>
              <label>_____: Forgot password :</label>
              <br />
              {/* <label>blog author:</label>
              <select>
                <option value="mario">mario</option>
                <option value="mario">maru</option>
                <option value="mario">metro</option>
              </select> */}
              <button href="">Login now</button>
              <br />
              <button href="https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1">Or sign-in with google</button>
              <br />
              <button href="https://www.pea.co.th" >Or sign-in with PEA Account</button>

              <br />
              <label>Don’t have an account ?  </label>
              <label href="">Get started</label>
            </form>
          </div>
          
           
         
          </header>
          
          <br />
          {/* <img scr={'WelcometoAiDEA'} height={100} width={100}  />
          
          <img scr={'googlebutton'} height={100} width={100}  /> */}
         <br />
          

        </div>

       

      );    
      
   
}

  // function App() {
    
  // }

}


export default App;
