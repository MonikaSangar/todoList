import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import colorsPath from '../constants/colorsPath';
import imagesPath from '../constants/imagesPath';
const DropDownComp = ({
  data = [],
  selectedValue = '',
  onPressValue = () => {},
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const _onPressValue = item => {
    // console.log("item",item);
    onPressValue(item);
    setIsVisible(false);
  };

  return (
    <View style={{marginHorizontal: 14, marginTop: 24 }}>
      <View style={styles.dropDown}>
        <Text>{selectedValue}</Text>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(!isVisible);
          }}>
          <Image style={{height: 28, width: 28,}} source={imagesPath.icDrop} />
        </TouchableOpacity>
      </View>
      {!!isVisible ? (
        <View style={{backgroundColor:"white"}}>
          {data.map(item => {
            return (
              <TouchableOpacity onPress={() => _onPressValue(item)} style={{borderBottomColor:"grey",borderBottomWidth:0.5,paddingVertical:8,paddingHorizontal:8}} >
                <Text style={{marginTop: 8, fontSize: 16}}>{item}</Text>

              </TouchableOpacity>
              
            );
          })}
        </View>
      ) : (
        <></>
      )}
      
    </View>
  );
};

export default DropDownComp;

const styles = StyleSheet.create({
  dropStyle: {
    marginTop: 2,
    padding: 14,
    borderRadius: 4,
    borderColor: colorsPath.black,
    backgroundColor: colorsPath.white,
    borderWidth: 0.5,
  },
  dropDown: {
    borderColor: colorsPath.black,
    borderWidth: 0.5,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
