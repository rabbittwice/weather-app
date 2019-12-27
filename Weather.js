import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const weatherOption = {
    Rain: {
        iconName:"ios-rainy",
        gradient: ['#292E49', '#536976']
    },
    Snow: {
        iconName:"ios-snow",
        gradient: ['#292E49', '#536976']
    },
    Clear: {
        iconName:"ios-sunny",
        gradient: ['#292E49', '#536976']
    },
    Clouds: {
        iconName:"md-cloudy",
        gradient: ['#2193b0', '#6dd5ed'],
        title: "Clouds",
        subTitle: "There are many clouds hey"
    }
}


export default function Weather({temp, condition}){
    return (
        <LinearGradient colors={weatherOption[condition].gradient} style={styles.container}>

            <StatusBar barStyle="white-content"/>

            <View style={styles.halfContainer}>
                <Ionicons size={90} name={weatherOption[condition].iconName} color='white'/>
                <Text style={styles.temp}>{temp}˚</Text>
                </View>
            <View style={styles.halfContainer2}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{weatherOption[condition].title}</Text>
                    <Text style={styles.subTitle}>{weatherOption[condition].subTitle}</Text>   
                </View>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    temp: {
        fontSize: 36,
        color: 'white'
    },
    title: {
        fontSize: 32,
        color: 'white',
        marginBottom: 4
    },
    subTitle: {
        color: 'white',
        fontSize: 20
    },
    textContainer: {
        
    }
});