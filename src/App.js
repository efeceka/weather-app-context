import { WeatherProvider } from './context/WeatherContext';
import Container from './components/Main/Container';

function App() {
  return (
    <div className="app">
      <WeatherProvider>
        <Container/>
      </WeatherProvider>
    </div>
  );
}

export default App;
