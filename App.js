import { StyleSheet, Text, View } from 'react-native';
import PatientDetails from './src/components/PatientDetails';
import Students from './src/components/Students';
import { SafeAreaView } from 'react-native';
import StudentDetails from './src/components/StudentDetails';
import Patient from './src/components/Patient';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <PatientDetails/> */}
      {/* <Students/> */}
      {/* <StudentDetails/> */}
      {/* <Patient/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
