// //import liraries
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

// // create a component
// const Profile = () => {
//     const[email,setEmail]=useState()
//     const[password,setPassword]=useState()

//     return (
//    <View style={styles.container}>
//       <Text style={{marginBottom:14}}>Name</Text>
//       <TextInput
//       placeholder='Entr the value'
//       value={email}
//       onChangeText={(e)=>setEmail(e)}/>

// <Text style={{marginTop:14}}>Password</Text>
//       <TextInput
//       placeholder='Entr the value'
//       value={password}
//       onChangeText={(e)=>setPassword(e)}
//       secureTextEntry={true}/>
//       <Button title='click'></Button>

// </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,

//         margin:24
//     },
// });

// //make this component available to the app
// export default Profile;

//import liraries
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image ,TouchableOpacity} from 'react-native';
// import DropDownComp from '../../Components/DropDownComp';

// // create a component
// const Form=[
//     {
//       fname: 'Monika',
//       lname: 'Sangar',
//       fullname: 'Monika Sangar',
//       city: 'Baddi',
//       state: 'Himachal Pradesh',
//       Country: 'India',
//     },
//     {
//       fname: 'Ritika',
//       lname: 'Saini',
//       fullname: 'Ritika Saini',
//       city: 'Kurukshetra',
//       state: 'Haryana',
//       Country: 'India',
//     },
//     {
//       fname: 'Pallvi',
//       lname: 'Sharma',
//       fullname: 'Pallvi Kumari Sharma',
//       city: 'Chamba',
//       state: 'Himachal Pradesh',
//       Country: 'India',
//     },
//   ];

// const App = ({navigation}) => {
//     const [select,setSelect]=useState(null)
//     const onSelect=(item)=>{
//         setSelect(item)

//     }
//     return (
//         <View style={styles.container}>
//             <DropDownComp
//             text='Country'
//             value={select}
//             data={Form}
//             onSelect={onSelect}
//             />

//             <DropDownComp
//             value={select}
//             data={Form}
//             onSelect={onSelect}
//             text='Select the country'

//             />

//             </View>

//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems:'center',

//         backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default App;

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import ButtonComp from '../../Components/ButtonComp';
import NavigationString from '../../constants/NavigationString';

const data = [
  {label: 'Monika', value: ''},
  {label: 'Amandeep', value: ''},
  {label: 'Mukesh', value: ''},
  {label: 'Shivani', value: ''},
];

const LastNAme = [
  {label: 'Sangar', value: ''},
  {label: 'Choudhary', value: ''},
  {label: 'Sharma', value: ''},
  {label: 'Mehta', value: ''},
];
const City = [
  {label: 'Baddi', value: ''},
  {label: 'Pinjore', value: ''},
  {label: 'Shimla', value: ''},
  {label: 'kalka', value: ''},
];

const State = [
  {label: 'Himanchal Pardesh', value: ''},
  {label: 'Haryana', value: ''},
  {label: 'Uttar-Pardesh', value: ''},
  {label: 'Punjab', value: ''},
];

const App = ({navigation, route}) => {
//   console.log('navigation', route?.params);
  const [name, setName] = useState();
  const [lname, setLName] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const Submit = () => {
    console.log("name",name)
    navigation.navigate(NavigationString.CALENDER, {name:data?.name});
  };

  return (
    <View>
      <Text style={{marginTop: 48, fontSize: 28, marginLeft: 14}}>
        Enter Your Details
      </Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Enter your FName"
        value={name}
        onChange={item => {
          setName(item.value);
        }}
      />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={LastNAme}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Enter your LName"
        searchPlaceholder="Search..."
        value={lname}
        onChange={item => {
          setLName(item.value);
        }}
      />

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={City}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Enter your City"
        value={state}
        onChange={item => {
          setState(item.value);
        }}
      />

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={State}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Enter your State"
        value={city}
        onChange={item => {
          setCity(item.value);
        }}
      />
      <View style={{margin: 16}}>
        <ButtonComp text={'Submit'} onPress={() => Submit()} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
