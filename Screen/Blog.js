import React, { useState, useEffect } from 'react'
import { Alert, Button, FlatList, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'

import { Card, FAB } from 'react-native-paper'



export default function JobList(props) {
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)

    const loadData = () => {
        fetch('https://getplaced.pythonanywhere.com/api/blog/', {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(data => {
                setdata(data)
                setLoading(false)
            })
            .catch(error => Alert.alert("error", error))
    }

    useEffect(() => {
        loadData();
    }, [])

    const clickedItem = (data) => {
        props.navigation.navigate("Blog-Detail", { data: data })
    }

    const renderData = (item) => {
        var date = new Date(`${item.post_date}`)
        return (
            <>
                <Card style={styles.cardStyle} onPress={() => clickedItem(item)}>
                    <View style={{ flex: 1 }}>
                        <Text
                            onPress={() => clickedItem(item)}
                            style={{ color: "#000", fontSize: 16, marginLeft: 15, }}>
                            {item.title}
                            <Text style={{ fontSize: 13, color: '#808080' }}>    -   ({date.getDate()}-{date.getMonth()}-{date.getFullYear()})</Text>
                        </Text>
                        <Text
                            onPress={() => clickedItem(item)}
                            style={{ color: "#808080", fontSize: 12, marginLeft: 17, }}>
                            {item.snippet}
                        </Text>

                    </View>
                </Card>
            </>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderData(item)
                }}
                onRefresh={() => loadData()}
                refreshing={loading}
                keyExtractor={item => `${item.id}`}
            />
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"

                onPress={() => props.navigation.navigate("Create")}
            />
        </View>


    )
}


const styles = StyleSheet.create({
    cardStyle: {
        padding: 10,
        margin: 10,

    },
    fab: {
        position: 'absolute',
        backgroundColor: "#002223",
        margin: 46,
        right: -30,
        bottom: 0,
    }
})
