import { StyleSheet, View, Text } from "react-native";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon Search App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2C5E",
    alignItems: "center",
    width: "80%",
    padding: 20,
    borderRadius: 15,
    marginTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
});

export default Title;
