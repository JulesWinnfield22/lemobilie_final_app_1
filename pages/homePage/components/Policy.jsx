import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Screen from "../../../components/Screen";
import colors from "../../../assets/style/colors";
import { LinearGradient } from 'expo-linear-gradient';
import { getId } from "../../../utils/utils";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { useNavigation } from "@react-navigation/native";

// import { Entypo } from '@expo/vector-icons'



export default function Footer() {
  const navigation = useNavigation();

  return (
    <Screen barStyle="dark-content">
      <View style={{backgroundColor:colors["gray-300"], height:"100%", width:"100%", gap:20}}>
        <View style={{backgroundColor:"white", height:"10%",justifyContent:"center"}}>
          <View style={{flexDirection:"row", paddingHorizontal:20, gap:20}}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="back"
            size={24}
            color="black"
          />
          <Text style={{color:"black", fontSize:20, fontWeight:'700'}}>Insurance Policy</Text>
          </View>
        </View>
        <View style={{backgroundColor:"white", height:"100%", marginHorizontal:20, borderRadius:10, gap:20, paddingHorizontal:20}}>
          <View style={{}}>
            <Text style={{color:colors.primary, fontSize:20, fontWeight:"700", top:10}}>Mobile Insurance Policy</Text>
          </View>
          <View style={{gap:20, borderBottomWidth:1, borderColor:colors["gray-300"],paddingBottom:10}}>
            <View style={{flexDirection:"row", gap:10, alignItems:"center"}}>
<MaterialIcons
            onPress={() => navigation.goBack()}
            name="workspace-premium"
            size={24}
            color="black"
          />
          <View style={{}}>
  <Text style={{color:colors["gray-400"]}}>Premium Type</Text>
  <Text style={{color:"black", fontWeight:"700"}}>Monthly</Text>


</View>
</View>


</View>


<View style={{gap:20, borderBottomWidth:1, borderColor:colors["gray-300"],paddingBottom:10}}>
            <View style={{flexDirection:"row", gap:10, alignItems:"center"}}>
<MaterialIcons
            onPress={() => navigation.goBack()}
            name="policy"
            size={24}
            color="black"
          />
          <View style={{}}>
  <Text style={{color:colors["gray-400"]}}>Policy Number</Text>
  <Text style={{color:"black", fontWeight:"700"}}>55645646</Text>


</View>
</View>


</View>


        </View>
      </View>
    </Screen>
  );
}


