import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import Camera from './components/camera';
import Map from './components/map';
import Login from './components/login';
import Alarm from './components/alarm.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options = {{headerRight: ()=>(<MaterialCommunityIcons name="help-rhombus" size={24} color="black" onPress={()=>alert('User: chistopher, password: 1235678')}/>)}}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Alarm" component={Alarm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

