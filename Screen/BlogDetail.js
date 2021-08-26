import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Linking, Button, TouchableHighlight } from 'react-native'
import { Title, Avatar, Card, Paragraph } from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';


function JobDetail(props) {

    const { id, title, snippet, author, body, post_date } = props.route.params.data;
    const { width } = useWindowDimensions();
    var date = new Date(`${post_date}`)

    const source = {
        html: `
      ${body}`
    };
    const tagsStyles = {
        body: {
            marginLeft: 20,
            marginRight: 20,
        },

    };

    return (
        <View>
            <ScrollView style={styles.Top}>
                <View style={styles.headerStyle}>
                    <Title style={{ fontSize: 31, marginLeft: 10, fontWeight: 'bold' }}>{title}<Text style={{ fontSize: 14, fontWeight: 'normal', color: '#808080' }}>  -  ( {date.getDate()}-{date.getMonth()}-{date.getFullYear()})</Text></Title>
                </View>
                <View>
                    <RenderHtml
                        tagsStyles={tagsStyles}
                        contentWidth={width}
                        source={source}
                    />
                </View>

            </ScrollView>
        </View >

    )
}

const styles = StyleSheet.create({
    Top: {
        marginTop: 40,
        position: 'relative',
    },
    headerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },

})

export default JobDetail
