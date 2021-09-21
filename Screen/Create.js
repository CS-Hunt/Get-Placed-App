import React, { useState } from 'react'
import { Alert, FlatList, Settings, StyleSheet, Text, View, Linking } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function Create() {
    const [title, setTitle] = useState("")
    const [body, setbody] = useState("")

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Alert",
            "Add Blog through our website",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => Linking.openURL('http://getplaced.pythonanywhere.com/Add_Blog_Post/') }
            ]
        );

    return (
        <View>
            <TextInput style={styles.inputStyle}
                label="Title"
                value={title}
                mode="outlined"
                onChangeText={text => setTitle(text)}
                outlineColor="#002223"
            />
            <TextInput style={{ marginTop: 10, padding: 8, }}
                label="Body"
                value={body}
                mode="outlined"
                onChangeText={text => setbody(text)}
            />
            <Button style={{ marginTop: 30, width: 180, marginLeft: 100, }}
                icon="pencil"
                mode="contained"
                color="#002223"
                onPress={createTwoButtonAlert}
            >Post Blog</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding: 8,
        marginTop: 30,
    }
})