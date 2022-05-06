import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

export default function App({ navigation, route }) {
    const MapRegion = { 
        latitude: route.params.latitude, 
        longitude: route.params.longitude, 
        latitudeDelta: 0.005, 
        longitudeDelta: 0.005
    }
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={MapRegion}>
      <Marker coordinate={MapRegion} title='Tu estas qui!' /> 
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
