console.disableYellowBox = true;
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./navigation.component";
import { default as theme } from "./custom-theme.json";
import GlobalStyles from "./GlobalStyles";

// Redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import CounterReducer from "./store/reducers/count";
import { SafeAreaView } from "react-native";

const rootReducer = combineReducers({
  counter: CounterReducer,
});
const store = createStore(rootReducer);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <Provider store={store}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <AppNavigator />
        </ApplicationProvider>
      </SafeAreaView>
    </Provider>
  </>
);
