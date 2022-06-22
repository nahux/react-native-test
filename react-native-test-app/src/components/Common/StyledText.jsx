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
  textAlignLeft: {
    textAlign: 'left'
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  textAlignRight: {
    textAlign: 'right'
  }
});

export default function StyledText({ children, align, bold, primary, secondary, subheading, style, moreProps }) {
  const textStyles = [
    styles.text,
    style,
    align === 'left' && styles.textAlignCenter,
    align === 'center' && styles.textAlignLeft,
    align === 'right' && styles.textAlignRight,
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