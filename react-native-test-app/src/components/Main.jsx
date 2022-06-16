import React from 'react'
import Constants from 'expo-constants';
import { View, Text } from 'react-native'
import DriverList from './Driver/DriverList';
import theme from './Common/themes';

export default function Main() {
  return (
    <View style={{ backgroundColor: theme.colors.background, marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Sample React Native Application</Text>
      <DriverList />
    </View>
  )
}