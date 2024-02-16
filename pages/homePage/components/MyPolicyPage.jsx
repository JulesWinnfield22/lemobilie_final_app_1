import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";
import Screen from "../../../components/Screen";
import colors from "../../../assets/style/colors";
import { MaterialIcons } from "react-native-vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MyPolicyPage = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={{ backgroundColor: colors["gray-300"], height: "100%" }}>
        <View
          style={{
            height: "14%",
            borderRadius: 10,
          }}
        >
          <View style={{ flexDirection: "column", gap: 10, marginLeft: 30 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <View
                style={{
                  gap: 10,
                  flexDirection: "row",
                  height: 40,
                  alignItems: "center",
                }}
              >
                <Text
                  onPress={() => navigation.goBack()}
                  style={{ fontSize: 40, color: "white" }}
                >
                  <AntDesign name="back" size={24} color="white" />
                </Text>
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "white" }}
                >
                  My Policy
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignContent: "center",
                  gap: 20,
                  marginRight: 20,
                }}
              >
                <MaterialIcons name="home" size={24} color="white" />
                <MaterialIcons name="notifications" size={24} color="white" />
              </View>
            </View>
            <View style={{}}>
              <Text style={{ color: "white" }}>
                Dear Haben !! Policy Document
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: colors["gray-500"],
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 20,
              marginTop: 5,
            }}
          >
            About
          </Text>
          <View style={{ gap: 8, marginTop: 10, marginHorizontal: 10 }}>
            <Text style={{ color: colors["gray-450"] }}>
              1.1 Dear HABEN thank you for Subscribing Lemobilie , a mobile
              insurance from nyala insurance S.C your policy document is ready
              as shown below.
            </Text>
            <Text style={{ color: colors["gray-450"] }}>
              1.2 In the event of loss or screen damage , you will be liable to
              pay or contribute 30% of the loss /repair amount or a minimum of
              birr 350 for each and every claim.
            </Text>
          </View>
          <Text
            style={{
              color: colors["gray-450"],
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 10,
            }}
          >
            Policy Terms & Condition
          </Text>
          <View style={{ gap: 10, margin: 10 }}>
            <View style={{ gap: 10, flexDirection: "row", marginTop: 10 }}>
              <MaterialIcons name="contacts" size={24} color="#0373fc" />

              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#0373fc",
                    fontSize: 20,
                    fontWeight: "700",
                  }}
                >
                  Address
                </Text>
                <View style={{}}>
                  <Text style={{}}>State:Addis Ababa</Text>
                  <Text style={{}}>City:Addis Ababa</Text>
                </View>
              </View>
            </View>

            <View style={{ gap: 10, flexDirection: "row" }}>
              <MaterialIcons name="policy" size={24} color="#0373fc" />

              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#0373fc",
                    fontSize: 20,
                    fontWeight: "700",
                  }}
                >
                  Policy No
                </Text>
                <View style={{}}>
                  <Text style={{}}>10101</Text>
                </View>
              </View>
            </View>

            <View style={{ gap: 10, flexDirection: "row" }}>
              <Ionicons name="basket" size={24} color="#0373fc" />

              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#0373fc",
                    fontSize: 20,
                    fontWeight: "700",
                  }}
                >
                  Sum Insured
                </Text>
                <View style={{}}>
                  <Text style={{}}>Handsetcost: 100000</Text>
                  <Text>(Max)</Text>
                </View>
              </View>
            </View>

            <View style={{ gap: 10, flexDirection: "row" }}>
              <AntDesign name="mobile1" size={24} color="#0373fc" />

              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#0373fc",
                    fontSize: 20,
                    fontWeight: "700",
                  }}
                >
                  IMEI
                </Text>
                <View style={{}}>
                  <Text style={{}}>a) IMEI:</Text>
                  <Text>350124879875</Text>
                  <Text style={{}}>b) IMEI:</Text>
                  <Text style={{}}> 3564879555454</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            marginHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Text
            style={{
              color: "#0373fc",
              marginLeft: 30,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Plan Description
          </Text>
          <View
            style={{
              alignItems: "center",
              height: 95,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "black" }}>Plan Perchased:</Text>
            <Text style={{ color: "black" }}>pack:281.02 per/month</Text>
            <View
              style={{
                marginTop: 5,
                borderColor: "#0373fc",
                borderWidth: 2,
                width: "85%",
                height: 35,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#0373fc" }}>
                Change Premium deduction Mode
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default MyPolicyPage;
