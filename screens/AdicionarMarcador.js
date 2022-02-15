import React, { useEffect, useState, useRef } from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import MapView, { Marker } from 'react-native-maps';
import { css } from "../assets/css/css";

export default function AdicionarMarcador( {navigation} ){
    const [descricao, setDescricao] = useState('')
    const [local, setLocal] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [mapa, setMapa] = useState([])
    const token = "vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF";

    useEffect(() => {
        async function getData(){
            const headerOptions = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            }
        
            const response = await fetch ('https://mobile.ect.ufrn.br:3003/markers', headerOptions)
            const mapa = await response.json()

            setMapa(mapa)
        }
        getData()
    }, [])
        
    const headerOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude,
            title: local,
            description: descricao,
        }),
    }

    function adicionar(){
        fetch('https://mobile.ect.ufrn.br:3003/markers', headerOptions)
        
        
    }


    return(
        <View style={css.container}>
            <MapView style={css.mapa2} 
                onPress={(event) => {
                    setLatitude(event.nativeEvent.coordinate.latitude)
                    setLongitude(event.nativeEvent.coordinate.longitude)
                }}>
                <Marker
                    coordinate={{latitude: latitude, longitude: longitude}}
                    title = {local}
                    description = {descricao}                
                />
                {
                    mapa.map((marker, id) => <Marker
                        key={id}
                        coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                        title={marker.title}
                        description={marker.description}
                    />)
                }
               
            </MapView>

            <View style={css.busca}>
                <Text>Local</Text>
                <TextInput 
                    style={css.input} 
                    placeholder=" Local..." 
                    value={local}
                    onChangeText={setLocal}
                />

                <Text>Descrição</Text>
                <TextInput 
                    style={css.input} 
                    placeholder=" Descrição" 
                    value={descricao}
                    onChangeText={setDescricao}
                />
                    
                <TouchableOpacity style={css.botaoEnviar}
                    onPress={() => adicionar()}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}