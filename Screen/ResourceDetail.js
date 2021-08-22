import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, useWindowDimensions, Linking, Button } from 'react-native'
import { Title, Avatar, Card, Paragraph } from 'react-native-paper';

function ResourceDetail(props) {

    const width = (useWindowDimensions().width);
    const height = width * 0.6;
    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
            setActive(slide);
        }
    }

    const { id, title, docs, author, course1_title, course1_Img, course1_link, course2_title, course2_Img, course2_link, course3_title, course3_Img, course3_link, course4_title, course4_Img, course4_link, course5_title, course5_Img, course5_link,
        channel1_title, channel1_Img, channel1_link, channel2_title, channel2_Img, channel2_link, channel3_title, channel3_Img, channel3_link, channel4_title, channel4_Img, channel4_link, channel5_title, channel5_Img, channel5_link,
        Website1_title, Website1_Img, Website1_link, Website2_title, Website2_Img, Website2_link, Website3_title, Website3_Img, Website3_link, Website4_title, Website4_Img, Website4_link, Website5_title, Website5_Img, Website5_link } = props.route.params.data;

    const course = [
        {
            image: `${course1_Img}`,
            title: `${course1_title}`,
            link: `${course1_link}`,
        },
        {
            image: `${course2_Img}`,
            title: `${course2_title}`,
            link: `${course2_link}`,
        },
        {
            image: `${course3_Img}`,
            title: `${course3_title}`,
            link: `${course3_link}`,
        },
        {
            image: `${course4_Img}`,
            title: `${course4_title}`,
            link: `${course4_link}`,
        },
        {
            image: `${course5_Img}`,
            title: `${course5_title}`,
            link: `${course5_link}`,
        },
    ];

    return (
        <View style={styles.Top}>
            <ScrollView>
                <View style={styles.headerStyle}>
                    <Title style={{ fontSize: 31, fontFamily: 'sans-serif', fontWeight: 'bold' }}>{title}</Title>
                </View>

                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.5,
                        width: "100%",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
                <View style={[{ width: "90%", margin: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }]}>
                    <Button
                        title="docs"
                        color="#002223"
                        style={[{ borderRadius: 10, }]}
                        onPress={() => Linking.openURL(docs)}
                    />
                </View>
                <Title>Best Courses</Title>
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.5,
                        width: "100%",
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}
                />

                <View>
                    <ScrollView
                        pagingEnabled
                        horizontal
                        onScroll={change}
                        showHorizontalScrollIndicator={false}
                    // style={{ width, height }}
                    >
                        {course.map((image, index) => (

                            <View>
                                <View>
                                    <Image
                                        key={index}
                                        source={{ uri: image.image }}
                                        style={{ width, height, resizeMode: 'cover' }}
                                    />
                                </View>
                                <View style={styles.backdropView}>
                                    <Text style={styles.headline} onPress={() => Linking.openURL(image.link)}>{image.title}</Text>
                                </View>
                            </View>


                        ))}

                    </ScrollView>

                    <View style={styles.pagination}>
                        {course.map((i, k) => (
                            <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
                                •
                            </Text>
                        ))}
                    </View>




                </View>
                {/* <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" />
                    <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos"1000' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card> */}
            </ScrollView>
        </View >


    )
}

const styles = StyleSheet.create({
    Top: {
        marginTop: 40,
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
    dot: {
        color: '#888',
        fontSize: 50,
    },
    activeDot: {
        color: '#FFF',
        fontSize: 50,
    },
    // imageStyle: {
    //     backgroundColor: '#940',
    // },
    resourceTitle: {
        position: 'absolute',
        top: 120,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
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

export default ResourceDetail
