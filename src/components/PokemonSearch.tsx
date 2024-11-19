import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

interface PokeProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  fetchPokemon: (name: string) => Promise<void>;
}

const PokemonSearch = ({ name, setName, fetchPokemon }: PokeProps) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Enter a pokemon name:"
        style={styles.searchBox}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={() => fetchPokemon(name)}
      >
        <Text style={styles.searchBtnTxt}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    height: 35,
    justifyContent: "center",
    marginTop: "10%",
  },
  searchBox: {
    backgroundColor: "white",
    width: "65%",
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    padding: 10,
  },
  searchBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#3466AF",
    width: 60,
  },
  searchBtnTxt: {
    color: "white",
  },
});

export default PokemonSearch;
