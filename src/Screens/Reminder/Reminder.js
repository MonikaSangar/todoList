//import liraries
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from "react-native-modal";
import ButtonComp from '../../Components/ButtonComp';
import colorsPath from '../../constants/colorsPath';
import imagesPath from '../../constants/imagesPath';
import styles from './styles';

import NavigationString from '../../constants/NavigationString';
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import { ADD_NOTE } from '../../redux/action';






// create a component
const Reminder = ({ navigation,route}) => {
    let data = useSelector(myData=>myData.add)
    console.log("initial data in reminder",data)



    const[title,settitle]=useState('')
    const[notes,setnotes]=useState('')
   
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    
    const [isModalVisible, setModalVisible] = useState(false);
    const [show, setShow] = useState(false)

    const [time,setTime]=useState(false)
    

    const toggleModal = () => {

        setModalVisible(!isModalVisible);
    };
    const toggleModal1 = () => {

        setModalVisible(!isModalVisible);
        store.dispatch(ADD_NOTE({title,notes}))
        navigation.navigate(NavigationString.HOME)
    };
    const displayTimepicker = () => {
        showMode('time');
     };
     const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setDate(currentDate);
     };
     const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
     };

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => navigation.popToTop()}>
                    <Image style={styles.backStyle}
                        source={imagesPath.icBackward} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>New Reminder</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={{ color: colorsPath.black, padding: 24 }}
                   value={title}
                   placeholder="Title"
                   onChangeText={(val)=>{settitle(val)}}
                />
                <View style={styles.lineStyle} />
                <TextInput style={styles.txtContainer}
                value={notes}
                    multiline={true}
                    placeholder="Notes"
                    onChangeText={(val)=>{setnotes(val)}}
                />
            </View>
            <View style={styles.details}>
                <Text style={{ color: colorsPath.txtColor }}>Details</Text>
                <TouchableOpacity onPress={()=>navigation.navigate(NavigationString.HOME)}>
                <Image style={styles.imgStyle}
                    source={imagesPath.icBackward} />
                    </TouchableOpacity>
            </View>

            <View style={styles.calenStyle}>

                <View style={styles.calenView}>
                    <TouchableOpacity onPress={() => setOpen(true)} >
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode='date'
                         
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                        <Image source={imagesPath.icCalender} /></TouchableOpacity>
                    <Text>    Due Date </Text>

                </View>
                <View style={styles.alarmStyle}>
                    
                <TouchableOpacity onPress={() => setTime(true)} >
                        <DatePicker
                            modal
                            open={time}
                            date={date}
                            mode='time'
                            onConfirm={(date) => {
                                setTime(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setTime(false)
                            }}
                        />
                        <Image source={imagesPath.icAlarm} />
                    </TouchableOpacity>
                    <Text>  Time</Text>
                </View>
            </View>
            <View style={styles.lastView}>
                <ButtonComp onPress={toggleModal}
                    text='Add' />
            </View>
            <Modal 
            isVisible={isModalVisible}
            >
                <View style={styles.modalStyle}>
                    <TouchableOpacity onPress={toggleModal1}
                        style={styles.viewStyle}>
                        <View style={styles.tickStyle}>
                            <View style={styles.tickViewStyle}>
                                <Image source={imagesPath.icTick} />
                                <Text style={styles.txtStyle}> Your reminder has {'\n'} been added</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>


        </View>
    );
};
export default Reminder;
