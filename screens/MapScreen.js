import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MapView, { Marker } from 'react-native-maps';
import Map from '../component/Map';
import NavigateCard from '../component/NavigateCard';
import RideOptionsCard from '../component/RideOptionsCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`} >
        <Map />
      </View>

      <View style={tw`h-1/2`} >
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>

    </View>

  )
}

export default MapScreen

const styles = StyleSheet.create({})