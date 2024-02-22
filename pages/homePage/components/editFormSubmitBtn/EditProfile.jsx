import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useState} from '../../../../store/global';
import Input from '../../../../components/form_elements/Input';
import Form from '../../../../components/form/Form';
import colors from '../../../../assets/style/colors';
// import Screen from "../../../components/Screen";
import globalSyles from '../../../../assets/style/style';
import FormSubmitButton from '../../../../components/FormSubmitButton';
import Checkbox from '../../../../components/form_elements/Checkbox';
// import FirsAndSecondPageWrapper from "../components/FirstAndSecondPageWrapper";
import FormSubmitBtnText from './FormSubmitBtn';

function EditProfile({navigation}) {
  const state = useState();

  const route = useRoute();
  const data = route.params;

  function submitForm(values) {
    // navigation.navigate('Second', {...values, ...data})
  }

  return (
    <Form
      form={({submit}) => {
        return (
          <>
            <Input
              validation="required"
              name="firstName"
              defaultValue="Haben"
              label="First Name"
            />
            <Input
              validation="required"
              name="fatherName"
              label="Father's Name"
            />
            <Input
              validation="required"
              name="grandFatherName"
              label="Grand Father's Name"
            />
            <Input name="address" label="Address" validation="required" />
            <Input
              name="phoneNumber"
              label="Phone Number"
              validation="required | phone_251"
            />
            <Input name="email" label="Email" validation="required" />
            <FormSubmitBtnText
              onPress={() => {
                submit(submitForm);
              }}
            />
          </>
        );
      }}
    />
    // </FirsAndSecondPageWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    ...globalSyles.text,
    fontWeight: '700',
    fontSize: 20,
  },
  headerSubtext: {
    ...globalSyles.text,
    fontWeight: '700',
    fontSize: 13,
    color: colors['gray-500'],
  },
});
export default EditProfile;
