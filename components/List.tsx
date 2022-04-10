import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

type Props = {
  title: string, 
  items: string[],
}

export default function List({ title, items} : Props) {
  return (
    <View style={{ marginTop: '7%' }}>
      <AppText 
        title={true}
        size={24}
        color={Colors.dark.text}
        text={title}
      />
      <View style={styles.group}>
        {items.map((option, optionIdx) => (
          <View 
            key={option}
            style={styles.button} 
          >
            <View style={styles.text}>
              <AppText 
                size={14}
                text={option}
                title={false}
                color="white"
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group: {
    width: '100%',
    flexDirection: 'row',
    alignItems: "flex-start",
    marginTop: 7,
    flexWrap: 'wrap'
  },
  button: { 
    backgroundColor: Colors.lightPurple.text,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 7,
  },
  text: {
    alignItems: 'center',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});