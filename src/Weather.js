import React, { Component } from 'react';

import FullImage from './components/FullImage';

import './styles/weather.scss';

function getRaindrops(num) {
    let rain = [];

    for(let i=0; i < num; i++) {
        rain.push(<i key={i} className="rain"></i>);
    }
    return (
        rain
    );
}

class Weather extends Component {

    constructor(props) {
        super();
        this.handleRouting = this.handleRouting.bind(this);
		this.state = {
            image: "",
            area: "",
            temp: "",
            description: "",
            weather: ""
        }
    }

    handleRouting(route) {
		this.props.onRoutingChange(route);
	}
    
    async getGeoInfo() {
        try {
            const data = await fetch(`http://ip-api.com/json/`)
            .then(res => {return(res)})
            if (!data.ok) {
                throw Error(data.statusText);
            } else {
                return data.json();
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getWeatherInfo(lat, long) {
        try {
            const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=`+lat+`&lon=`+long+`&units=metric&appid=bf8898a7dc88cc8d3e0c25d2ba6b6004`)
            .then(res => {return(res)})
            if (!weather.ok) {
                throw Error(weather.statusText);
            } else {
                return weather.json();
            }
        } catch (error) {
            console.log(error);
        }
    }

    setBackground(icon) {
        let weatherType;
        switch(icon) {
            case "01d":
                this.setState({weather: "clearsky"});
                weatherType = "clearsky";
                break;
            case "01n":
                this.setState({weather: "night"});
                weatherType = "nighttime";
                break;
            case "02d":
                this.setState({weather: "sunny"});
                weatherType = "sunny-sky";
                break;
            case "04d":
            case "04n":
                this.setState({weather: "cloudy"});
                weatherType = "cloudy-ocean";
                break;
            case "09d":
            case "09n":
            case "10d":
            case "10n":
                this.setState({weather: "raining"});
                weatherType = "rainy-plant";
                break;
            case "11d":
            case "11n":
                this.setState({weather: "thunder"});
                weatherType = "thunder-city";
                break;
            case "13d":
            case "13n":
                this.setState({weather: "snowing"});
                weatherType = "snowy-road";
                break;
            case "50d":
            case "50n":
                this.setState({weather: "misty"});
                weatherType = "misty-road";
                break;
            default:
                this.setState({weather: "normal"});
                weatherType = "sunset";
        }
        this.setState({image: require('./assets/images/'+weatherType+'.jpg')});
    }

    async componentDidMount(){
        this.handleRouting("weather");

        const geoData = await this.getGeoInfo();
        const weatherData = await this.getWeatherInfo(geoData.lat, geoData.lon);

        this.setBackground(weatherData.weather[0].icon);
        this.setState({area: geoData.city});
        const description = weatherData.weather[0].description
        
        this.setState({temp: weatherData.main.temp});
        this.setState({wind: weatherData.wind.speed});
        this.setState({description: (description.charAt(0).toUpperCase() + description.slice(1))});
    }

    componentWillUnmount(){
        this.handleRouting("");
    }
    
    getWeatherEffect() {
        if(this.state.weather == "raining" || this.state.weather == "thunder")
            return getRaindrops(150);
        if(this.state.weather == "snowing")
            return;
        if(this.state.windy > 8)
            return;
    }

	render() {
		return (
			<React.Fragment>
                {this.state.temp ? <FullImage image={this.state.image} title={this.state.area + ", " + this.state.temp + " °C"} subTitle={this.state.description}/> : ''}
                <div>
                    {this.getWeatherEffect()}
                </div>
			</React.Fragment>
		)
	}
}

export default Weather;