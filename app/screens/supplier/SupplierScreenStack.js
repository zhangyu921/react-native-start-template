import { StackNavigator } from 'react-navigation';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

const SupplierNavigator = StackNavigator(
    {
        PageOne: {
            screen: PageOne,
            
        },
        PageTwo: { screen: PageTwo },
        PageThree: { screen: PageThree },
    },
    {
        initialRouteName: 'PageOne',
    },
);

SupplierNavigator.navigationOptions = {
    title: '供应商',
    tabBarIcon: ({tintColor})=>(
        <Icon name="ios-create" size={26} color={tintColor}/>
    )
};

export default SupplierNavigator