import React, { ReactNode } from "react";
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    View
} from "react-native";
import { MenuButton } from "../../components/Buttons";
import ConnectDeviceDialog from "../ConnectDevice";
import JoinDialog from "../JoinChalk";
import JumpData from "../JumpData";
import LetGo from "../LetGo";
import PaxData from "./paxdata";

const styles = StyleSheet.create({

    background: {
        width: Dimensions.get("screen").width*.9,
        height: Dimensions.get("screen").height*.8,
        backgroundColor: "#243712",
        marginBottom: "5%",
       
    },
    menu:{ 
        flex:1,  
        flexDirection:"row",
        backgroundColor: "#1A1A1A" ,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },
    menuItem: {
        width: "50%",
        height: "27%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1A1A1A",
        marginTop: "2.5%",
    }
})


interface MainMenuState {
    connectionHandler?: (state: boolean) => void,
    connectionDialog: boolean
    joinDialog: boolean,
    paxDataDialog: boolean,
    mainMenu: boolean,
    letGoDialog: boolean,
    jumpDataDialog: boolean

}
interface MainMenuProps {
    connectionHandler: (state: boolean) => void
    joinHandler: (state: {}) => void
}
export class MainMenu extends React.Component<MainMenuProps, MainMenuState>{
    constructor(props: MainMenuProps) {
        super(props)
        this.state = {
            connectionDialog: false,
            joinDialog: false,
            paxDataDialog: false,
            letGoDialog: false,
            mainMenu: true,
            jumpDataDialog: false

        }
        this.handleJoinDialog = this.handleJoinDialog.bind(this);
        this.handlePaxDataDialog = this.handlePaxDataDialog.bind(this);
        this.handleConnectionDialog = this.handleConnectionDialog.bind(this);
        this.handleLetGoDialog = this.handleLetGoDialog.bind(this);
        this.handleJumpDataDialog = this.handleJumpDataDialog.bind(this);

        this.connectionHandler = this.connectionHandler.bind(this);
    }
    handleJoinDialog(visible: boolean): void {
        this.setState({ joinDialog: visible, mainMenu: !this.state.mainMenu })
    }
    handlePaxDataDialog(visible: boolean): void {
        this.setState({ paxDataDialog: visible, mainMenu: !this.state.mainMenu })
    }
    handleConnectionDialog(visible: boolean) {
        this.setState({ connectionDialog: visible, mainMenu: !this.state.mainMenu })
    }
    handleLetGoDialog(visible: boolean) {
        this.setState({ letGoDialog: visible, mainMenu: !this.state.mainMenu })
    }
    handleJumpDataDialog(visible: boolean) {
        this.setState({ jumpDataDialog: visible, mainMenu: !this.state.mainMenu })
    }


    connectionHandler(state: boolean): void {
        this.setState({ connectionDialog: false, mainMenu: true })

    }
    menuList(): ReactNode {
        return <View style={ styles.background}>
            <View style={ styles.menu}>
                <View style={styles.menuItem}>
                    <MenuButton src={require("../../assets/images/connectDevice.png")} disabled={false} onPress={() => { this.handleConnectionDialog(true) }} />
                </View>
                <View style={styles.menuItem}>
                    <MenuButton src={require("../../assets/images/joinChalk.png")} disabled={false} onPress={() => { this.handleJoinDialog(true) }} />
                </View>
                <View style={styles.menuItem}>
                    <MenuButton  src={require("../../assets/images/testDevice.png")} disabled={false} onPress={() => { }} />
                </View>
                <View style={styles.menuItem}>
                    <MenuButton src={require("../../assets/images/JumpData.png")} disabled={false} onPress={() => { this.handleJumpDataDialog(true) }} />
                </View >
                <View style={styles.menuItem} >
                    <MenuButton  src={require("../../assets/images/PaxData.png")} disabled={false} onPress={() => { this.handlePaxDataDialog(true) }} />
                </View>
                <View  style={styles.menuItem}>
                    <MenuButton src={require("../../assets/images/letGo.png")} disabled={false} onPress={() => { this.handleLetGoDialog(true) }} />
                </View>
            </View>
        </View>

    }

    render(): React.ReactNode {
        return <SafeAreaView style={{ flex:1, backgroundColor: "#243712", justifyContent: "center", alignItems: "center" }}>
            {this.state.mainMenu && this.menuList()}
            {this.state.connectionDialog && <ConnectDeviceDialog cameraActive={this.state.connectionDialog} connectionHandler={this.connectionHandler} handleVisible={this.handleConnectionDialog} />}
            {this.state.joinDialog && <JoinDialog handleVisible={this.handleJoinDialog} />}
            {this.state.paxDataDialog && <PaxData handleVisible={this.handlePaxDataDialog} />}
            {this.state.letGoDialog && <LetGo deviceConnected={true} deviceIsTested={true} paxDataSet={true} joinedChalk={true} handleVisible={this.handleLetGoDialog} />}
            {this.state.jumpDataDialog && <JumpData handleVisible={this.handleJumpDataDialog} />}

        </SafeAreaView>
    }
}

export default MainMenu;