import './App.css';
import Background from './components/Background';
import BackgroundImage from './assets/spaceImage.jpg'

function App() {
  const divStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={divStyle} className="App">

      <Background />
    </div>
  );
}

export default App;
