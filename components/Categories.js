 import React,{useState} from 'react'
 import { View, Text, Dimensions,Image, ScrollView } from 'react-native'
 const {width,height}=Dimensions.get('window')
 export default function Categories() {
     const items=[
         {  
             image:require('../assets/images/bread.png'),
             text:'bread'
         },
         {  
            image:require('../assets/images/coffee.png'),
            text:'coffee'
        },
        {  
            image:require('../assets/images/deals.png'),
            text:'deals'
        },
        {  
            image:require('../assets/images/fast-food.png'),
            text:'fast-food'
        },
        {  
            image:require('../assets/images/shopping-bag.png'),
            text:'pickup'
        },
        {  
            image:  require('../assets/images/soft-drink.png'),
            text:'Soft-drink'
        },
       

    ]
     return (
         <View style={{backgroundColor:'white',marginTop:height*0.01
         ,paddingVertical:height*0.001,paddingLeft:width*0.03}}>

       <ScrollView horizontal showsHorizontalScrollIndicator={false}>

             {items.map((item,index)=>(
             <View style={{alignItems:'center' ,marginRight:width*0.06}}>
            <Image source={item.image} style={{width:width*0.1,height:height*0.1}} resizeMode='contain'/>
            <Text style={{fontSize:width*0.04,fontWeight:'900'}}>{item.text}</Text>

            </View>
             ))}
     </ScrollView>
         </View>
     )
 }
 