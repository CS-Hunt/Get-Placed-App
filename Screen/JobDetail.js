import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Linking, Button, TouchableHighlight } from 'react-native'
import { Title, Avatar, Card, Paragraph } from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';


function JobDetail(props) {

    const { id, title, snippet, author, Company_image, Job_Description, apply_link, job_type, post_date } = props.route.params.data;
    const { width } = useWindowDimensions();
    var date = new Date(`${post_date}`)

    const source = {
        html: `
      ${Job_Description}`
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
                    <Title style={{ fontSize: 31, marginLeft: 20, fontWeight: 'bold' }}>{title}<Text style={{ fontSize: 14, fontWeight: 'normal', color: '#808080' }}>   -   ( {date.getDate()}-{date.getMonth()}-{date.getFullYear()})</Text></Title>

                </View>


                <View>
                    <Image
                        source={{ uri: `${Company_image}` }}
                        style={{ width: 300, height: 230, marginLeft: 30, }}
                    />
                </View>
                <View>
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
})

export default JobDetail
