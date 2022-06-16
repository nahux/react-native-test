import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from './themes';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  colorPrimary: {
    color: theme.colors.textPrimary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
});

export default function StyledText({ children, bold, primary, secondary, subheading, style, moreProps }) {
  const textStyles = [
    styles.text,
    bold && styles.bold,
    primary && styles.colorPrimary,
    secondary && styles.colorSecondary,
    subheading && styles.subheading,
  ]

  return (
    <Text style={textStyles} {...moreProps}>
      {children}
    </Text>
  )
}