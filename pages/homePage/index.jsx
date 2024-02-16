import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Pressable,
  Image,
  PanResponder,
  Animated,
} from "react-native";
import NavBar from "./components/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Policy from "./components/Policy";
import QualityCheck from "./components/QualityCheck";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
import Screen from "../../components/Screen";

const Tab = createBottomTabNavigator();

// const tabBarIconOptions = (route, focused, color, size) => {
//   let iconName;

//   if (route.name === "Home") {
//     iconName = focused ? "home" : "home-outline";
//   } else if (route.name === "Policy") {
//     iconName = focused ? "settings" : "settings-outline";
//   } else if (route.name === "Profile") {
//     iconName = focused ? "person" : "person-outline";
//   } else if (route.name === "QualityCheck") {
//     iconName = focused ? "checkmark-done" : "checkmark-done-outline";
//   }

//   return <Ionicons name={iconName} size={size} color={color} />;
// };

const openModal = () => {};

// export default function Home(props) {
// const [showModal, setShowModal] = React.useState(false);

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx < 0) {
        pan.setValue({ x: gestureState.dx, y: 0 });
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx < -100) {
        // Sliding to the left, close the modal
        setModalVisible(false);
      } else if (gestureState.dx > 100) {
        // Sliding to the right, open the modal
        setModalVisible(true);
      } else {
        // Sliding not enough, reset the position
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const handleOpenModal = () => {
    pan.setValue({ x: 0, y: 0 }); // Reset pan value to initial position
    setModalVisible(true); // Open the modal
  };

  const state = useState();

  return (
    <Screen>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={styles.modal}
      >
        <Screen backgroundColor={"#252930"}>
          <Animated.View
            style={[
              {
                transform: [{ translateX: pan.x }],
                width: "75%",
                height: "100%",
                backgroundColor: "#1b1d21",
              },
            ]}
            {...panResponder.panHandlers}
          >
            <View
              style={{
                flexDirection: "column",
                height: "100%",
                width: "100%",
                flex: 1,
                backgroundColor: "#1b1d21",
              }}
            >
              <View
                style={{
                  backgroundColor: "#252930",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  height: 150,
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    marginTop: 10,
                    marginLeft: 20,
                    gap: 10,
                  }}
                >
                  <Image
                    style={{
                      borderRadius: 100,

                      width: 70,
                      height: 70,
                    }}
                    source={require("../../assets/images/Messi.jpg")}
                  ></Image>
                  <Text style={{ color: "white", fontSize: 20 }}>
                    Lionel Messi
                  </Text>
                  <Text style={{ color: "white", marginLeft: 4 }}>
                    +251965321478
                  </Text>
                </View>

                {/* <View style={{}}>
                <Pressable onPress={() => setModalVisible(false)}>
                  <Ionicons name="close" size={32} color="white" />
                </Pressable>
              </View> */}
              </View>
              <View style={{ marginLeft: 20, marginTop: 20 }}>
                <View style={{ flexDirection: "column", gap: 20 }}>
                  <Pressable
                    style={{ flexDirection: "row", Gap: 40 }}
                    underlayColor="#0D47A1"
                    onPress={() => alert("My Stories pressed!")}
                  >
                    {/* <Ionicons name="close" size={32} color="white" /> */}
                    <Text style={{ color: "white", marginLeft: 20 }}>
                      My Stories
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{ flexDirection: "row", Gap: 40 }}
                    underlayColor="#0D47A1"
                    onPress={() => alert("New Group pressed!")}
                  >
                    {/* <Ionicons name="menu" size={32} color="white" /> */}
                    <Text style={{ color: "white", marginLeft: 20 }}>
                      New Group
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{ flexDirection: "row", Gap: 40 }}
                    underlayColor="#0D47A1"
                    onPress={() => alert("Contacs pressed!")}
                  >
                    {/* <Ionicons name="menu" size={32} color="white" /> */}
                    <Text style={{ color: "white", marginLeft: 20 }}>
                      Contacs
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{ flexDirection: "row", Gap: 40 }}
                    underlayColor="#0D47A1"
                    onPress={() => alert("Calls  pressed!")}
                  >
                    {/* <Ionicons name="menu" size={32} color="white" /> */}
                    <Text style={{ color: "white", marginLeft: 20 }}>
                      Calls
                    </Text>
                  </Pressable>
                  <Pressable style={{ flexDirection: "row", Gap: 40 }}>
                    {/* <Ionicons name="menu" size={32} color="white" /> */}
                    <Text style={{ color: "white", marginLeft: 20 }}>
                      People Nearby
                    </Text>
                  </Pressable>
                  <Pressable style={{ flexDirection: "row", Gap: 40 }}>
                    {/* <Ionicons name="menu" size={32} color="white" /> */}
                    <Text style={{ color: "white", marginLeft: 20 }}>
                      Saved Messages
                    </Text>
                  </Pressable>
                  <Pressable style={{ flexDirection: "row", Gap: 40 }}>
                    {/* <Ionicons name="menu" size={32} color="white" /> */}
                    <Text style={{ color: "white", marginLeft: 20 }}>
                      Setiing
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Animated.View>
        </Screen>
      </Modal>
      <View style={{ zIndex: 100, position: "absolute", top: 14, left: 14 }}>
        <Text>
          {/* <Ionicons
            onPress={handleOpenModal}
            name="menu"
            size={40}
            color="white"
          /> */}
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={NavBar}
          options={{
            headerTitle: "Home",
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={handleOpenModal}
              >
                {/* <Ionicons name="menu" size={32} color="black" /> */}
              </TouchableOpacity>
            ),
            headerRight: null,
            headerTitleAlign: "center",
          }}
        />
        <Tab.Screen
          name="Policy"
          component={Policy}
          options={{ headerTitle: "Policy", headerTitleAlign: "center" }}
        />
        <Tab.Screen
          name="QualityCheck"
          component={QualityCheck}
          options={{ headerTitle: "Quality Check", headerTitleAlign: "center" }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerTitle: "profile", headerTitleAlign: "center" }}
        />
      </Tab.Navigator>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  modal: {
    marginRight: 80,
  },
  centeredView: {
    flex: 1,
    backgroundColor: "gray",
    width: "100%",
    height: "100%",
  },
  modalView: {
    alignItems: "center",
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F19",
  },
  buttonClose: {},
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
