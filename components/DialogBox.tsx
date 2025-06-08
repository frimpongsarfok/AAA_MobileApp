import React from "react";

import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { CheckButton, CloseButton } from "./Buttons";
import { UnderLine } from "./Underline";

const styles = StyleSheet.create({
    background: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    dialog: {
        backgroundColor: '#1A1A1A',
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("screen").width*.9,
        height: Dimensions.get("screen").height*.8,
        marginBottom: "5%",
        opacity: 1,
        padding: "1%",
    },
    successMessage: {
        color: "#8FD14F",
    },
    warningMessage: {
        color: "#FEF445",
    },
    errorMessage: {
        color: "#FF0000",
    }
})

export enum MESSAGETYPE {
    SUCCESS,  //
    WARNING, //
    ERROR, // 
    INPUT, // Text Box input
    NONE,
}

type Props = {
    messageType: MESSAGETYPE,
    message: string,
    subView?: []
}
interface AlertDialogProps{
    header:string,
    messageType:MESSAGETYPE,
    message?:string,
    subView?:Array<React.ReactNode>,
    closeHandler:()=>void,
    okHandler?:()=>void
}
export class DialogBox extends React.Component<AlertDialogProps> {
    constructor(props:AlertDialogProps){
        super(props)
      
    }
    
    render(): React.ReactNode {

        const textColor = this.props.messageType === MESSAGETYPE.ERROR ? { color: "#8FD14F" } :
        this.props.messageType === MESSAGETYPE.SUCCESS ? { color: "#8FD14F" } :
            this.props.messageType === MESSAGETYPE.WARNING ? { color: "#FF0000" } : { color: "#8FD14F" };
        return <SafeAreaView style={styles.background}>

        <ScrollView style={{ 
            width: Dimensions.get("window").width, 
            height: Dimensions.get("window").height,}} 
            contentContainerStyle={{ 
                flexGrow: 1, 
                justifyContent: "center", 
                alignItems: "center" 
                }}>
            <View style={[styles.dialog]}>
                <View style={[{height: "10%",width: "100%", flexDirection: "row",justifyContent:"center" }, this.props.messageType === MESSAGETYPE.INPUT ? {} : { direction: "rtl" }]}>
   
                        <View style={{ width: "15%", height: "90%", }}>
                            <CheckButton disabled={false} callback={() => { 
                                if (this.props.messageType === MESSAGETYPE.INPUT && this.props.okHandler) {
                                    this.props.okHandler();
                                } else {
                                    this.props.closeHandler();
                                }
                            }} />
                        </View>
  
                    <Text style={{ width: "60%", textAlign: "center", color: "#8FD14F", fontWeight: "800", fontSize: 30 }}>{this.props.header}</Text>
                    {this.props.messageType === MESSAGETYPE.INPUT && 
                    <View style={{ width: "20%", height: "80%", direction: "rtl" }}>
                        <View style={{ backgroundColor: "#1A1A1A", width: "10%", height: "80%", marginBottom:"10%"}}>
                            <CloseButton disabled={false} onPress={() => { this.props.closeHandler() }} /></View>
                    </View >}
                </View>
                <View style={{ height: "90%", width: "100%", paddingBottom:"2%", backgroundColor: "#1A1A1A", }}>
                    {this.props.messageType !== MESSAGETYPE.INPUT && <Text style={[{ 
                        textAlign: "center", 
                        margin: "2%", 
                        marginTop: "10%", 
                        justifyContent: "center", 
                        fontSize: 24, 
                        fontWeight: "bold", 
                        fontFamily: "Georgia-italic" }, textColor]}>
                            {this.props.message}
                            </Text>}
                    {this.props.messageType === MESSAGETYPE.INPUT && this.props.subView?.map((node, index) => (
                        <React.Fragment key={index}>{node}</React.Fragment>
                    ))}
                </View>
                <UnderLine/>

            </View>
        </ScrollView>



    </SafeAreaView>
    }
    
}