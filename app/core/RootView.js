import React, { Component, PropTypes } from 'react'
import { BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { RootNavigator } from './routes'
import { Screen } from '../components'

class RootView extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    initialized: PropTypes.bool.isRequired,
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props
    if (nav.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  render () {
    if (!this.props.initialized) {
      return <Screen/>
    }

    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    })
    return (
      <RootNavigator navigation={navigation}/>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.persistent.nav,
  initialized: state.transient.app.initialized,
})

export default connect(mapStateToProps)(RootView)