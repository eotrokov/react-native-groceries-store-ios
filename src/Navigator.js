import React from "react";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { useScreens } from "react-native-screens";
import colors from "./constants/colors";
import Categories from "./screens/categories/index";
import Home from "./screens/home/index";
import Products from "./screens/products";
import Profile from "./screens/profile/index";
import Search from "./screens/search/index";
import ShoppingCart from "./screens/shoppingCart/index";
import Loading from "./screens/loading/index";
import Filter from "./screens/filter/index";

useScreens();

const { title, tabBarIcon } = Categories.navigationOptions;

const CatalogDetails = createStackNavigator(
  {
    Categories,
    Products
  },
  {
    initialRouteName: "Categories",
    headerMode: "screen",
    defaultNavigationOptions: {
      headerLeftContainerStyle: {
        marginLeft: 11
      }
    }
  }
);

CatalogDetails.navigationOptions = {
  header: null
};

const Catalog = createStackNavigator(
  {
    Details: CatalogDetails,
    Filter
  },
  {
    initialRouteName: "Details",
    mode: "modal",
    headerMode: "screen"
  }
);

Catalog.navigationOptions = {
  title,
  tabBarIcon
};

const Tabs = createBottomTabNavigator(
  {
    Home,
    Catalog,
    Search,
    ShoppingCart,
    Profile
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.textGray
    }
  }
);

const App = createSwitchNavigator(
  {
    Loading,
    Tabs
  },
  {
    initialRouteName: "Loading"
  }
);

export default createAppContainer(App);
