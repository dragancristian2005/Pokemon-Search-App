import { Image, StyleSheet, Text, View } from "react-native";

const pokemonDetails = ({ name, imgUrl }: { name: string; imgUrl: string }) => {
  return (
    <View style={styles.pokeContainer}>
      <Text style={styles.pokeName}>{name}</Text>
      <Image source={{ uri: `${imgUrl}` }} width={300} height={300} />
    </View>
  );
};

const styles = StyleSheet.create({
  pokeContainer: {
    alignItems: "center",
  },
  pokeName: {
    fontSize: 28,
    marginTop: 20,
  },
});

export default pokemonDetails;
