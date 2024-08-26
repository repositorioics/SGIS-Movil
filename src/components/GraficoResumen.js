import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, Text, Dimensions } from 'react-native';
import { useTheme } from '@context/ThemeContext';

export default function GraficoResumen({ data }) {
  const { theme } = useTheme();

  return (
    <View style={{
      backgroundColor: theme.colors.card,
      margin: 8,
      borderRadius: 10,
      padding: 10,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    }}>
      <Text style={{
        fontSize: 18,
        color: theme.colors.text,
        marginLeft: 10,
        fontWeight: 'bold',
        marginVertical: 8,
      }}>
        Resumen de Órdenes
      </Text>
      <LineChart
        data={{
          labels: data.map(item => item.month),
          datasets: [
            {
              data: data.map(item => item.approved),
              color: () => theme.colors.primary,
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 40}
        height={220}
        yAxisSuffix="K"
        chartConfig={{
          backgroundColor: theme.colors.card,
          backgroundGradientFrom: theme.colors.card,
          backgroundGradientTo: theme.colors.card,
          decimalPlaces: 0,
          color: (opacity = 1) => theme.colors.primary,
          labelColor: (opacity = 1) => theme.colors.text,
          style: {
            borderRadius: 10,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: theme.colors.background,
          },
          propsForBackgroundLines: {
            stroke: theme.colors.border,
          },
          fillShadowGradient: theme.colors.primary,
          fillShadowGradientOpacity: 0.2,
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 10,
        }}
      />
    </View>
  );
}