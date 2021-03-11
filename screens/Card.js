import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

const { width, height } = Dimensions.get('window');
const cardHeight = 0.22 * height;
const leftSquareInsideCardLength = 0.16 * height;

const Card = (props) => {
    const { data } = props;
    const [isFav, setIsFav] = useState(data.isFav);
    const redColor = '#ea4335'
    const blackColor = '#000';
    const imageSize = 0.14 * height;
    const addToFavText = 'Add to Favorites';
    const downloadBiodataText = 'Download Biodata';
    const removeFromFavText = 'Remove from Favorites';
    return (
        <View style={styles.card}>
            <View style={styles.cardLeftDiv}>
                <Ionicons name={'heart'} color={redColor} size={18} style={isFav ? styles.favIcon : styles.displayNone} />
                <TouchableOpacity activeOpacity={0.8} onPress={data.onImgClickCallback}>
                    <Avatar.Image size={imageSize} source={{ uri: data.imageUrl }} />
                </TouchableOpacity>
            </View>
            <View style={styles.cardRightDiv}>
                <View style={styles.cardRightDivContainer}>
                    <View style={styles.cardRightDivContainerView}>
                        <View style={[styles.cardLine, { backgroundColor: data.color }]}></View>
                        <View>
                            <Text style={styles.cardText1}>{data.text1}</Text>
                            <Text style={styles.cardText2}>{data.text2}</Text>
                        </View>
                        <View style={styles.cardEllipses}>
                            <Menu>
                                <MenuTrigger>
                                    <Ionicons name={'md-ellipsis-vertical'} color={blackColor} size={14} />
                                </MenuTrigger>
                                <MenuOptions >
                                    <MenuOption style={styles.cardMenuOption} onSelect={() => { setIsFav(!isFav); data.onFavClickCallback(); }} text={isFav ? removeFromFavText : addToFavText} />
                                    <MenuOption style={styles.cardMenuOption} onSelect={() => data.onBiodataDownloadClickCallback()} text={downloadBiodataText} />
                                </MenuOptions>
                            </Menu>
                        </View>
                    </View>
                    {('' === data.text3 || null === data.text3) ? null : (
                        <View style={styles.cardRightDivContainerView}>
                            <View style={styles.cardIcon}>
                                <Ionicons name={'school'} color={blackColor} size={14} />
                            </View>
                            <Text style={styles.cardText3}>{data.text3}</Text>
                        </View>
                    )}
                    {('' === data.text4 || null === data.text4) ? null : (
                        <View style={styles.cardRightDivContainerView}>
                            <View style={styles.cardIcon}>
                                <Ionicons name={'ios-layers'} color={blackColor} size={14} />
                            </View>
                            <Text style={styles.cardText4}>{data.text4}</Text>
                        </View>
                    )}
                    {('' === data.text5 || null === data.text5) ? null : (
                        <View style={styles.cardRightDivContainerView}>
                            <View style={styles.cardIcon}>
                                <Ionicons name={'md-business'} color={blackColor} size={14} />
                            </View>
                            <Text style={styles.cardText5}>{data.text5}</Text>
                        </View>
                    )}
                    <View style={styles.cardRightDivContainerReverseView}>
                        <Text style={styles.cardText6}>{data.text6}</Text>
                        <View style={styles.cardIcon}>
                            <Ionicons name={'location-sharp'} color={blackColor} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        height: cardHeight,
        flexDirection: 'row',
        marginTop: 5,
    },
    cardLeftDiv: {
        flex: leftSquareInsideCardLength,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: leftSquareInsideCardLength,
        height: cardHeight,
        backgroundColor: '#fff'
    },
    cardRightDiv: {
        backgroundColor: '#f3f3f3',
        flex: width - leftSquareInsideCardLength,
    },
    cardRightDivContainer: {
        flex: 1,
        padding: 12,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardRightDivContainerView: {
        flexDirection: 'row'
    },
    cardRightDivContainerReverseView: {
        flexDirection: 'row-reverse'
    },
    cardLine: {
        width: 3,
        marginEnd: 7
    },
    cardIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText1: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    cardText2: {
        color: '#848486'
    },
    cardText3: {
        paddingStart: 10,
    },
    cardText4: {
        paddingStart: 10,
    },
    cardText5: {
        paddingStart: 10,
    },
    cardText6: {
        paddingStart: 2
    },
    cardEllipses: {
        alignItems: 'flex-end',
        flex: 1
    },
    cardMenuOption: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    favIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 5
    },
    displayNone: {
        display: 'none'
    }
});
