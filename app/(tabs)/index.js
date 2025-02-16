import { Link } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";

const templates = [
  {
    id: 1,
    title: "Template 1",
    content: "Content 1",
  },
  {
    id: 2,
    title: "Template 2",
    content: "Content 2",
  },
  {
    id: 3,
    title: "Template 3",
    content: "Content 3",
  },
  {
    id: 4,
    title: "Template 4",
    content: "Content 4",
  },
];

export default function Tab() {
  const [templateActive, setTemplateActive] = useState(0);

  const handleTemplateActive = (id) => {
    if (templateActive === id) return setTemplateActive(0);
    setTemplateActive(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/icon-header.png")}
        />
        <View>
          <Text style={styles.headerSubtitle}>Welcome to</Text>
          <Text style={styles.headerTitle}>Letters</Text>
        </View>
      </View>
      <TextInput placeholder="Search letter" style={styles.searchInput} />
      <View style={styles.userLetters}>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderTitle}>My letters</Text>
          <Link href="/letters" style={styles.subHeaderSubtitle}>See all</Link>
        </View>
        <View style={styles.letters}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
              <Text>Letter 4</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.templates}>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderTitle}>Templates</Text>
          <Link href="/templates" style={styles.subHeaderSubtitle}>See all</Link>
        </View>
        <View style={styles.templatesContainer}>
          <ScrollView style={{ paddingTop: 60 }}>
            {templates.map((template) => (
              <Pressable
                key={template.id}
                onPress={() =>handleTemplateActive(template.id + 1)}
                style={[
                  styles.template,
                  templateActive === template.id && { marginTop: -10 },
                ]}
              >
                <Text>{template.title}</Text>
                <Text>{template.content}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
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
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
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
  searchInput: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  userLetters: {
    marginTop: 20,
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeaderTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  subHeaderSubtitle: {
    fontSize: 14,
    color: "#fff",
  },
  letters: {
    flexDirection: "row",
    marginTop: 10,
  },
  letter: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    height: 150,
    width: 250,
    marginRight: 10,
  },
  templates: {
    marginTop: 20,
  },
  templatesContainer: {
    marginTop: 10
  },
  template: {
    backgroundColor: "#E55982",
    borderWidth: 3,
    borderColor: "#fff",
    padding: 10,
    marginTop: -60,
    borderRadius: 10,
    height: 150,
  },
});
