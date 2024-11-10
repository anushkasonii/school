import logo from './logo.svg';
import './App.css';
import ImageBox from './Components/ImageBox';
import NameLogo from './Components/NameLogo';
import SocialMediaBar from './Components/SocialMediaBar';
import AboutSchool from './Components/AboutSchool';

function App() {
  return (
    <div className="App">
      <ImageBox/>
      <NameLogo/>
      <SocialMediaBar/>
      <AboutSchool/>
    </div>
  );
}

export default App;
