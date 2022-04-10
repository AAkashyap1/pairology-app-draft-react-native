import { Dispatch, SetStateAction } from "react";
import { Image, Switch, View } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

type Props = {
  opt: boolean,
  setOpt: Dispatch<SetStateAction<boolean>>
}

export default function Nav({ opt, setOpt } : Props) {
  return (
    <View style={{ 
      flexDirection: "row", 
      width: '86%', 
      justifyContent: "space-between", 
      height: '12%',
    }}>
      <View 
        style={{
          width: '50%',
          marginRight: '4%'
        }}
      >
        <Image 
          style={{ 
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }} 
          source={require("../assets/images/pairology-black.png")} 
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '40%' }}>
        <View style={{ justifyContent: "center" }}>
          <AppText 
            title={false}
            size={15}
            color={Colors.dark.text}
            text="Opt in / out"
            bold
          />
        </View>
        <View style={{ flex: 0, justifyContent: "center" }}>
          <Switch 
            value={opt}
            onChange={() => setOpt(!opt)}
          />
        </View>
      </View>
    </View>
  )
}