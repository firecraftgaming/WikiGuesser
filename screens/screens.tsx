import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import JoinScreen from '../screens/JoinScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ParticipantLobbyScreen from '../screens/ParticipantLobbyScreen';
import HostLobbyScreen from '../screens/HostLobbyScreen';

const screens = new Map<string, any>();
screens.set('Home', HomeScreen);
screens.set('Create', CreateScreen);
screens.set('Join', JoinScreen);
screens.set('Settings', SettingsScreen);
screens.set('ParticipantLobby', ParticipantLobbyScreen);
screens.set('HostLobby', HostLobbyScreen);

export default screens;