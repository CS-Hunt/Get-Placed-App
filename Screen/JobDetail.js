import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Linking, Button, TouchableHighlight } from 'react-native'
import { Title, Avatar, Card, Paragraph } from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';


function JobDetail(props) {

    const { id, title, snippet, author, Company_image, Job_Description, apply_link, job_type } = props.route.params.data;
    const { width } = useWindowDimensions();

    const source = {
        html: `
      ${Job_Description}`
    };
    const tagsStyles = {
        body: {
            marginLeft: 20,
        },

    };

    return (
        <View>
            <ScrollView style={styles.Top}>
                <View style={styles.headerStyle}>
                    <Title style={{ fontSize: 31, marginLeft: 20, fontWeight: 'bold' }}>{title}</Title>
                </View>

                <View>
                    <Image
                        source={{ uri: `${Company_image}` }}
                        style={{ width: 300, height: 230, marginLeft: 30, }}
                    />
                </View>
                <View>
                    {/* <Text style={{ marginLeft: 20, }}>
                        {Job_Description}
                    </Text> */}
                    <RenderHtml
                        tagsStyles={tagsStyles}
                        contentWidth={width}
                        source={source}
                    />
                </View>
                <View style={[{ width: "90%", marginTop: 5, marginBottom: 25, borderRadius: 10, alignItems: 'center' }]}>
                    <Button
                        title="Apply"
                        color="#002223"
                        style={[{ borderRadius: 100, }]}
                        onPress={() => Linking.openURL(apply_link)}
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
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 29,
        alignSelf: 'center',
    },
    pagination1: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 29,
        alignSelf: 'center',
    },
    pagination2: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 29,
        alignSelf: 'center',
    },
    dot: {
        color: '#888',
        fontSize: 50,
    },
    activeDot: {
        color: '#FFF',
        fontSize: 50,
    },

    backdrop: {
        paddingTop: 60,
        width: 320,
        height: 120
    },
    backdropView: {
        height: 120,
        width: 320,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headline: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#000'
    }
})

export default JobDetail
