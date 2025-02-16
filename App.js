import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TemplateGael from './templates/templateGael';


export default function App() {
  return (
    <View style={styles.container}>
      <TemplateGael texts={["Happy Valentine's Day","14.032","Los quiero"]} />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',    
  },
});
