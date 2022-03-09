import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Dimensions,
    ScrollView,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
    Layout,
    Text,
    TopNavigationAction,
    TopNavigation,
    Icon,
} from "@ui-kitten/components";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
} from "react-native-chart-kit";
export const DialogsScreen = ({ navigation }) => {
    const Menu = (props) => <Icon {...props} name="menu-outline" />;
    const OpenMenu = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    const MenuAction = () => (
        <TopNavigationAction icon={Menu} onPress={OpenMenu} />
    );
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(0, 65, 244, ${opacity})`, // optional
                strokeWidth: 5, // optional
            },
        ],
        legend: ["Rainy Days"], // optional
    };
    const data2 = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8],
    };
    const data3 = [
        {
            name: "Seoul",
            population: 215,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Toronto",
            population: 28,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Beijing",
            population: 56,
            color: "rgba(91, 187, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "New York",
            population: 85,
            color: "rgba(199, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Moscow",
            population: 11,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
    ];
    const commitsData = [
        { date: "2017-01-02", count: 1 },
        { date: "2017-01-03", count: 2 },
        { date: "2017-01-04", count: 3 },
        { date: "2017-01-05", count: 4 },
        { date: "2017-01-06", count: 5 },
        { date: "2017-01-30", count: 2 },
        { date: "2017-01-31", count: 3 },
        { date: "2017-03-01", count: 2 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-03-05", count: 2 },
        { date: "2017-02-30", count: 4 },
    ];

    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                title="Charts"
                alignment="center"
                accessoryLeft={MenuAction}
            />
            <Layout style={{ flex: 1, padding: 15 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: 20 }}>
                        <Text>Bezier Line Chart</Text>
                        <LineChart
                            data={data}
                            width={screenWidth} // from react-native
                            height={220}
                            yAxisLabel="$"
                            yAxisSuffix="k"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={chartConfig}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text> Line Chart</Text>
                        <LineChart
                            data={data}
                            width={screenWidth}
                            height={220}
                            chartConfig={chartConfig}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text> Progress Ring</Text>
                        <ProgressChart
                            data={data2}
                            width={screenWidth}
                            height={220}
                            strokeWidth={16}
                            radius={32}
                            chartConfig={chartConfig}
                            hideLegend={false}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text> Bar Chart </Text>
                        <BarChart
                            data={data}
                            width={screenWidth}
                            height={320}
                            yAxisLabel="$"
                            chartConfig={chartConfig}
                            verticalLabelRotation={30}
                        />
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <Text> Pie Chart </Text>
                        <PieChart
                            data={data3}
                            width={screenWidth}
                            height={220}
                            chartConfig={chartConfig}
                            accessor={"population"}
                            backgroundColor={"transparent"}
                            paddingLeft={"15"}
                            center={[10, 10]}
                            absolute
                        />
                    </View>
                    <View style={{ marginVertical: 20, flex: 1 }}>
                        <Text> ContributionGraph </Text>
                        <ContributionGraph
                            values={commitsData}
                            endDate={new Date("2017-04-01")}
                            numDays={105}
                            width={screenWidth}
                            height={220}
                            chartConfig={chartConfig}
                        />
                    </View>
                </ScrollView>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default DialogsScreen;
