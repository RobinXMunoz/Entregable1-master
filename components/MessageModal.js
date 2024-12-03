// components/MessageModal.js
import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

const MessageModal = ({ visible, message, onClose }) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay} onTouchEnd={onClose}>
                <View style={styles.modalContent}>
                    <Text>{message}</Text>
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Cerrar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#900C3F',//vino tinto
    },
    modalContent: {
        backgroundColor: '#900C3F',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#6200EE',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
    },
});

export default MessageModal;

