import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DropDownComp from '../../Components/DropDownComp';
import ButtonComp from '../../Components/ButtonComp';
import NavigationString from '../../constants/NavigationString';

const MyProfile = props => {
  const {route, navigation} = props;
  const [selectedName, setSelectedName] = useState('Select Name');
  const [lastName, setLastName] = useState('Select Last Name');
  const [city, setCity] = useState('Select City');
  const [state, setState] = useState('Select State');

  const [data, setData] = useState([
    {
      fname: 'Monika',
      lname: 'Sangar',
      fullname: 'Monika Sangar',
      city: 'Baddi',
      state: 'Himachal Pradesh',
      Country: 'India',
    },
    {
      fname: 'Ritika',
      lname: 'Saini',
      fullname: 'Ritika Saini',
      city: 'Kurukshetra',
      state: 'Haryana',
      Country: 'India',
    },
    {
      fname: 'Pallvi',
      lname: 'Sharma',
      fullname: 'Pallvi Sharma',
      city: 'Chamba',
      state: 'Himachal Pradesh',
      Country: 'India',
    },
  ]);
  const[nameData,setNameData] = useState(["monika","palvi","ritika"])
  const[lastNameData , setLastNameData] = useState(["sangar","sharma","Saini"])
  const[cityData, setCityData] = useState(["Baddi","Kurukshetra","Chamba","Nalagarh","Ambala"])
  const[stateData,setStateData] = useState(["Haryana","Punjab","Himachal","U.P"])

  const _onPressName = item => {
    setSelectedName(item);
    console.log('item', item);
  };
  return (
    <View style={{paddingHorizontal: 16}}>
         <View style={{height: 80, zIndex: 4}}>
        <DropDownComp
          data={nameData}
          selectedValue={selectedName}
          onPressValue={value => _onPressName(value)}
        />
      </View>
      <View style={{height: 80, zIndex: 3}}>
        <DropDownComp
          data={lastNameData}
          selectedValue={lastName}
          onPressValue={(value) => setLastName(value)}
        />
      </View>
      <View style={{height: 80, zIndex: 2}}>
        <DropDownComp
          data={cityData}
          selectedValue={city}
          onPressValue={(value)=>setCity(value)}
        />
      </View>
      <View style={{height: 80, zIndex: 1}}>
        <DropDownComp
          data={stateData}
          selectedValue={state}
          onPressValue={(value)=>setState(value)}
        />
      </View>
      <ButtonComp
        onPress={() => {
          navigation.navigate(NavigationString.CALENDER, {name: selectedName,city:city,state:state,lastName:lastName});
        }}
        text="Submit"
      />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({});
