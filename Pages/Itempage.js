/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

import {
    StyleSheet,
    Text,
    Image,
    StatusBar,
    useColorScheme,
    ScrollView,
    ImageBackground,
    View,
} from 'react-native';

import React from 'react';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import Minecraft from '../assets/jbareham_191158_ply0958_decade_minecraft.jpg';
import StoneAxe from '../assets/StoneaxeMC.png';
import * as Searchpage from './Searchpage';

export default function Itempage({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const name = Item.params;
    return (
        <>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View>
                    <ImageBackground source={Minecraft} resizeMode="cover" style={styles.image}>
                        <Text style={styles.itemName}>{name}</Text>
                        <Text style={styles.itemPic}>
                            <Image Source={StoneAxe} resizeMode="cover" style={styles.image} />
                        </Text>
                        <Text style={styles.itemBodyContainer}>
                            <Text>The body of this page will display info about the selected item</Text>
                        </Text>
                    </ImageBackground>
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    itemName: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        opacity: 0.5,
        borderRadius: 25,
        height: 56,
        width: 500,
        marginLeft: 50,
        marginTop: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
    },
    itemBodyContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        opacity: 0.5,
        borderRadius: 25,
        height: 739.5,
        width: 550,
        marginLeft: 25,
        marginTop: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
    },
    itemPic: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        opacity: 0.5,
        borderRadius: 25,
        height: 56,
        width: 500,
        marginLeft: 50,
        marginTop: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
    },
    textStyle: {
        textAlign: 'center',
        color: 'white',
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
});
