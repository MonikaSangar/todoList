import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import imagesPath from '../constants/imagesPath';

export default function DropDownComp({
  data,
  text,
  value = {},
  setSelect = () => {},
}) {
  console.log('value', !!value);

  const [state, setState] = useState();
  const [visible, setVisible] = useState(false);
  const onSelectItem = val => {
    setVisible(!visible);
    setSelect(val);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 14,
          width: '60%',
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 28,
        }}>
        <Text>{text}</Text>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Image
            style={{
              width: 28,
              height: 28,
              transform: [{rotate: visible ? '180deg' : '0deg'}],
            }}
            source={imagesPath.icDrop}
          />
        </TouchableOpacity>
      </View>
      {visible && (
        <View
          style={{
            backgroundColor: 'white',
            height: 100,
            marginTop: 8,
            padding: 14,
            borderRadius: 4,
            marginLeft: 200,
          }}>
          {data.map((val, i) => {
            return (
              <TouchableOpacity
                key={String(i)}
                onPress={() => onSelectItem(val)}
                style={{marginTop: 6}}>
                <Text>{val.fname}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
});
