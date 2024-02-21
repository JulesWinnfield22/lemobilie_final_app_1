import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import Screen from "../../../components/Screen";
import colors from "../../../assets/style/colors";
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import { useSelector } from 'react-redux'
import AsynStorage from '@react-native-async-storage/async-storage'

export default function Footer({ navigation }) {
  const user = useSelector(state => state.user)

  console.log(user)

  function logout() {
    AsynStorage.clear()
    navigation.replace('login')
  }
  return (
    <Screen>
      <View style={{backgroundColor:colors["gray-300"],height:"100%",gap:10}}>
        <View style={{ flexDirection: "row",
            
            backgroundColor:"white",
            height:60,
            alignItems:"center",
            paddingHorizontal:20
            }}>
              

       <View
          style={{
             flexDirection:"row",gap: 20
           
          }}
        >
          <AntDesign
            onPress={() => navigation.goBack()}
            name="back"
            size={24}
            color="#212529"
            
          />

          <Text style={{ color: "#212529", fontSize: 20, fontWeight: "700"}}>
            Account
          </Text>
        </View>
          
        </View>
        <View style={{backgroundColor:"white",marginHorizontal:20, height:"20%",borderRadius:10, flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
           <View style={{alignItems:"center"}}>
           <Image style={{width:80 ,height:80,borderRadius:100}}  source={require("../../../assets/images/Messi.jpg")}></Image>
          <Text style={{color:"#212529",fontWeight:"700",fontSize:20}}>Leonel Messi</Text>

          </View>
       
          
        </View>

        <View style={{backgroundColor:"white", marginHorizontal:20 , height:"60%" ,borderRadius:10}}>
          <View style={{gap:10,padding:20}}>
              <View style={{ gap:20, justifyContent:"space-between", flexDirection:"row"}}>
            <View style={{gap:10, flexDirection:"row"}}>
         <FontAwesome5
            name="user-check"
            size={24}
            color="#212529"
          /> 
           <Text style={{color:"#212529", fontSize:20 ,fontWeight:"400"}}>Profile</Text>

            </View>
     <Text style={{color:"black",fontSize:30,fontWeight:"300", marginTop:-10}}>&gt;</Text>
</View>

<View style={{ gap:20, justifyContent:"space-between", flexDirection:"row"}}>
            <View style={{gap:10, flexDirection:"row"}}>
         <AntDesign
            name="setting"
            size={24}
            color="#212529"
          /> 
           <Text style={{color:"#212529", fontSize:20 ,fontWeight:"400"}}>Setting</Text>

            </View>
     <Text style={{color:"#212529",fontSize:30,fontWeight:"300", marginTop:-10}}>&gt;</Text>
</View>


<View style={{ gap:20, justifyContent:"space-between", flexDirection:"row"}}>
            <View style={{gap:10, flexDirection:"row"}}>
         <FontAwesome5
            name="history"
            size={24}
            color="#212529"
          /> 
           <Text style={{color:"#212529", fontSize:20 ,fontWeight:"400"}}>Payment History</Text>

            </View>
     <Text style={{color:"#212529",fontSize:30,fontWeight:"300", marginTop:-10}}>&gt;</Text>
</View>


<View style={{ gap:20, justifyContent:"space-between", flexDirection:"row"}}>
            <View style={{gap:10, flexDirection:"row"}}>
         <AntDesign
            name="heart"
            size={24}
            color="#212529"
          /> 
           <Text style={{color:"#212529", fontSize:20 ,fontWeight:"400"}}>My Insurance</Text>

            </View>
     <Text style={{color:"#212529",fontSize:30,fontWeight:"300", marginTop:-10}}>&gt;</Text>
</View>


<View style={{ gap:20, justifyContent:"space-between", flexDirection:"row"}}>
            <View style={{gap:10, flexDirection:"row"}}>
         <MaterialIcons
            name="place"
            size={24}
            color="#212529"
          /> 
           <Text style={{color:"#212529", fontSize:20 ,fontWeight:"400"}}>Address</Text>

            </View>
     <Text style={{color:"#212529",fontSize:30,fontWeight:"300", marginTop:-10}}>&gt;</Text>
</View>

{/* <View style={{ gap:20, justifyContent:"space-between", flexDirection:"row"}}>
            <View style={{gap:10, flexDirection:"row"}}>
         <MaterialIcons
            name="place"
            size={24}
            color="#212529"
          /> 
           <Text style={{color:"#212529", fontSize:20 ,fontWeight:"400"}}>Terms & Condtions</Text>

            </View>
     <Text style={{color:"#212529",fontSize:30,fontWeight:"300", marginTop:-10}}>&gt;</Text>
</View> */}

<View style={{ gap:20, justifyContent:"space-between", flexDirection:"row"}}>
            <View style={{gap:10, flexDirection:"row"}}>
         <MaterialIcons
            name="place"
            size={24}
            color="#212529"
          /> 
           <Text style={{color:"#212529", fontSize:20 ,fontWeight:"400"}}>Terms & Condtions</Text>

            </View>
     <Text style={{color:"#212529",fontSize:30,fontWeight:"300", marginTop:-10}}>&gt;</Text>
</View>

<View style={{ gap:20, justifyContent:"space-between", flexDirection:"row"}}>
            <View style={{gap:10, flexDirection:"row"}}>
         <MaterialIcons
            name="help"
            size={24}
            color="#212529"
          /> 
           <Text style={{color:"#212529", fontSize:20 ,fontWeight:"400"}}>Help</Text>

            </View>
     <Text style={{color:"#212529",fontSize:30,fontWeight:"300", marginTop:-10}}>&gt;</Text>
</View>



  <Pressable onPress={logout}>
    <View style={{ gap:20, justifyContent:"space-between", flexDirection:"row"}}>
                <View style={{gap:10, flexDirection:"row"}}>
            <Entypo
                name="log-out"
                size={24}
                color="#212529"
              /> 
              <Text style={{color:"#212529", fontSize:20 ,fontWeight:"400"}}>Log Out</Text>

                </View>
        <Text style={{color:"#212529",fontSize:30,fontWeight:"300", marginTop:-10}}>&gt;</Text>
    </View>

  </Pressable>


</View>
        








        </View>

      
      </View>
    </Screen>
  );
}


