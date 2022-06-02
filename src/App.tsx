import './App.css';
import BlockNow from './components/block-now/BlockNow';
import Header from './components/header/Header';
import Logo from './components/logo/Logo';
import MainContainer from './components/main-container/MainContainer';


function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header>
          <Logo />
          <BlockNow />
        </Header>
      </MainContainer>
    </div>
  );
}

export default App;
