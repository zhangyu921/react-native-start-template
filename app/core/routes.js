import React from 'react'
import {TabNavigator} from 'react-navigation'
import {MainScreen, SupplierScreen} from '../screens'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Routes = {
    Main: {
        screen: MainScreen,
        navigationOptions: {
            title: '首页',
            tabBarIcon: ({tintColor}) => (
                <Icon name="home" size={24} color={tintColor}/>
            )
        }
    },
    Supplier: {
        screen: SupplierScreen,
        navigationOptions:{
            title: '供应商',
            tabBarIcon: ({tintColor})=>(
                <Icon name="pencil-box" size={24} color={tintColor}/>
            )
        }
    },
    

};

const Config = {
    initialRouteName: 'Main',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#0f90fe',
        inactiveTintColor: '#7e8084',
        showIcon: true,
        showLabel: true,
        labelStyle: {
            fontSize: 10,
            margin: 0,
            marginTop: 2,
        },
        iconStyle: {},
        style: {
            backgroundColor: '#fff',
            height: 50
        },
        indicatorStyle: {
            height: '100%',
            backgroundColor: '#e4e4e4'
        }
    },
};

export const RootNavigator = TabNavigator(Routes, Config);
export const RootRouter = RootNavigator.router;