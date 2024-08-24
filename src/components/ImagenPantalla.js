import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function ImagenPantalla({ source, style }) {
    return (
        <View style={[styles.container, style]}>
            <Image source={source} style={[styles.image, style]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
    },
});