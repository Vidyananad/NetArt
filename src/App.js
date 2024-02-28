import CriPumpsAward from './components/criPumpsAward.js';
import CriPumpsAward2 from './components/criPumpsAward2.js';
import CriPumpsAward3 from './components/criPumpsAward3.js';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import './App.css'

function App() {
  return (
      <>
       <div className='App'>
          <CriPumpsAward/>
          <div className='para'>
              <p>
                 By installing over 10 lakhs star rated pumpsets across the country, C.R.I. has resulted in a cumulative saving of more than 9,000 million units of power for the nation.
             </p>
          </div> 
          <CriPumpsAward2/>
          <hr></hr>
          <CriPumpsAward3/>
        </div> 
        <div className='footer'>
          <div>
            <p><span><CallRoundedIcon/></span>Toll free number</p>
          </div>  
          <div>
             <p><a href="https://www.facebook.com/cripumps"><span><FacebookIcon/>www.facebook.com/cripumps</span></a></p>
          </div>
          <div>
             <p><span><LanguageSharpIcon/></span><a href="https://www.crigroups.com">www.crigroups.com</a></p>  
          </div>
       </div>
      </>
  );
}

export default App;
