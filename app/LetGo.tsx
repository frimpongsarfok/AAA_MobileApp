import React from "react";
import { StyleSheet, View } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { AlarmButton, MapButton, PaxMenuButton, RadarButton } from "../components/Buttons";
import { DialogBox, MESSAGETYPE } from "../components/DialogBox";
import { LetGoProgressBar } from "../components/LetGoProgressBar";
import { RADAL_ITEM_COLOR, Radar, RadarItem } from "../components/Radar";
import { TableView } from "../components/TableView";

enum JUMPTYPE { NONE, HOLYN, COMBAT }
enum VIEWTYPE { RADAR, MAP }
interface LetGoProps {
    deviceConnected: boolean
    deviceIsTested: boolean,
    paxDataSet: boolean,
    joinedChalk: boolean,
    handleVisible: (visible: boolean) => void

}

interface LetGoState {
    header: String,
    altitude: number
    altitudeDialog: boolean
    passedAllTest: boolean
    jumpType: JUMPTYPE
    progress: Float,
    jumpTypeDialog: boolean
    viewType: VIEWTYPE
    paxMenu: boolean
    loaded:boolean



}

const styles = StyleSheet.create({
    pilotBackground: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        backgroundColor: "#1A1A1A",
        justifyContent: "center",
        alignItems: "center"

    },
    paxList: {
        width: "38%",
        height: "100%"
    },
    radar: {
        width: "55%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    menu: {
        width: "7%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    menuSubButton: {
        width: "100%",
        height: "25%"

    },
    paxMenu: {
        width: "35%",
        height: "80%",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#000",
        padding: "2%",
    },
    paxMenuBackground: {
        width: "100%",
        height: "100%",
        position: "absolute",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#1A1A1A9E",
        padding: "2%",
    }
})
export default class LetGo extends React.Component<LetGoProps, LetGoState> {
    constructor(props: LetGoProps) {
        super(props);
        this.state = {
            header: "ALTITUDE",
            altitude: 0,
            progress: 0.0,
            loaded:false,
            altitudeDialog: true,
            passedAllTest: false,
            jumpType: JUMPTYPE.NONE,
            jumpTypeDialog: false,
            viewType: VIEWTYPE.RADAR,
            paxMenu: false,
            
        }
        this.setLoadPrgressBar = this.setLoadPrgressBar.bind(this);
        this.setJumpType = this.setJumpType.bind(this);
        this.handleNumericPadPress = this.handleNumericPadPress.bind(this);
        this.displayJumpType = this.displayJumpType.bind(this);

        this.setLoadPrgressBar(false)



    }
    handleNumericPadPress(number: number): void {
        this.setState({ altitude: number })
    }

    setJumpType(jump: number): void {
        this.setState({ jumpType: jump })
    }

    setLoadPrgressBar(loaded: boolean): void {
        [.1, .2, .3, .4, .7, 1].forEach(element => {
            setTimeout(() => {
                this.setState({ loaded: (element < 1 ? false : true), progress: element })
            }, 2000 * (element))

        });
    }

    displayJumpType(visible: boolean) {
        this.setState({ jumpTypeDialog: visible, altitudeDialog: !this.state.altitudeDialog })
    }
    displayPaxMenu(paxID: string, visible: boolean) {
        this.setState({ paxMenu: visible })
    }

    render(): React.ReactNode {
        const items: Array<RadarItem> = [
            { ID: "PAX005", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX006", color: RADAL_ITEM_COLOR.YELLOW },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX006", color: RADAL_ITEM_COLOR.YELLOW },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.RED },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX008", color: RADAL_ITEM_COLOR.RED },
            { ID: "PAX006", color: RADAL_ITEM_COLOR.YELLOW },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.RED },
            { ID: "PAX001", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX006", color: RADAL_ITEM_COLOR.YELLOW },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.RED },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
            { ID: "PAX007", color: RADAL_ITEM_COLOR.GREEN },
        ];

        const tablView = <TableView data={[
            ["   PAX     ", "  ALT.   ", "  SIGNAL "],
            ["PAX006", "1100"],
            ["PAX007", "0500"],
            ["PAX008", "0283"]]
        }
            refresh={false}
            loaded={() => { }}
            signalSwitchArray={[true, true, false]}
        />

        const LetGoProgressBar_ = <LetGoProgressBar style={{ width: "100%", height: "100%", backgroundColor: "#0009" }} progress={this.state.progress} />
        const PaxMenu = < View key={2} style={styles.paxMenu}></View>
        const ChecklistDialog=
            <DialogBox
                header="CHECKLIST"
                message={`Please check the following items before jumping:`
                    + `${this.props.deviceConnected?"":"\n1. Ensure that the device is connected."}`
                    + `${this.props.deviceIsTested?"":"\n2. Ensure that the device has been tested."}`
                    + `${this.props.paxDataSet?"":"\n3. Ensure that the pax data has been set."}`
                    + `${this.props.paxDataSet?"":"\n4. Ensure that you have joined a chalk."}`}
                messageType={MESSAGETYPE.WARNING}
                closeHandler={() => this.props.handleVisible(false)}
                okHandler={() => {}}
            />
         console.log(this.state.progress)
        const pilotMode =
            (
                <View style={{ width: "100%", height: "100%", justifyContent: "center", alignContent: "center" }}>
                    <View key={1} style={styles.pilotBackground}>
                        <View style={styles.paxList}>
                            {tablView}
                        </View>
                        <View style={styles.menu}>
                            <View style={styles.menuSubButton}>
                                <RadarButton onPress={() => this.setState({ viewType: VIEWTYPE.RADAR })} disabled={false} />
                            </View>
                            <View style={styles.menuSubButton}>
                                <MapButton onPress={() => this.setState({ viewType: VIEWTYPE.MAP })} disabled={false} />
                            </View>
                            <View style={styles.menuSubButton}>
                                <AlarmButton onPress={() => this.displayJumpType(true)} disabled={false} />
                            </View>
                            <View style={styles.menuSubButton}>
                                <PaxMenuButton onPress={() => this.displayPaxMenu("", true)} disabled={false} />
                            </View>
                        </View>
                        {this.state.viewType === VIEWTYPE.RADAR && <View style={styles.radar}>
                            <Radar items={items} alarm={false} />
                        </View>}
                        {this.state.viewType === VIEWTYPE.MAP && <View style={styles.radar}>
                            {/* {this.state.passedAllTest && <Map />} {} */}
                        </View>}
                    </View>
                    {this.state.paxMenu && <View style={styles.paxMenuBackground} onTouchEnd={
                        () => {
                            this.setState({ paxMenu: false })
                        }
                    }>
                        {PaxMenu}
                    </View>}
                </View>)

        return  this.state.progress<1?LetGoProgressBar_:this.state.passedAllTest? pilotMode:ChecklistDialog
    }
}