import { IconArrowLeft } from "@tabler/icons-react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";

export default function Edit() {
  const { templateId } = useLocalSearchParams();
  const [Template, setTemplate] = useState(null);
  const viewShotRef = useRef(null);

  useEffect(() => {
    async function setAsyncTemplate() {
      try {
        let templateModule;
        if (templateId === "1") {
          templateModule = await import("../templates/template1");
        } else if (templateId === "2") {
          templateModule = await import("../templates/template2");
        } else if (templateId === "3") {
          templateModule = await import("../templates/template3");
        }

        if (templateModule) {
          setTemplate(() => templateModule.default);
        }
      } catch (error) {
        console.error("Error loading template:", error);
      }
    }

    setAsyncTemplate();
  }, [templateId]);

  const captureAndShare = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error("Error al compartir:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/templates" asChild>
          <Pressable style={styles.backButton}>
            <IconArrowLeft size={24} color="#E55982" />
          </Pressable>
        </Link>
        <Text style={styles.headerTitle}>Edit template</Text>
      </View>
      <View style={styles.editContainer}>
        <View style={styles.edit}>
          <ViewShot ref={viewShotRef} options={{ format: "png", quality: 0.9 }}>
            {Template ? <Template /> : <Text>Cargando template...</Text>}
          </ViewShot>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.buttonShare} onPress={captureAndShare}>
          <Text>Share</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#E55982",
    paddingHorizontal: 20,
  },
  edit: {
    transform: [{ scale: 1 }],
    transformOrigin: "top left",
    width: "100%",
    height: "100%",
  },
  editContainer: {
    width: "100%",
    height: "80%",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
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
  backButton: {
    backgroundColor: "#f8f8ff",
    marginRight: 10,
    borderRadius: 5,
    padding: 5
  },
  buttonShare: {
    backgroundColor: "#f8f8ff",
    borderRadius: 5,
    padding: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
