// import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, porro nostrum commodi veritatis autem cupiditate aliquam tempore velit numquam error quis maiores reprehenderit neque itaque voluptatibus mollitia accusantium quas beatae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolor ut, ipsa, eveniet aspernatur officia, repudiandae saepe adipisci dolore eum tenetur porro tempora. Dolores autem porro veniam tempore fuga. Explicabo?</p>
        <FirstComponent/>
        <SecondComponent/>
      </header>
    </div>
  );
}

export default App;
