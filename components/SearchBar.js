import React from 'react'
import { View, Text, Dimensions,Image, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const {height,width}=Dimensions.get('window')
export default function SearchBar({setcityhandler}) {
    return (
        <View style={{flexDirection:'row', marginTop:height*0.01 }}>
            <GooglePlacesAutocomplete 
            onPress={(data,details=null)=>
                {
                    const city=data.description.split(',')[0]
                    setcityhandler=(city)
                }
            }  
            query={{key:"AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4"}}
            placeholder="search"
            styles={{
                textInput:{
                    backgroundColor:'#eee',
                    borderRadius:width*0.2,
                    fontWeight:'700',
                    marginTop:height*0.01
                },
                textInputContainer:{
                    backgroundColor:'#eee',
                    borderRadius:width*0.1,
                    flexDirection:'row',
                    alignItems:'center',
                    marginRight:width*0.01
                }
            }}
            renderLeftButton={()=>(
                <View style={{marginLeft:width*0.03}}>
                    <Image 
                    style={{width:width*0.05,height:height*0.04}}
                    resizeMode="center"
                    source={require('../assets/images/location.png')}/>
                    </View>
                
            )
            
        }
        renderRightButton={()=>(
            <TouchableOpacity style={{marginRight:width*0.03,borderRadius:width*0.02,
                backgroundColor:'white',height:height*0.04,width:width*0.14,
                alignItems:'center',justifyContent:'center'
            }}>
                <Text>Search</Text>
            </TouchableOpacity>
        )}
            />
        </View>
    )
}
