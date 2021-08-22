import React, { useState, useEffect } from 'react'
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native'

import { Card, FAB } from 'react-native-paper'



export default function Home(props) {
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)

    const loadData = () => {
        fetch('https://getplaced.pythonanywhere.com/api/resources/', {
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
        props.navigation.navigate("ResourceDetail", { data: data })
    }

    const renderData = (item) => {
        return (
            <Card style={styles.cardStyle} onPress={() => clickedItem(item)}>
                <Text style={{ fontSize: 25 }}>{item.title}</Text>
                {/* <Text style={{ fontSize: 17 }}>{item.docs}</Text> */}
            </Card>
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
