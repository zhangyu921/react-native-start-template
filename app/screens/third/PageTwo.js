import React, { PropTypes } from 'react';
import { Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Screen } from '../../components';
import Icon from 'react-native-vector-icons/Ionicons'

class PageTwo extends React.PureComponent {

  static propTypes = {
    back: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  };

  static navigationOptions = {
    title: '供应商',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-create" size={28} color={tintColor} />
      )
  };

  goBack = () => {
    this.props.back();
  };

  goToPageOne = () => {
    this.props.navigate({ routeName: 'PageOne' });
  };

  goToPageThree = () => {
    this.props.navigate({ routeName: 'PageThree' });
  };

  render() {
    return (
      <Screen>
        <Text>
          Third Screen / Page 2
        </Text>
        <Button title="Go back" onPress={this.goBack} />
        <Button title="Go to page 1" onPress={this.goToPageOne} />
        <Button title="Go to page 3" onPress={this.goToPageThree} />
      </Screen>
    );
  }

}

export default connect(undefined, NavigationActions)(PageTwo);
