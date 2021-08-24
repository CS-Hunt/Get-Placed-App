import React, { useState, useEffect } from 'react'
import { Alert, Button, FlatList, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'

import { Card, FAB } from 'react-native-paper'



export default function Blog(props) {
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)

    const loadData = () => {
        fetch('https://getplaced.pythonanywhere.com/api/job-post/', {
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
        props.navigation.navigate("Job-Detail", { data: data })
    }

    const renderData = (item) => {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "#eee", overflow: "hidden", flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TouchableHighlight onPress={() => clickedItem(item)}>
                            <Image
                                source={{ uri: `${item.Company_image}` }}
                                style={{
                                    height: 135,
                                    width: 155,
                                    margin: 7,

                                }}
                            />
                        </TouchableHighlight>
                        <View style={{ width: 155, marginTop: 10, }}>

                            <Text
                                onPress={() => clickedItem(item)}
                                style={{ color: "#000", paddingTop: 5, fontSize: 16, }}>
                                {item.title}
                            </Text>
                        </View>
                    </View>
                </View>
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
            {/* <FAB
                style={styles.fab}
                small={false}
                icon="plus"

                onPress={() => props.navigation.navigate("Create")}
            /> */}
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
