import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, Title } from 'react-native-paper'
import PropsTypes from 'prop-types'

function Header({ titleText }) {
    return (
        <Appbar.Header style={styles.headerContainer}>
            <View style={styles.container}>
                <Title style={styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    )
}

Header.propTypes = {
    titleText: PropsTypes.string.isRequired
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#60DBC5'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#2E7166'
    }
})

export default Header
