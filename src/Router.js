import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import BrowseScreen from './components/BrowseScreen';
import AboutScreen from './components/AboutScreen';
import PublishScreen from './components/PublishScreen';
import MakeMoneyScreen from './components/MakeMoneyScreen';
import SplashScreen from './components/SplashScreen';

const RouterComponent = () => {
    return (
        <Router>
            <Scene hideNavBar>
                    <Scene key="main" component={SplashScreen} 
                    title="" 
                    initial
                    />
                <Scene 
                    key="aboutScreen"
                    component={AboutScreen}
                    title=""
                />
                    <Scene key="browseScreen" component={BrowseScreen} title=""
                     />
                    
                    <Scene key="publishScreen" component={PublishScreen} title=""
                   
                    />

                    <Scene key="makeMoneyScreen" component={MakeMoneyScreen} title=""
                    
                    />

            </Scene>


                
        </Router>
    )
}

export default RouterComponent; 
