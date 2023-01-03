import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MapView, { Marker } from 'react-native-maps';
import Map from '../component/Map';
import NavigateCard from '../component/NavigateCard';
import RideOptionsCard from '../component/RideOptionsCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>

      <TouchableOpacity
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate("HomeScreen")}
        >
        <Icon name="menu" />
      </TouchableOpacity>

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