import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MapView, {Marker} from 'react-native-maps';
import Map from '../component/Map';

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`} >
        <Map />
      </View>
      <View style={tw`h-1/2`} ></View>

    </View>

  )
}

export default MapScreen

const styles = StyleSheet.create({})