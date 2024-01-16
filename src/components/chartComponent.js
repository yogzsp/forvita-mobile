import { LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    StackedBarChart
} from 'react-native-chart-kit';
import color from '../constants/color';
import { View, StyleSheet,Text } from 'react-native';

const LineChartComp = ({data,judul})=>{
    return (
        <View style={styles.canvasChart}>
            <View style={styles.titleChart}>
                <Text>{judul}</Text>
            </View>
            <View style={styles.containerChart}>
                <LineChart
                    data={data}
                    width={300}
                    height={200}
                    chartConfig={{
                    backgroundGradientFromOpacity: 0, // Nilai transparansi
                    backgroundGradientToOpacity: 0,
                    decimalPlaces: 2,
                    color: (opacity = 1) => color.primary,
                    style: {
                        borderRadius: 16,
                    },
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    }}
                />
            </View>
        </View>
    )
}

const BarChartComp = ({data,judul})=>{
    return (
        <View style={styles.canvasChart}>
            <View style={styles.titleChart}>
                <Text>{judul}</Text>
            </View>
            <View style={styles.containerChart}>
                <BarChart
                    data={data}
                    width={300}
                    height={200}
                    chartConfig={{
                    backgroundGradientFromOpacity: 0, // Nilai transparansi
                    backgroundGradientToOpacity: 0,
                    decimalPlaces: 2,
                    color: (opacity = 1) => color.primary,
                    style: {
                        borderRadius: 16,
                    },
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    }}
                />
            </View>
        </View>
    )
}

const PieChartComp = ({data,judul})=>{
    if (!data || !data.length) {
        return null;
      }
    return (
        <View style={styles.canvasChart}>
            <View style={styles.titleChart}>
                <Text>{judul}</Text>
            </View>
            <View style={styles.containerChart}>
            <PieChart
        data={data}
        width={300}
        height={200}
        chartConfig={{
            backgroundGradientFromOpacity: 0, // Nilai transparansi
            backgroundGradientToOpacity: 0,
          color: (opacity = 1) => color.primary,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
            </View>
        </View>
    )
}

const ProgressChartComp = ({data,judul})=>{
    return (
        <View style={styles.canvasChart}>
            <View style={styles.titleChart}>
                <Text>{judul}</Text>
            </View>
            <View style={styles.containerChart}>
                <ProgressChart
                    data={data}
                    width={300}
                    height={200}
                    chartConfig={{
                      backgroundGradientFrom: '#1E2923',
                      backgroundGradientTo: '#08130D',
                      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    }}
                  />
            </View>
        </View>
    )
}


const StackedBarChartComp = ({data,judul})=>{
    return (
        <View style={styles.canvasChart}>
            <View style={styles.titleChart}>
                <Text>{judul}</Text>
            </View>
            <View style={styles.containerChart}>
                <StackedBarChart
                    data={data}
                    width={300}
                    height={200}
                    chartConfig={{
                    backgroundGradientFromOpacity: 0, // Nilai transparansi
                    backgroundGradientToOpacity: 0,
                    decimalPlaces: 2,
                    color: (opacity = 1) => color.primary,
                    style: {
                        borderRadius: 16,
                    },
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleChart:{
        borderBottomColor:'gray',
        borderBottomWidth:0.3,
        padding:15
    },
    canvasChart:{
        marginTop:15,
        backgroundColor:"#ffffff",
        borderRadius:5,
    },
    containerChart:{
        padding:10
    },
});

export {
    BarChartComp,
    LineChartComp,
    PieChartComp,
    ProgressChartComp,
    StackedBarChartComp
};