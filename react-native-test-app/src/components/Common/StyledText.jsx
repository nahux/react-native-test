import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'black',
  },
  bold: {
    fontWeight: 'bold',
  },
  success: {
    color: '#03c300'
  },
  warning: {
    color: '##ffa500'
  },
  error: {
    color: '#ff0000'
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  }
});

export default function StyledText({ bold, warning, error, success, big, small, children }) {
  const textStyles = [
    styles.text,
    bold && styles.bold,
    success && styles.success,
    warning && styles.warning,
    error && styles.error,
    big && styles.big,
    small && styles.small,
  ]

  return (
    <Text style={textStyles}>
      {children}
    </Text>
  )
}