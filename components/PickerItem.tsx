import { Text, TouchableOpacity } from "react-native";
import Card from "./Card";

type Props = {
  university: { name: string, link: string },
  onPress: () => void,
}

export default function PickerItem({ university, onPress } : Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card text={university.name} link={university.link} />
    </TouchableOpacity>
  )
}