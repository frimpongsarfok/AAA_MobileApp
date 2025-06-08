import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';

interface MapState {

}
interface MapProps {

}

const styles = StyleSheet.create({
    background: {
        width: "90%",
        height: "90%",
        backgroundColor: "#1A1A1A",

    }
})
export default class Map extends React.Component<MapProps, MapState> {
    constructor(props: MapProps) {
        super(props)
    }

    INITIAL_REGION = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    render(): React.ReactNode {

        return <View style={styles.background}>
            <MapView style={StyleSheet.absoluteFill}
                toolbarEnabled={true}
                initialRegion={this.INITIAL_REGION}
                region={this.INITIAL_REGION}
                showsCompass={true}
                showsUserLocation={true}
                showsMyLocationButton={true}

            />
        </View>
    }
}