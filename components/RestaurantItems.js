import React from 'react'
import { View, Text,Image,Dimensions, TouchableOpacity } from 'react-native'


const {height,width}=Dimensions.get('window')

export const localRestaurants=[
    {
        name:"BeachBar",
        image_url:'https://wallpapercave.com/wp/wp1874156.jpg',
        cateogries:["Cafe","Bar"],
        price:"$$",
        reviews:1244,
        rating:4.5
  },
  {
    name:"India's Grill",
    image_url:'https://www.wallpapertip.com/wmimgs/233-2339017_restaurant-food-architecture-interior-design-room-wallpaper.jpg',
    cateogries:["Barbeque","Indian"],
    price:"$$",
    reviews:1544,
    rating:4.0
},
{
    name:"Binhana",
    image_url:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    cateogries:["Cafe","Swidish"],
    price:"$$",
    reviews:1044,
    rating:3.7
}
]


export default function restaurantItems(props) {
    return (
        <TouchableOpacity activeOpacity={0.4}>
            {props.restaurantData.map((restaurant,index)=>
            <View key={index} style={{marginTop:height*0.013,padding:width*0.03,backgroundColor:'white',marginBottom:height*0.01}}>
            <RestaurantImage  images={restaurant.image_url}/>
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
        </View>
        )}
        </TouchableOpacity>
            
    )
}
 

const RestaurantImage=(props)=>{
    return(
    <>
    <Image
    style={{width:width*0.94,height:height*0.25}}
     source={{uri:props.images}} />
</>
    )}

const RestaurantInfo=(props)=>{
    return(
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginTop:height*0.02}}>
            <View>
            <Text style={{fontSize:width*0.04,fontWeight:'bold'}}>{props.name}</Text>
            <Text style={{fontSize:width*0.035,fontWeight:'bold' ,color:'grey'}}>30-45 minutes</Text>
            </View>
            <View style={{backgroundColor:'silver',width:width*0.07,height:height*0.03,borderRadius:width*0.1,justifyContent:'center',alignItems:'center' }}>
            <Text>{props.rating}</Text>
            </View>
        </View>
    )
}