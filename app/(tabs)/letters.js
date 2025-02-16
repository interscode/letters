import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Letters</Text>
        <Text style={styles.headerSubtitle}>
          Edita tus proyectos y compartelos con tus personas especiales!
        </Text>
      </View>
      <View style={styles.userLetters}>
        <ScrollView>
          <View style={styles.letter}>
            <Text>Letter 1</Text>
          </View>
          <View style={styles.letter}>
            <Text>Letter 2</Text>
          </View>
          <View style={styles.letter}>
            <Text>Letter 3</Text>
          </View>
          <View style={styles.letter}>
            <Text>Letter 1</Text>
          </View>
          <View style={styles.letter}>
            <Text>Letter 2</Text>
          </View>
          <View style={styles.letter}>
            <Text>Letter 3</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#E55982",
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#fff",
  },
  userLetters: {
    paddingBottom: 80,
  },
  letter: {
    height: 150,
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
});
