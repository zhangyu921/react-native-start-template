/**
 * Created by ZhangYu on 2017/4/17.
 */
import { StackNavigator } from 'react-navigation';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import React from 'react';

let MainScreen = StackNavigator(
    {
        PageOne: { screen: PageOne },
        PageTwo: { screen: PageTwo },
        PageThree: { screen: PageThree },
    },
    {
        initialRouteName: 'PageOne',
    },
);

export default MainScreen