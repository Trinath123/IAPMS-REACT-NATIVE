import React from 'react'
import { LineChart, BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { View, Text, TextInput, Keyboard, TouchableOpacity, Button } from 'react-native';
import styles from './styles/Productionchart';
import * as scale from 'd3-scale';

export default class Productionchart extends React.PureComponent {

    static navigationOptions = (props) => ({
        title: 'Production Chart',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontSize: 22,
            color: 'darkblue'
        },
    });
 
    constructor(props) {
        super(props);
        this.state = {
            dataArray: [1550, 1440],
            xAxis: [1, 2],
            yAxis: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500],
            dateSelect: ['Shift', 'Day', 'Month'],
            isSelectdate: false,
            isdate: '',
            months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct', 'Nov','Dec']
        }
        this.selectDatevalu = this.selectDatevalu.bind(this);
    };

    selectDatevalu(dno) {
        const { moldCount } = this.props.navigation.state.params;
        const {months} = this.state
        console.log('Mold Count: ',moldCount);

        let dataArray = [];
        let xAxis = [];
        if(dno == "Shift") {
            moldCount.shiftData.map((mold, i) => {
                dataArray.push(mold.moldActualCount);
               // xAxis.push({ xData: mold.shift });
                xAxis.push({xData: ((new Date(mold.dayData)).getDate()) + ",S-" + mold.shift})
            });    
        } else if (dno == "Day") {
            moldCount.dayData.map((mold, i) => {
                dataArray.push(mold.Actual);
                xAxis.push({xData: ((new Date(mold.dayData)).getDate())});
            });
        } else if(dno == "Month"){
            moldCount.monthData.map((mold, i) => {
                dataArray.push(mold.moldActualCount);
                //xAxis.push({xData: mold.month });
                xAxis.push({xData: months[(mold.month )]});
            });
        }

        console.log(xAxis);

        this.setState({ dataArray, xAxis, isdate: dno, isSelectdate: false });
    }

    render() {
        const { dataArray, xAxis,yAxis } = this.state 
        const fill = 'rgb(134, 65, 244)'
        const contentInset = { top: 10, bottom: 10 }
        return (
            <View style={styles.container}>
                <View style={styles.dropdownScreen}>
                    <View style={styles.dropScreen}>
                        <View style={styles.dropInputBox}>
                            <TextInput style={styles.dropTextinput}
                                onPress={Keyboard.dismiss()}
                                placeholder='select'
                                placeholderTextColor='#545b66'
                                value={this.state.isdate}
                                onChangeText={(isdate) => this.setState({ isdate })}
                                onFocus={() => this.setState({ isSelectdate: true })}
                            />
                        </View>
                    </View>
                    {this.state.isSelectdate
                        ?
                        <View style={styles.dropScreen2}>
                            <View style={styles.dropLabelBox2} />
                            <View style={styles.userRoles}>
                                {this.state.dateSelect.map((dno, i) => (
                                    <TouchableOpacity
                                        key={i}
                                        style={styles.dropButton}
                                        onPress={() => this.selectDatevalu(dno)}>
                                        <Text style={styles.droptext}>{dno}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        :
                        null
                    }
                </View>
                <View style={{ flex: 0.7, justifyContent: 'center' }}>
                    <View style={{ height: 300, flexDirection: 'row' }}>
                        <YAxis
                            data={dataArray}
                            contentInset={contentInset}
                            svg={{
                                fill: 'grey',
                                fontSize: 14,
                            }}
                            numberOfTicks={8}
                            formatLabel={value => `${value}`}
                        />
                        <BarChart
                            style={{ flex: 1, borderWidth: 1 }}
                            data={dataArray}
                            // data={data}
                            svg={{ fill }}
                            yMin={0}
                            yMax={3000}
                            contentInset={{ contentInset }}>
                            <Grid />
                        </BarChart>
                    </View>
                    <View style={{ flex: 0.1, marginLeft: 16 }}>
                        <XAxis
                            style={{ marginLeft: 26, marginRight: 10, marginTop: 5 }}
                            data={xAxis}
                            xAccessor={({ item }) => item.xData}
                            scale={scale.scaleBand}
                            formatLabel={value => `${value}`}
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 15, fill: 'black' }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}