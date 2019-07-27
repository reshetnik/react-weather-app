import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';

const API_KEY = '0bcf285d0aca30636c27d35937d3988a';



class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      const sunset = data.sys.sunset;
      const date = new Date();
      date.setTime(sunset);
      const sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: sunset_date,
        error: ""
      })
    }

  }

  render() {
    return (
      <div className="App">
        <Info />
        <Form weatherMethod={this.getWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrice={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }


}

export default App;
