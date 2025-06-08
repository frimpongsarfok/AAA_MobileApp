
import { View } from "react-native"
import WifiManager from "react-native-wifi-reborn"
import CameraScreen from "../components/CameraScreen"
import { DialogBox, MESSAGETYPE } from "../components/DialogBox"
import { TextBox } from "../components/Textboxes"
// Add the 'esModuleInterop' flag to enable default imports
import * as React from "react"

interface ConnectDeviceProps {
    cameraActive: boolean,
    connectionHandler: (state: boolean) => void,
    handleVisible: (connection: boolean) => void,
    setConnection?: (connection: boolean) => void
    scanDevice?: (deviceID: string) => void
}

interface ConnectDeviceState {
    deviceID: string,
    deviceConnected: boolean,
    ssid:string,
    password:string
}
export default class ConnectDeviceDialog extends React.Component<ConnectDeviceProps,ConnectDeviceState> {
    constructor(props: ConnectDeviceProps) {
        super(props);
        this.scanDevice = this.scanDevice.bind(this);
        this.state = {
            deviceID: "",
            deviceConnected: false,
            ssid:"",
            password:"",
        }

    }

    componentDidMount(): void {
        
    }

     connectToWifi(ssid:string,password:string):boolean{
        let connection:boolean;

        WifiManager.connectToProtectedSSID(ssid, password, true,false, true).then(
            () => {
               
                this.setState({
                    deviceID: this.state.deviceID,
                    deviceConnected: true,
                    ssid: ssid,
                    password:password,
                });
                console.log("Connected successfully!");
            },
            () => {
              
                this.setState({
                    deviceID: this.state.deviceID,
                    deviceConnected: false,
                    ssid: this.state.ssid,
                    password:this.state.password,
                });
                console.log("Connection failed!");
            }
        );
        
        return true;
    }

    
    scanDevice(SSIIDPasswordStr: string): void {
        console.log(SSIIDPasswordStr)
        const ssid:string= SSIIDPasswordStr.split(";")[0].split(":")[1];
        const password:string= SSIIDPasswordStr.split(";")[1].split(":")[1];
        console.log("Scanning Device: " ,WifiManager);
        this.connectToWifi(ssid,password)
    }
    render(): React.ReactNode {
        const txtbox = <View key={0} style={{ marginTop: "10%" }}>
            <TextBox value="" placeHolder="ENTER DEVICE ID" readonly={false} />
        </View>

        const camera = <CameraScreen key={1} cameraActive={this.props.cameraActive} scanDevice={this.scanDevice} />
        const cameraView=<DialogBox header="CONNECT DEVICE" messageType={MESSAGETYPE.INPUT} message="--deviceConnection--" subView={[camera]} closeHandler={() => {
                this.props.handleVisible(false);
            }} okHandler={() => void {

            }} />

        const connectedView=<DialogBox header="CONNECT DEVICE" messageType={MESSAGETYPE.SUCCESS} message="Device Connection Successful!" closeHandler={() => {
                this.props.connectionHandler(true);
            }} />
        return this.state.deviceConnected ? connectedView : cameraView;
    }
}