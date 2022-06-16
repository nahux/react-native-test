import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from '../Common/StyledText'

export default function DriverItem(props) {
  return (
    <View key={props.driverId} style={styles.container}>
      <StyledText subheading bold>Code: {props.code ?? '-'}</StyledText>
      <StyledText subheading secondary>Name: {props.givenName} {props.familyName}</StyledText>
      <StyledText secondary>Nationality {props.nationality}</StyledText>
      <StyledText secondary>Birth Date {props.dateOfBirth}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  }
})