import React from 'react'
import { Text, FlatList } from 'react-native'
import data from './data'
import DriverItem from './DriverItem'

export default function DriverList() {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: driver }) => (
        <DriverItem {...driver} />
      )}
    />
  )
}