//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import colorsPath from '../../constants/colorsPath';
import imagesPath from '../../constants/imagesPath';
import styles from './styles';
import Modal from "react-native-modal";


// create a component
const Reminder = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image style={styles.backStyle}
                    source={imagesPath.icBackward} />
                <Text style={styles.textStyle}>New Reminder</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={{ color: colorsPath.black, padding: 24 }}
                    placeholder="Title"
                />
                <View style={styles.lineStyle} />
                <TextInput style={styles.txtContainer}
                    multiline={true}
                    placeholder="Notes"
                />
            </View>
            <View style={styles.details}>
                <Text style={{ color: colorsPath.txtColor }}>Details</Text>
                <Image style={styles.imgStyle}
                    source={imagesPath.icBackward} />
            </View>

            <View style={styles.calenStyle}>

                <View style={styles.calenView}>
                    <Image source={imagesPath.icCalender} />
                    <Text>Monika</Text>
                </View>
                <View style={styles.alarmStyle}>
                    <Image source={imagesPath.icAlarm} />
                    <Text>Time</Text>
                </View>
            </View>
            <View style={styles.lastView}>
                <ButtonComp onPress={toggleModal}
                    text='Add' />
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={toggleModal}
                    style={{ backgroundColor: colorsPath.purple, height: 120, width: 120 }}>
                    <View style={{ backgroundColor: colorsPath.purple, height: 180, width: 300, borderRadius: 8, alignSelf: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 14 }}>
                            <Image source={imagesPath.icTick} />
                            <Text style={{ textAlign: 'center', color: colorsPath.white, fontWeight: '700', lineHeight: 22 }}> Your reminder has {'\n'} been added</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
            </Modal>


        </View>
    );
};
export default Reminder;
