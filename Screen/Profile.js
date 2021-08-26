import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Profile extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}></View>
                    <Image style={styles.avatar} source={{ uri: 'http://getplaced.pythonanywhere.com/media/images/profile/Get_placed_logo_RcjthfI.jpeg' }} />
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>Get Placed</Text>
                            <Text style={styles.info}>Let us give the best</Text>
                            <Text style={styles.description}>Hello and welcome to Get Placed! We want to connect with people and connect those people with information. At Get Placed, we help you to find the best courses, certifications and tutorials online.
                                Get Placed provides information of upcoming off-campus hiring drives, Internships <Text style={{ color: "#00BFFF" }} onPress={() => Linking.openURL('http://getplaced.pythonanywhere.com/Terms-and-condition/')}>read more</Text> </Text>

                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#002223",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#808080",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});