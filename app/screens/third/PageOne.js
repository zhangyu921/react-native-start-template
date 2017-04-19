import React, { PropTypes } from 'react';
import { Text, Button } from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Screen } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome'

class PageOne extends React.PureComponent {

  static propTypes = {
    back: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  };

  static navigationOptions = {
    title: '首页',
      tabBarIcon:({tintColor})=>(
          <Icon name="home" size={26} color={tintColor}/>
      )
  };

  goBack = () => {
    this.props.back();
  };

  goToPageTwo = () => {
    this.props.navigate({ routeName: 'PageTwo' });
  };

  goToPageThree = () => {
    this.props.navigate({ routeName: 'PageThree' });
  };
  
  goToShowMore = () => {
    this.props.navigate({ routeName: 'PageThree' });
  };

  render() {
    return (
      <Screen>
        <Text>
          Third Screen / Page 1
        </Text>
        <Button title="Go back" onPress={this.goBack} />
        <Button title="Go to page 2" onPress={this.goToPageTwo} />
        <Button title="Go to page 3" onPress={this.goToPageThree} />
        <Button title="Go to ShowMore" onPress={this.goToShowMore} />
      </Screen>
    );
  }

}




export default connect(undefined, NavigationActions)(PageOne);
