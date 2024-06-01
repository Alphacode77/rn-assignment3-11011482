import { View, Text, StyleSheet, ScrollView } from "react-native";
import Frame1 from "./Components/Frame1";
import SearchBar from "./Components/SearchBar";
import CategorySection from "./Components/CategorySection";
import OngoingTask from "./Components/OngoingTask";

export default function App() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Frame1 />
          <SearchBar />
          <CategorySection />
          <OngoingTask />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 52,
    padding: 20,
    backgroundColor: "#F7F0E8",
  },
});
