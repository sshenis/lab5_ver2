import React from 'react';
import {View, Text, Image} from 'react-native'
import styles from '../styles/StartStyles';

function AppStart() {
    return (

        <View style={styles.app}>
            <Image style={styles.appImg} source={require('../img/forAbhi.jpg')}/>
            <Text style={styles.appText}>Part 2</Text>
        </View>
    )
}

export default AppStart;