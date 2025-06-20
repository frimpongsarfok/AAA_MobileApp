import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: "100%",
        margin: "1%",
    },
    closeButton: {
        width: 35,
        height: 30,
    },
    okButton: {
        width: 45,
        height: 40,
        position: "absolute",
    
    },
    buttonViewImage: {
            flex:1, 
            width:null , 
            height:null, 
            resizeMode:"contain"

    },
    buttonViewText: {
        color: "#FFFFFF",
        fontSize: 10,
        fontWeight: "700"
    },
    selectedButtonBackground1:{
        backgroundColor:"#0CA789",
        color:"#fff",
        fontSize:25,
        textAlign:"center",
        fontFamily:"Georgia"
    },
    selectedButtonBackground2:{
        backgroundColor:"#000",
        color:"#8FD14F",
        fontSize:25,
        textAlign:"center",
        fontFamily:"Georgia",
    }

})
export const MenuButton = (props: { disabled: boolean, src: any, onPress: () => void }) => {

    return <TouchableOpacity style={styles.button} disabled={props.disabled} onPress={props.onPress} >
        <Image source={props.src} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}

export const CheckButton = (props: { disabled: boolean, callback: ()=>void }) => {
    return <TouchableOpacity style={styles.okButton} disabled={props.disabled} onPress={props.callback}>
        <Image source={require("../assets/images/button_check.png")} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}


export const BackButton = (props: { disabled: boolean, callback: any }) => {
    return <TouchableOpacity style={styles.button} disabled={props.disabled} onPress={props.callback()}>
        <Image source={require("../assets/images/button_back.png")} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}
export const ListButton = (props: { disabled: boolean }) => {
    return <TouchableOpacity style={styles.button} disabled={props.disabled} >
        <Image source={require("../assets/images/button_check.png")} style={styles.buttonViewImage}></Image>
    </TouchableOpacity>
}
export const CloseButton = (props: { disabled: boolean, onPress: () => void }) => {
    return <TouchableOpacity style={[styles.closeButton]} onPress={props.onPress}>
        <Image source={require("../assets/images/close.png")} style={styles.buttonViewImage}/>
    </TouchableOpacity>
}
export const EditButton = (props: { disabled: boolean, onPress: () => void }) => {
    return <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={require("../assets/images/edit.png")} style={styles.buttonViewImage} />
    </TouchableOpacity>
}
export const MapButton = (props: { disabled: boolean, onPress: () => void }) => {
    return <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={require("../assets/images/Map.png")} style={styles.buttonViewImage} />
    </TouchableOpacity>
}
export const RadarButton = (props: { disabled: boolean, onPress: () => void }) => {
    return <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={require("../assets/images/radar.png")} style={styles.buttonViewImage} />
    </TouchableOpacity>
}
export const PaxMenuButton = (props: { disabled: boolean, onPress: () => void }) => {
    return <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={require("../assets/images/paxlist.png")} style={styles.buttonViewImage} />
    </TouchableOpacity>
}
export const AlarmButton = (props: { disabled: boolean, onPress: () => void }) => {
    return <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={require("../assets/images/alarm.png")} style={styles.buttonViewImage} />
    </TouchableOpacity>
}
export const SelectableButton = (props: { value:string,selected:boolean,disabled: boolean, onPress: any }) => {
    return <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={[{ width: "100%", height: "auto", padding:10},props.selected?styles.selectedButtonBackground1:styles.selectedButtonBackground2]}> {props.value}</Text>
      
    </TouchableOpacity>
}