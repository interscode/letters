import { View, Text, StyleSheet, ScrollView } from "react-native";
import Template1 from "../../templates/template1";
import Template2 from "../../templates/template2";
import { Link } from "expo-router";
import Template3 from "../../templates/template3";

export default function Tab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Templates</Text>
      </View>
      <View>
        <ScrollView>
          <Link href="/edit?templateId=1" style={styles.templateWrapper}>
            <View>
              <View style={styles.template}>
                <Template1 />
              </View>
            </View>
          </Link>
          <Link href="/edit?templateId=2" style={styles.templateWrapper}>
            <View>
              <View style={styles.template}>
                <Template2 />
              </View>
            </View>
          </Link>
          <Link href="/edit?templateId=3" style={styles.templateWrapper}>
            <View>
              <View style={styles.template}>
                <Template3 />
              </View>
            </View>
          </Link>
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  templateWrapper: {
    width: "100%",
    height: 500,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
  },
  template: {
    transform: [{ scale: 0.8 }],
    transformOrigin: "top left",
    width: "125%",
    height: "125%",
  },
});
