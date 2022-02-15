import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { css } from '../assets/css/css';
import MapView, { Marker } from 'react-native-maps';
import ActionButon from 'react-native-action-button';



export default function Mapa({ navigation }) {
  const [maps, setMaps] = useState([])

  useEffect(() =>{
    async function getData() {
      const token = "vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF";

      const headerOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      }
      const response = await fetch ('https://mobile.ect.ufrn.br:3003/markers', headerOptions)
      const maps = await response.json()

      setMaps(maps)
    }
    getData()
  }, [])
  
  return (
    <View style={css.container}>
      <MapView style={css.mapa}>
        {
          maps.map((marker, id) => <MapView.Marker
          key = {id}
          coordinate = {{latitude: marker.latitude, longitude: marker.longitude}}
          title = {marker.title}
          description = {marker.description}
          />)
        }
      </MapView>
      <ActionButon
          buttonColor='green'
          onPress={()=> navigation.navigate('AdicionarMarcador')}>
      </ActionButon>
    </View>
  );
}

