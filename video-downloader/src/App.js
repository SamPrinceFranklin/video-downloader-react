import URL from './components/URL';
import logo from '././icon/logo.svg';
import img1 from './icon/img1.svg';
import phone1 from './icon/phone1.svg';
import social1  from './icon/social1.svg';
import google from './icon/google.svg';
import facebook from './icon/facebook.svg'
import downloadbutton from './icon/downloadbutton.png';
import inputtext from './icon/Inputtext.svg';
import './App.css';;
function App() {
  return (
    <div>
      <img className='logo-css' src={logo}/>
      <img className='img1' src={img1}/>
      <img className='phone1' src={phone1}/>
      <img className='social1' src={social1}/>
      <img className='google' src={google}/>
      <img className='facebook' src={facebook}/>
      <img className='downloadbutton' src={downloadbutton}/>
      <img className='inputtext' src={inputtext}/>
      <URL />
      
    </div>
  );
}

export default App;
