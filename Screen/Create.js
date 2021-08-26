import React, { useState } from 'react'
import { Alert, FlatList, Settings, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function Create() {
    const [title, setTitle] = useState("")
    const [body, setbody] = useState("")
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
                onPress={() => console.log("Button Pressed")}
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