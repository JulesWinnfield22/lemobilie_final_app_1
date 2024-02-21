import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../../../components/Screen";
import DeviceInfo from 'react-native-device-info'
import colors from "../../../assets/style/colors";
import AntDesign from 'react-native-vector-icons/AntDesign'
function Info({name, value}) {
  return (
    <View style={{flexDirection: 'row', gap: 5}}>
      <Text style={{fontSize: 13}}>{name}: </Text>
      <Text style={{fontSize: 14, color: colors.primary, fontWeight: '600'}}>{ value }</Text>
    </View>
  )
}

const info = [{
  name: 'Model',
  value: DeviceInfo.getModel()
}, {
  name: 'Brand',
  value: DeviceInfo.getBrand()
}, {
  name: 'Hardware',
  value: DeviceInfo.getHardwareSync()
}, {
  name: 'Host',
  value: DeviceInfo.getHostSync()
}, {
  name: 'ID',
  value: DeviceInfo.getDeviceId()
}, {
  name: 'Manufacturer',
  value: DeviceInfo.getManufacturerSync()
}, {
  name: 'Device',
  value: DeviceInfo.getDeviceSync()
}, {
  name: 'Handset Id',
  value: DeviceInfo.getUniqueIdSync()
}]

export default function Footer({ navigation }) {
  console.log(Object.keys(DeviceInfo.getBrand))
  return (
    <Screen statusBarBg={colors["gray-300"]}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            paddingVertical: 20
          }}
        >
          <AntDesign
            onPress={() => navigation.goBack()}
            name="back"
            size={24}
            color="white"
          />

          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            Device Information
          </Text>
        </View>
        <View style={{backgroundColor: 'white', borderRadius: 5, padding: 10}}>
          {
            info.map(el => {
              return <Info key={el.name} {...el} />
            })
          }
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors['gray-300'],
    paddingHorizontal: 20
  },
});
