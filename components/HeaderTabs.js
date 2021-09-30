import React, { useState } from 'react'
import { View, Text, TouchableOpacity,Dimensions } from 'react-native'


const{height,width}=Dimensions.get('window')

 const HeaderTabs=(props)=> {
    
    return (
        <View style={{flexDirection:"row",
        padding:height*0.02,
        alignSelf:'center'}}>

            <HeaderButton text='Delivery'
              activetab={props.activetab}
              setActiveTab={props.setActiveTab}
              />

            <HeaderButton text='Pickup' 
            activetab={props.activetab}
            setActiveTab={props.setActiveTab}/>
        </View>
    )
}

const HeaderButton=(props)=>
{
    return(
        <View>
            <TouchableOpacity style={{paddingHorizontal:width*0.01,
            backgroundColor:props.activetab==props.text?'black':'white',
        paddingVertical:height*0.01,
        borderRadius:width*0.1
        ,paddingHorizontal:width*0.03}}
        onPress={()=>props.setActiveTab(props.text)}
        >

                <Text style={{color:props.activetab==props.text?'white':'black',
                fontWeight:'bold'}}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default HeaderTabs


