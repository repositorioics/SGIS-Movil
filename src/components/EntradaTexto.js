import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@context/ThemeContext';
import { TIPOGRAFIAS } from '@constants/tipografias';

export default function EntradaTexto({
    placeholder,
    secureTextEntry,
    estilo,
    error,
    ...props
}) {
    const { theme } = useTheme();

    return (
        <View>
            <TextInput
                style={[styles.entrada, { borderColor: theme.colors.textGray, color: theme.colors.text }, estilo]}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={theme.colors.textGray || 'rgba(0, 0, 0, 0.5)'}
                {...props}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    entrada: {
        height: 50,
        borderWidth: 0.7,
        borderColor:'#e8ebe9',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontFamily: TIPOGRAFIAS.regular,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
        fontFamily: TIPOGRAFIAS.regular,
    },
});