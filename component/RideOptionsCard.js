import { StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';
// import { TouchableOpacity } from 'react-native-gesture-handler'


const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber Lux",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
]

const RideOptionsCar = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={[tw`flex top-3 left-5 p-3  rounded-full`]}
        >
          <Icon name="chevron-left" type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        //destructure and get the values
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity style = {tw`flex-row`}>
            <Image
              style={{
                width: 100,
                heigth: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: image }}
            />
            <View>
              <Text>Title</Text>
              <Text>Travel Time..</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default RideOptionsCar

const styles = StyleSheet.create({})