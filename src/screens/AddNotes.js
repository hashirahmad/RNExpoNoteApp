import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, TextInput, FAB } from 'react-native-paper'
import PropsTypes from 'prop-types'

import Header from '../components/Header'

function AddNote({ navigation }) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteValue, setNoteValue] = useState('')

    function onSaveNote() {
        navigation.state.params.addNote({ noteTitle, noteValue })
        navigation.goBack()
    }
    return (
        <>
            <Header titleText="Add a new note" />
            <IconButton
                icon="close"
                size={25}
                color="red"
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
            />
            <View style={styles.container}>
                <TextInput
                    label="Add Title Here"
                    value={noteTitle}
                    mode="outlined"
                    onChangeText={setNoteTitle}
                    style={styles.title}
                />
                <TextInput
                    label="Add Note Here"
                    value={noteValue}
                    onChangeText={setNoteValue}
                    mode="flat"
                    multiline
                    style={styles.text}
                    scrollEnabled
                    returnKeyType="done"
                    blurOnSubmit
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={noteTitle === ''}
                    onPress={() => onSaveNote()}
                />
            </View>
        </>
    )
}

AddNote.propTypes = {
    navigation: PropsTypes.object.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    iconButton: {
        backgroundColor: 'rgba(46, 113, 102, 0.8)',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10,
        zIndex: 12
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    text: {
        height: 300,
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0
    }
})

export default AddNote
