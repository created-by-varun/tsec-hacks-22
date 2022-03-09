import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import {
    Divider,
    Layout,
    TopNavigationAction,
    TopNavigation,
    Input,
    Icon,
    Text,
    CheckBox,
    Radio,
    RadioGroup,
    Toggle,
    Datepicker,
    IndexPath,
    Select,
    SelectItem,
    Autocomplete,
    AutocompleteItem,
} from "@ui-kitten/components";

const CalendarIcon = props => <Icon {...props} name="calendar" />;

// icon imports
const Menu = props => <Icon {...props} name="menu-outline" />;

// sample data for autocomplete
const movies = [
    { title: "Star Wars" },
    { title: "Back to the Future" },
    { title: "The Matrix" },
    { title: "Inception" },
    { title: "Interstellar" },
];

const filter = (item, query) =>
    item.title.toLowerCase().includes(query.toLowerCase());

export const InputsScreen = ({ navigation }) => {
    const OpenMenu = () => {
        navigation.openDrawer();
    };

    const MenuAction = () => (
        <TopNavigationAction icon={Menu} onPress={OpenMenu} />
    );

    // for simple input
    const [value, setValue] = React.useState("");

    // for password input
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const renderIcon = (
        props // show password icon
    ) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
        </TouchableWithoutFeedback>
    );

    // for checkbox
    const [checked, setChecked] = React.useState(false);

    // for radio button
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    // for toggle
    const [activeChecked, setActiveChecked] = React.useState(false);
    const onActiveCheckedChange = isChecked => {
        setActiveChecked(isChecked);
    };

    // for date-picker
    const [date, setDate] = React.useState(new Date());

    // for select dropdown
    const [selectedIndex2, setSelectedIndex2] = React.useState(
        new IndexPath(0)
    );

    // multiselect dropdown
    const [selectedIndex3, setSelectedIndex3] = React.useState([
        new IndexPath(0),
        new IndexPath(1),
    ]);


    // for Autocomplete input field
    const [autocompleteValue, setAutocompleteValue] = React.useState(null);
    const [data, setData] = React.useState(movies);

    const onSelect = index => {
        setAutocompleteValue(movies[index].title);
    };

    const onChangeText = query => {
        setAutocompleteValue(query);
        setData(movies.filter(item => filter(item, query)));
    };

    const renderOption = (item, index) => (
        <AutocompleteItem key={index} title={item.title} />
    );


    // ------------------- Start rendering elements onto the screen ----------------
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                title="Inputs"
                alignment="center"
                accessoryLeft={MenuAction}
            />
            <Divider />

            <Layout style={styles.Layout}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input
                        label="Simple text input"
                        placeholder="Start Typing"
                        style={styles.Input}
                        value={value}
                        onChangeText={nextValue => setValue(nextValue)}
                    />

                    <Input
                        value={value}
                        style={styles.Input}
                        label="Password Input"
                        placeholder="Password"
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={nextValue => setValue(nextValue)}
                    />
                    <CheckBox
                        checked={checked}
                        style={styles.Input}
                        onChange={nextChecked => setChecked(nextChecked)}
                    >
                        {`Checked: ${checked}`}
                    </CheckBox>

                    <Text category="h6" style={styles.Input}>
                        {`Selected Option: ${selectedIndex + 1}`}
                    </Text>

                    <RadioGroup
                        selectedIndex={selectedIndex}
                        onChange={index => setSelectedIndex(index)}
                    >
                        <Radio>Option 1</Radio>
                        <Radio>Option 2</Radio>
                        <Radio>Option 3</Radio>
                    </RadioGroup>

                    <View style={styles.toggle}>
                        <Toggle
                            style={styles.toggle}
                            checked={activeChecked}
                            onChange={onActiveCheckedChange}
                        >
                            Active
                        </Toggle>

                        <Toggle style={styles.toggle} disabled={true}>
                            Disabled
                        </Toggle>
                    </View>


                    <Autocomplete
                        style={styles.verticalMargin}
                        label="Autocomplete input field"
                        placeholder="Type movie name"
                        value={autocompleteValue}
                        onSelect={onSelect}
                        onChangeText={onChangeText}
                    >
                        {data.map(renderOption)}
                    </Autocomplete>

                    <Datepicker
                    style={styles.verticalMargin}
                        label="Date Picker"
                        placeholder="Pick Date"
                        date={date}
                        onSelect={nextDate => setDate(nextDate)}
                        accessoryRight={CalendarIcon}
                    />

                    <Select
                    style={styles.verticalMargin}
                        label="Single Select Dropdown"
                        selectedIndex={selectedIndex2}
                        onSelect={index => setSelectedIndex2(index)}
                    >
                        <SelectItem title="Option 1" />
                        <SelectItem title="Option 2" />
                        <SelectItem title="Option 3" />
                    </Select>

                    <Select
                    style={styles.verticalMargin}
                        label="Multi-select dropdown"
                        multiSelect={true}
                        selectedIndex={selectedIndex3}
                        onSelect={index => setSelectedIndex3(index)}
                    >
                        <SelectItem title="Option 1" />
                        <SelectItem title="Option 2" />
                        <SelectItem title="Option 3" />
                    </Select>

                </ScrollView>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
    },
    Layout: {
        flex: 1,
        padding: 15,
    },
    Input: {
        padding: 5,
        marginBottom: 8,
    },
    toggle: { margin: 2, flexDirection: "row", padding: 20 },
    verticalMargin: {
        marginVertical: 10,
    }
});
