import { Text } from "react-native";
import { useFonts } from '@expo-google-fonts/inter'
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter'

type Props = {
  text: string,
  size: number,
  title: boolean,
  color: string,
  flex?: number,
  underline?: boolean,
  bold?: boolean,
  italic?: boolean,
  center?: boolean,
}

export default function AppText({ text, size, title, color, flex, underline, bold, italic, center } : Props) {
  let [fontsLoaded] = useFonts({
    DMSans_700Bold,
    Inter_400Regular,
    Inter_600SemiBold
  });

  if (fontsLoaded) {
    return (
      <Text style={{
        fontFamily: (title ? "DMSans_700Bold" : (bold ? "Inter_600SemiBold" : "Inter_400Regular")),
        fontSize: size,
        color: color,
        flexDirection: "row",
        flex: (flex && flex),
        fontStyle: (italic ? 'italic' : 'normal'),
        fontWeight: (bold ? 'bold' : 'normal'),
        textDecorationLine: (underline ? 'underline' : 'none'),
        textAlign: (center ? 'center' : 'left')
      }}>
        {text}
      </Text>
    )
  } else {
    return null;
  }
}
