import {TabNavigator} from 'react-navigation';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import ScreenSecond from '../second/SecondScreenStack'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

let ScreenNavigator = ScreenSecond.navigationOptions={
    title:'首页',
    tabBarIcon:({tintColor})=>(
        <Icon name="home" size={26} color={tintColor}/>
    )
};

export default TabNavigator(
    {
        PageOne: {screen: ScreenSecond},
        PageTwo: {screen: PageTwo},
        PageThree: {screen: PageThree},
        PageFour: {screen: PageFour},
    },
    {
        
        initialRouteName: 'PageOne',
        tabBarPosition: 'bottom',
        animationEnabled:true,
        tabBarOptions: {
            activeTintColor: '#0f90fe',
            inactiveTintColor: '#7e8084',
            showIcon: true,
            showLabel: true,
            labelStyle: {
                fontSize: 10,
                margin:0,
                marginTop:2,
            },
            iconStyle:{
            
            },
            style: {
                backgroundColor: '#fff',
                height:50
            },
            indicatorStyle:{
                height:'100%',
                backgroundColor:'#e4e4e4'
            }
        },
    },
);
//
// const MyApp = TabNavigator(
//     {
//         Home: {
//             screen: MyHomeScreen,
//         },
//         Notifications: {
//             screen: MyNotificationsScreen,
//         },
//     },
//     {
//         tabBarOptions: {
//             activeTintColor: '#e91e63',
//         },
//     }
// );
