import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView,StyleSheet, Dimensions, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems,{localRestaurants} from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'
const {width,height}=Dimensions.get('window')

const YELP_API_KEY="7fEJv_A6alRrlV7u_z3k5r48P86ZuL1pVFKuS5uhgSnl2burvA7Yb24N3sLQei48zs_NFlYkImAjR-t8HNr1XVrxn90s1HndEi9EC5WypUvCqIdEKk1QCGqamWlUYXYx";




export default function Home() {
    const [restaurantData,setRestaurantData]=useState(localRestaurants)
    const [city,setCity]=useState("SanFransico");
    const [activetab,setActiveTab]=useState('Delivery')

    const getRestaurantFromYelp=()=>{
        const yelpUrl=`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        
        const apiOptions={
        headers:{
            Authorization:`Bearer ${YELP_API_KEY}`,
        },
     }
    return fetch(yelpUrl,apiOptions)
    .then((res)=>res.json())
    .then((json)=>setRestaurantData(json.businesses.filter((business)=>
    business.transactions.includes(activetab.toLowerCase()))));
};

    useEffect(()=>
    {
        getRestaurantFromYelp();
    }, [city,activetab]);

    return (
     <SafeAreaView style={{flex:1 ,backgroundColor:'#eee'}}>
            <View style={{backgroundColor:'white',padding:height*0.01}}>
            <HeaderTabs activetab={activetab} setActiveTab={setActiveTab}/>
            <SearchBar setcityhandler={setCity}/>
         </View>
         <ScrollView showsHorizontalScrollIndicator={false}>
         <Categories/>
         <RestaurantItems restaurantData={restaurantData} />
         
         </ScrollView>
         
     </SafeAreaView>
    )
}


const styles=StyleSheet.create({

})
