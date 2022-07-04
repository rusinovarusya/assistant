import './App.css';
import BlockNow from './components/block-now/BlockNow';
import DaylightIndicator from './components/daylight-indicator/DaylightIndicator';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Logo from './components/logo/Logo';
import MainContainer from './components/main-container/MainContainer';
import Main from './components/main/Main';
import PlansCard from './components/plans-card/PlansCard';
import Plans from './components/plans/Plans';
import Random from './components/random/Random';
import Weather from './components/weather/Weather';


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
        <Main>
          <Plans>
            <PlansCard />
            <PlansCard />
            <PlansCard />
            <PlansCard />
            <PlansCard />
            <PlansCard />
          </Plans>
          <Weather />
          <Random />
        </Main>
        <Footer />
      </MainContainer>
    </div>
  );
}

export default App;
