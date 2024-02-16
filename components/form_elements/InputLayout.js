import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { addMoreThanOneHandlerIfExis } from "../../utils/utils";
import colors from "../../assets/style/colors";
import globalSyles from '../../assets/style/style'
import ErrorMessage from "../ErrorMessage";

export default function InputLayout({ value, children, error, label, Left }) {
  const [focus, setFocus] = useState(false)

  const ModChild = React.createElement(children.type, {
    ...children.props,
    autoCompleteType: 'off',
    onFocus: addMoreThanOneHandlerIfExis(children.props?.onFocus, () => {
      setFocus(true)
    }),
    onBlur: addMoreThanOneHandlerIfExis(children.props?.onBlur, () => {
      setFocus(false)
    }),
    placeholder: '',
    style: [children.props?.style, styles.input],
  });

  return (
    <View style={{flexDirection: 'column', gap: 2}}>
      <View style={[styles.container, {
        justifyContent: !value && !focus ? 'center' : '',
        borderColor: focus ? colors.primary : colors["gray-300"]
      }]}>
        {
          Left &&
          <View style={{marginLeft: !focus ? 0: 0, justifyContent: 'center', alignItems: 'center', height: '100%', minWidth: 70, position: 'relative'}}>
            {Left}
            <View style={[styles.centeredContent, {backgroundColor: focus ? colors.primary : colors.textClr, width: 1, height: 25}]}></View>
          </View>
        }
        {ModChild}
        <Text style={[styles.label, {
          fontSize: focus || value ? 13 : 15,
          color: focus ? colors.primary : colors["gray-400"],
          transform: [
            {
              translateY: value || focus || Left ? -10 : 10, 
            },
          ],
        }]}>{label}</Text>
      </View>
      <ErrorMessage error={error} />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContent: {
    position: 'absolute',
    right: 0,
    top: '50%',
    height: 25,
    marginTop: -12.5, // Half of the height
    alignItems: 'center',
  },
  container: {
    height: 50,
    flexDirection: "row",
    position: 'relative',
    borderWidth: 2,
    borderRadius: 5,
  },
  inputLayout: {},
  label: {
    ...globalSyles.text,
    position: "absolute",
    left: 10,
    zIndex: 12,
    fontSize: 12,
    backgroundColor: colors.baseClr,
    paddingHorizontal: 3,
    pointerEvents: 'box-none',
    borderRadius: 5
  },
  input: {
    ...globalSyles.text,
    height: "100%",
    width: "100%",
    paddingHorizontal: 10,
    overflow: "hidden",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "InterRegular",
    textAlignVertical: "center",
    zIndex: 13
  },
});
