import './App.css';
import BlockNow from './components/block-now/BlockNow';
import DaylightIndicator from './components/daylight-indicator/DaylightIndicator';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Logo from './components/logo/Logo';
import MainContainer from './components/main-container/MainContainer';
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header>
          <Logo />
          <BlockNow>
            <DaylightIndicator />
          </BlockNow>
        </Header>
        <Main></Main>
        <Footer></Footer>
      </MainContainer>
    </div>
  );
}

export default App;
