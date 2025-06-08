import React from "react";
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";

interface NumericPadState {
  numberArray:Array<number>
}


interface NumericPadProps {
    eventHandler:(number:number)=>void,
    limit:number
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: "#1A1A1A",
        width: "100%",
        height: "100%",
        

    },
    numberPad: {
        flex:1,
        width:null,
        height:null,
        resizeMode:"contain"
    },
    numbers: {
       flex:1,
       width:null,
       height:null,
       resizeMode:"contain"
    },
    numberRows:{
        width:"100%",
        height:"35%",
       
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-evenly"
       
        
    },
    blankSpace: {

    },
    button:{
        width:"33%",
        height:"60%",
        paddingBottom:"5%",
        marginBottom:"5%"
       
    }
});




export class NumericPad extends React.Component<NumericPadProps, NumericPadState>{
    constructor(props: NumericPadProps) {
        super(props)
        this.state={
            numberArray:[]
        }
    }
    convertArrayToNumer(number:number):number{
        if(this.state.numberArray.length==this.props.limit && number!==-1 ){
            return  Number(this.state.numberArray.toString().replaceAll(",",""));
        }
        else if(number===-1 && this.state.numberArray.length){
            this.state.numberArray.pop()
            this.setState({numberArray:this.state.numberArray});
        }else if(number>=0){
            this.state.numberArray.push(number);
            this.setState({numberArray:this.state.numberArray});
        }
        return Number(this.state.numberArray.toString().replaceAll(",",""));
    }
    render(): React.ReactNode {
        return <View style={styles.background}>
            <ImageBackground source={require("../assets/images/numPadBackground.png")} style={styles.numberPad}>
                <View key={1} style={styles.numberRows}>
                   <TouchableOpacity style={styles.button}  key={11} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(1))}>
                        <Image source={require("../assets/images/one.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={12} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(2))}>
                        <Image source={require("../assets/images/two.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={13} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(3))}>
                        <Image source={require("../assets/images/three.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={21} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(4))}>
                        <Image source={require("../assets/images/four.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={22} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(5))}>
                        <Image source={require("../assets/images/five.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={23} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(6))}>
                        <Image source={require("../assets/images/six.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={31} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(7))}>
                        <Image source={require("../assets/images/seven.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={32} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(8))}>
                        <Image source={require("../assets/images/eight.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={33} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(9))}>
                        <Image source={require("../assets/images/nine.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={41} onPress={()=>{}}>
                        <Image source={require("../assets/images/blankspace.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={42} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(0))}>
                        <Image source={require("../assets/images/zero.png")} style={styles.numbers} />
                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} key={43} onPress={()=>this.props.eventHandler(this.convertArrayToNumer(-1))}>
                        <Image source={require("../assets/images/backspace.png")} style={styles.numbers} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    }

}
