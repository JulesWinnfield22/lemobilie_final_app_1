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
// import Screen from "../../../components/Screen";
import globalSyles from "../../../assets/style/style";
import FormSubmitButton from "../../../components/FormSubmitButton";
import Checkbox from "../../../components/form_elements/Checkbox";
import FirsAndSecondPageWrapper from "../components/FirstAndSecondPageWrapper";
import FormSubmitBtnText from "../components/FormSubmitBtnText";

function First({ navigation }) {
  const state = useState();
  
  function submitForm(values) {
    console.log("submited", values);
    navigation.navigate('Second')
  }

  return (
    <FirsAndSecondPageWrapper title='Registration form' subTitle='Fill the form below'>
      <Form
        form={({ submit }) => {
          return (
            <>
              <Input
                validation="required"
                name="firstName"
                defaultValue="Haben"
                label="First Name"
              />
              <Input validation="required" name="fathersName" label="Father's Name" />
              <Input validation="required" name="grandFathersName" label="Grand Father's Name" />
              <Input
                name='address'
                label='Address'
                validation='required'
              />
              <Checkbox
                validation="required-(you have to accept our terms)"
                name="accept"
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: colors["gray-400"],
                  }}
                >
                  By checking this I agree to the {" "}
                  <Text style={{ color: colors.primary }}>terms and conditions</Text> 
                  
                </Text>
              </Checkbox>
              <FormSubmitBtnText
                onPress={() => {
                  submit(submitForm);
                }}
              />
            </>
          );
        }}
      />
    </FirsAndSecondPageWrapper>
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
export default First;