import { Alert, StyleSheet, View } from "react-native";
import Title from "./src/components/Title";
import KContainer from "./src/components/KContainer";
import { useState } from "react";
import PokemonDetails from "./src/components/PokemonDetails";
import PokemonSearch from "./src/components/PokemonSearch";

export default function App() {
  const [name, setName] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");

  const fetchPokemon = async (name: string) => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`,
      );
      if (res.ok) {
        const data = await res.json();
        setImgUrl(data.sprites.front_default);
      } else {
        Alert.alert("Pokemon doesn't exist!");
        setImgUrl("");
      }
    } catch (e) {
      console.error("Failed to fetch data:", e);
    }
  };

  return (
    <KContainer>
      <Title />
      <View style={styles.container}>
        <PokemonSearch
          name={name}
          setName={setName}
          fetchPokemon={fetchPokemon}
        />
        <PokemonDetails name={name} imgUrl={imgUrl} />
      </View>
    </KContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "55%",
    backgroundColor: "#FFCB05",
    marginTop: 25,
    borderRadius: 15,
  },
});
