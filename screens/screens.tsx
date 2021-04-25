import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import ChangeLogScreen from '../screens/ChangeLogScreen';
import ThemeScreen from '../screens/ThemeScreen';
import LanguageScreen from '../screens/LanguageScreen';
import JoinScreen from '../screens/JoinScreen';
import SettingsScreen from '../screens/SettingsScreen';

const screens = new Map<string, any>();
screens.set('Home', HomeScreen);
screens.set('NotFound', NotFoundScreen);
screens.set('Create', CreateScreen);
screens.set('Change', ChangeLogScreen);
screens.set('Theme', ThemeScreen);
screens.set('Join', JoinScreen);
screens.set('Settings', SettingsScreen);
screens.set('Language', LanguageScreen);


export default screens;