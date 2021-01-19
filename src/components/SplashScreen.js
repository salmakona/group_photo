import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    ImageBackground, Button,
    Image, 
    LayoutAnimation } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection,NextButton,SwipScreen } from './common';


class SplashScreen extends Component {
    componentDidUpdate(){
        LayoutAnimation.spring()
    }

    render(){
        return (
            <ImageBackground 
                source={ require('../assets/SplashSecreen.png')} 
                style={styles.backgroundImageStyle}>
                <ScrollView>
                    <Card>
                        <CardSection>
                            <View style={{ height: 100 }}></View>
                        </CardSection>

                        <CardSection>
                            <Image source={require('../assets/camera.png')} />
                        </CardSection>

                        <CardSection>
                            <View>
                                <Text style={styles.headingStyle}>Group Photo</Text>
                            </View>
                            <View>
                                <Text style={styles.descriptionStyle}>Open app to capture and keep your photos organized</Text>
                            </View>
                        </CardSection>
                        {/* <CardSection>
                        <NextButton 
                            onPress={()=> Actions.aboutScreen()}>
                            Click for starting
                        </NextButton>
                    </CardSection> */}

                    <CardSection>
                        <View>
                           <SwipScreen onPress={()=> Actions.aboutScreen()} >Swipe for starting</SwipScreen>
                        </View>
                    </CardSection>
                    </Card>
                </ScrollView>
            </ImageBackground>
        )
    }


}

const styles = {
    backgroundImageStyle:{
        width: '100%', 
        height: '100%'
    },
    headingStyle:{
        fontSize: 40,
        color: '#ffffff',
        fontWeight: '500',
        marginBottom: 10
    },
    descriptionStyle:{
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    }
}

export default SplashScreen;
