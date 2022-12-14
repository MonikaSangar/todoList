import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

import ButtonComp from '../../Components/ButtonComp';

import colorsPath from '../../constants/colorsPath';
import imagesPath from '../../constants/imagesPath';

import styles from './styles';

// create a component
const Home = ({ navigation, route }) => {
    let todoData = useSelector(myData => myData.add)

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key')
          console.log("data in get item function",jsonValue)
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
         console.log("error in home screen ", jsonValue)
        }
      }
      
      useEffect(()=>{

      },[])
    console.log("this is data in Home ", todoData)
    const [focused, setFocused] = useState('')
    const [data, setData] = useState([
        {
            name: 'Lorem Ipsum',
            time: '3:00 PM-4:00 PM'


        },
        {
            name: 'Lorem Ipsum',
            time: '3:00 PM-4:00 PM'

        },
        {
            name: 'Lorem Ipsum',
            time: '3:00 PM-4:00 PM'

        }
    ])

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.flatStyle}>
                <Text style={{ color: colorsPath.purple, fontWeight: "bold" }}>{item?.title}</Text>
                <Text style={{ color: colorsPath.purple, fontWeight: "bold" }}>{item?.notes}</Text>
                <View style={{ backgroundColor: '#FFB266', padding: 4, borderRadius: 4 }}>
                    <Text>{item?.time}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txtStyle}>Home Lorem!</Text>
            <Text style={styles.txtStyl}>Let's start with todays tasks.</Text>

            <View style={styles.boxStyle}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        color: 'dark-blue',
                        marginTop: 14,
                        fontWeight: '400'
                    }}>Daily Tasks </Text>
                    <View style={styles.imgStyle}>
                        <Image source={imagesPath.icgreenTick} />
                        <Text style={styles.fiveStyle}> 5/10</Text>
                        <Text style={styles.taskStyle}> Tasks completed</Text>
                    </View>
                    <ButtonComp
                        text='View Taks'
                        btnStyle={styles.btnStyle} />
                </View>



                <View style={styles.spinStyle}>
                    <Image source={imagesPath.icSpinn} />
                </View>

            </View>
            <View style={styles.dailyStyle}
            >

                <Text style={styles.dailyTask}>Daily</Text>
                <Text>Monthly</Text>
                <Text>Weekly</Text>
                <Text>      </Text>

            </View>

            <View style={styles.reminderText}>
                <Text style={styles.reText}>Reminders</Text>
                <Text style={{ color: colorsPath.purple }}>See all</Text>
            </View>

            <FlatList
                renderItem={renderItem}
                data={todoData}
            />


        </View>
    );
};


//make this component available to the app
export default Home;

// https://projects.invisionapp.com/d/#/projects/prototypes/22161075