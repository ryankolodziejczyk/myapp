import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    //works because the styles.container in view
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ height: 40 }} />
      <TouchableOpacity
        onPress={() => alert("1500 VBucks and you can learn to scam too!")}
      >
        <Image
          source={{
            uri: "https://pbs.twimg.com/media/Fbkn48NXEAECWfh?format=jpg&name=medium",
          }}
          style={styles.saul}
        />
      </TouchableOpacity>
      <View style={{ height: 40 }} />
      <View style={styles.textContain}>
        <View style={styles.color1}>
          <Text style={styles.text}>
            Hello, my name is Ryan Kolodziejczyk, I am a Senior at the Avon Old
            Farms School for Boys
          </Text>
        </View>
        <View style={styles.color2}>
          <Text style={styles.text2}>
            Mr. Sayles is currently teaching me how to make my own website in
            the Mobile App course!
          </Text>
        </View>
        <View style={styles.color3}>
          <Text style={styles.text3}>
            I enjoy playing baseball, spending time with my friends, and
            watching sports games on our big TV in the dio triple! I have been
            going down to the field every day and hitting with my buddies Dave,
            Aiden, Collin, and Max.
          </Text>
        </View>
        <View style={{ height: 140 }} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//styles for color and background
const styles = StyleSheet.create({
  container: {
    backgroundColor: "turquoise",
    alignItems: "center",
    justifyContent: "center",
  },
  color1: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  color2: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  color3: {
    backgroundColor: "magenta",
    alignItems: "center",
    justifyContent: "center",
  },
  textContain: {
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  saul: {
    width: 1084,
    height: 610,
  },
  text: {
    lineHeight: 26,
    color: "darkblue",
    fontSize: 24,
    fontFamily: "Baskerville-SemiBoldItalic",
  },
  text2: {
    lineHeight: 90,
    color: "darkblue",
    fontSize: 24,
    fontFamily: "Baskerville-SemiBoldItalic",
  },
  text3: {
    lineHeight: 22,
    color: "darkblue",
    fontSize: 20,
    fontFamily: "Baskerville-SemiBoldItalic",
  },
});
