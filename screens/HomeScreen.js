import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../component/NavOptions';
import NavFavorites from '../component/NavFavorites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';


const HomeScreen = () => {
    const dispatch = useDispatch(); 
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                    source={{ uri: "https://links.papareact.com/gzs" }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where From?'
                    debounce={400}
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    listViewDisplayed='auto'    // true/false/undefined
                    fetchDetails={true}
                    renderDescription={row => row.description} // custom description render

                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        dispatch(setOrigin({
                            location: details.geometry.location, 
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                        console.log(data, details);
                    }}
                    enablePoweredByContainer={false}

                    query={{
                        key:  GOOGLE_MAPS_API_KEY ,
                        language: "en"
                    }}

                    styles={{
                        container: {
                            flex: 0
                        },

                        textInputContainer: {
                            width: '100%'
                        },
                        description: {
                            fontWeight: 'bold'
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        }
                    }}
                />
                <NavOptions />
                <NavFavorites/>
            </View>
        </SafeAreaView>
    )
}


export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});