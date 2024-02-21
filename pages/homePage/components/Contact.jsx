import { View, Text } from "react-native";
import React from "react";
import Screen from "../../../components/Screen";
import colors from "../../../assets/style/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
export default function Contact() {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={{ backgroundColor: colors["gray-300"], height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginTop: 30,
            marginLeft: 30,
          }}
        >
          <AntDesign
            onPress={() => navigation.goBack()}
            name="back"
            size={24}
            color="white"
          />

          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            Contact Us
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 20,
            borderRadius: 10,
            marginTop: 30,
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "column", gap: 20, marginLeft: 30 }}>
            <Text>Nyala insurance Contact center</Text>
            <Text style={{ color: "#0373fc" }}>+251946532178</Text>
          </View>
          <Ionicons
            style={{ marginRight: 30 }}
            color="#0373fc"
            name="call"
            size={24}
          />
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 20,
            borderRadius: 10,
            marginTop: 30,
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "column", gap: 20, marginLeft: 30 }}>
            <Text>Nyala Insurance Web Site</Text>
            <Text style={{ color: "#0373fc" }}>WWW.NyalInsurance.com</Text>
          </View>
          <MaterialCommunityIcons
            name="web"
            size={24}
            style={{ marginRight: 30 }}
            color="#0373fc"
          />
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 20,
            borderRadius: 10,
            marginTop: 30,
            height: 200,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              marginTop: 20,
              gap: 20,
              marginLeft: 30,
            }}
          >
            <Text>Social Media</Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View
                style={{
                  backgroundColor: "#0373fc",
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="facebook-f" size={24} color="white" />
              </View>
              <View
                style={{
                  backgroundColor: "#03b1fc",
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EvilIcons
                  style={{ marginBottom: 6 }}
                  name="sc-twitter"
                  size={34}
                  color="white"
                />
              </View>
              <View
                style={{
                  backgroundColor: "#0384fc",
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="telegram-plane" size={24} color="white" />
              </View>
              <View
                style={{
                  backgroundColor: "#00A0DC",
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="linkedin-in" size={24} color="white" />
              </View>
              <View
                style={{
                  backgroundColor: "#4c68d7",
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="instagram" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
}
