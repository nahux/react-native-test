import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from '../Common/StyledText'

const DriverDescription = (props) => {
  return (
    <View key={props.driverId} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <StyledText align='center' bold>{props.nationality}</StyledText>
        <StyledText align='center' secondary>Nationality</StyledText>
      </View>
      <View>
        <StyledText align='center' bold>{props.dateOfBirth}</StyledText>
        <StyledText align='center' secondary>Birth Date</StyledText>
      </View>
    </View>
  )
}

const DriverItem = (props) => {
  const DEFAULT_AVATAR = require('../../../assets/avatar.jpg');
  return (
    <View key={props.driverId} style={styles.container}>
      <Image style={styles.image} source={{ uri: props.imgUrl ?? DEFAULT_AVATAR }} accessibilityLabel='Driver Image' />
      <StyledText subheading bold>{props.givenName} {props.familyName} {props.code ? ' - ' + props.code : ''}</StyledText>
      <DriverDescription {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 1,
    borderRadius: 4
  }
})

export default DriverItem;