import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49209538Navigator from '../features/BlankScreen49209538/navigator';
import Maps209449Navigator from '../features/Maps209449/navigator';
import Additem209448Navigator from '../features/Additem209448/navigator';
import Maps209444Navigator from '../features/Maps209444/navigator';
import UserProfile209440Navigator from '../features/UserProfile209440/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49209538: { screen: BlankScreen49209538Navigator },
Maps209449: { screen: Maps209449Navigator },
Additem209448: { screen: Additem209448Navigator },
Maps209444: { screen: Maps209444Navigator },
UserProfile209440: { screen: UserProfile209440Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
