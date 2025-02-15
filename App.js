import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TemplateChepe from './templates/templateChepe';
import * as ImagePicker from 'expo-image-picker';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TemplateChepe texts={['love', 'Love is a gift that trancends time, a treasure that brings lughts to the darkest days, andd a beacon that guides us through life’s uncertainties.']}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
