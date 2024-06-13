import React, { useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, View } from 'react-native';
import iesgo from "../../assets/iesgo.png";
import Drawer from '../Drawer';
import arrowDown from '../../assets/arrow.png'; 

const CustomTextInput = React.forwardRef(({ placeholder, keyboardType, value }, ref) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#999"
    keyboardType={keyboardType}
    value={value}
    editable={false}
    ref={ref}
  />
));

const inputFields = [
  { placeholder: "Nome", keyboardType: "default" },
  { placeholder: "Telefone", keyboardType: "phone-pad" },
  { placeholder: "Email", keyboardType: "email-address" },
  { placeholder: "CPF", keyboardType: "numeric" },
  { placeholder: "Data De Nascimento", keyboardType: "default" },
  { placeholder: "Profissão", keyboardType: "default" },
  { placeholder: "Sexo", keyboardType: "default" },
  { placeholder: "Marcar Agendamento: dd/mm/aa - hh:mm", keyboardType: "default" },
];

const students = [
  { nome: 'Junio', semestre: '5º', pacientes: 5 },
  { nome: 'Maria', semestre: '4º', pacientes: 3 },
  { nome: 'Pedro', semestre: '6º', pacientes: 4 },
  { nome: 'Julia', semestre: '3º', pacientes: 2 },
];

export default function PatientDetails() {
  const inputRefs = useRef(inputFields.map(() => React.createRef()));
  const [alunosVisible, setAlunosVisible] = useState(false);
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  const toggleAlunos = () => {
    setAlunosVisible(!alunosVisible);
  };

  const selectAluno = (index) => {
    setAlunoSelecionado(index === alunoSelecionado ? null : index);
  };

  return (
    <>
      {/* NavBar fictício */}
      <Drawer title="Detalhes do paciente" />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={iesgo} style={styles.logo} />
        {inputFields.map((field, index) => (
          <CustomTextInput
            key={index}
            ref={inputRefs.current[index]}
            placeholder={field.placeholder}
            keyboardType={field.keyboardType}
          />
        ))}

        {/* Componente Aluno Responsável */}
        <TouchableOpacity style={styles.alunoResponsavel} onPress={toggleAlunos}>
          <Text style={styles.alunoResponsavelText}>
            {alunoSelecionado !== null ? students[alunoSelecionado].nome : 'Aluno Responsável'}
          </Text>
          <Image source={arrowDown} style={[styles.arrowIcon, alunosVisible ? styles.arrowIconUp : null]} />
        </TouchableOpacity>
        
        {/* Lista de alunos (expansível) */}
        {alunosVisible && (
          <View style={styles.alunosList}>
            {students.map((aluno, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.alunoItem, alunoSelecionado === index ? styles.alunoSelecionado : null]}
                onPress={() => selectAluno(index)}
              >
                <Text style={styles.alunoName}>{aluno.nome}</Text>
                <Text>Semestre: {aluno.semestre}</Text>
                <Text>Pacientes: {aluno.pacientes}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Baixar pedido médico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} activeOpacity={0.7}>
          <Text style={styles.saveButtonText}>Salvar Informações</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  downloadButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  downloadButtonText: {
    color: '#000',
  },
  saveButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000080',
    borderRadius: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  alunoResponsavel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  alunoResponsavelText: {
    color: '#333',
    fontSize: 16,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  arrowIconUp: {
    transform: [{ rotate: '180deg' }],
  },
  alunosList: {
    width: '100%',
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  alunoItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  alunoName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  alunoSelecionado: {
    backgroundColor: '#e0e0e0', 
  },
});
