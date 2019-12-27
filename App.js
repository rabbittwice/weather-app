import React from 'react';
import {Alert} from "react-native";
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "a1a003a6ec77f63e0acc63d9cd0e46e7";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      } 
    } = await axios.get (
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
    console.log('현재 날씨는', weather[0].main, '입니다.');  
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    })
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
    const {coords : { latitude, longitude }} = await Location.getCurrentPositionAsync();
    this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation()
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

