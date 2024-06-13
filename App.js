import { StyleSheet, Text, View } from 'react-native';
import PatientDetails from './src/components/PatientDetails';
import Students from './src/components/Students';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PatientDetails/>
      {/* <Students/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
