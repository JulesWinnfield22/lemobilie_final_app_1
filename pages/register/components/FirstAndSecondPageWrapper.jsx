import { useNavigation } from "@react-navigation/native";
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "../../../store/global";
import Input from "../../../components/form_elements/Input";
import Form from "../../../components/form/Form";
import colors from "../../../assets/style/colors";
import Screen from "../../../components/Screen";
import globalSyles from "../../../assets/style/style";
import FormSubmitButton from "../../../components/FormSubmitButton";
import Checkbox from "../../../components/form_elements/Checkbox";
import { Children } from "react";

function submitForm(values) {
  console.log("submited", values);
}

function FirsAndSecondPageWrapper({ children, title, subTitle }) {
  const state = useState();
  const navigation = useNavigation();

  return (
    <Screen barStyle="dark-content" statusBarBg="white">
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {title}
        </Text>
        <Text style={styles.headerSubtext}>
          {subTitle}
        </Text>
      </View>
      {children}
      <View style={styles.header}>
        <Text style={[styles.headerText, { fontSize: 15 }]}>
        
        </Text>
        <Text
          style={[
            styles.headerSubtext,
            { color: colors.primary, fontSize: 15 },
          ]}
        >
        
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    ...globalSyles.text,
    fontWeight: "700",
    fontSize: 20,
  },
  headerSubtext: {
    ...globalSyles.text,
    fontWeight: "700",
    fontSize: 13,
    color: colors["gray-500"],
  },
});
export default FirsAndSecondPageWrapper;
