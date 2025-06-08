import React, { useEffect, useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
import { DialogBox, MESSAGETYPE } from './DialogBox';

type Rotation = 'top' | 'down' | 'right' | 'left';
function setCameraOrientation(arg0: string) {
    throw new Error('Function not implemented.');
}

interface CameraProps {
    cameraActive: boolean,
    scanDevice:(deviceID:string)=>void 
}
const ErrorMsg=(msg)=><View style={{width:"100%", height:"100%", justifyContent:"center", alignContent:"center",alignItems:"center"}}>
<Text  style={{color:"#fff", }}>{msg}</Text>
</View>


const CameraScreen: React.FC<CameraProps> = ({ cameraActive, scanDevice}) => {
    const cameraPermission= useCameraPermission()
    useEffect(() => {
        cameraPermission.requestPermission().then((connected:boolean)=>{
            console.log("Camera Permission Granted")
        }).catch((reason:any)=>{
            console.log(reason)
        });
    }, [cameraPermission])

    const device = useCameraDevice('back')
    if (device == null) {
        return ErrorMsg("No Camera Device Found!!!"); // Comment: Return an error message if no camera device is found
    }else{
        console.log("Camera Device Found")
    }
    const [uiRotation, setUiRotation] = useState(0)
    const uiStyle: ViewStyle = {
        transform: [{ rotate: `${uiRotation}deg` }]
    }
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            if (codes.length > 0) {
                scanDevice(codes[0].value); // Comment: Call the scanDevice function with the scanned code value
            }
        },

      })
      
      return  cameraPermission.hasPermission?
      <Camera style={{width:"100%", height: 200, backgroundColor:"#fff"}} isActive={cameraActive} device={device} codeScanner={codeScanner} />:
      <DialogBox header={'Camera'} messageType={MESSAGETYPE.ERROR} closeHandler={function (): void {
          throw new Error('Function not implemented.');
      } } ></DialogBox> 
}

export default CameraScreen;

