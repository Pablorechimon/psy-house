import React from "react";
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import PacientesFilter from "../Pacientes/PacientesFilter";

    // Create styles
    Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
      });
      
      const styles = StyleSheet.create({
        body: {
          paddingTop: 35,
          paddingBottom: 65,
          paddingHorizontal: 35,
        },
        title: {
          fontSize: 24,
          textAlign: 'center',
          fontFamily: 'Oswald'
        },
        author: {
          fontSize: 12,
          textAlign: 'center',
          marginBottom: 40,
        },
        subtitle: {
          fontSize: 18,
          margin: 12,
          fontFamily: 'Oswald'
        },
        text: {
          margin: 12,
          fontSize: 14,
          textAlign: 'justify',
          fontFamily: 'Times-Roman'
        },
        image: {
          marginVertical: 15,
          marginHorizontal: 100,
        },
        header: {
          fontSize: 12,
          marginBottom: 20,
          textAlign: 'center',
          color: 'grey',
        },
        pageNumber: {
          position: 'absolute',
          fontSize: 12,
          bottom: 30,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'grey',
        },
        table: { 
            display: "table", 
            width: "auto", 
            borderStyle: "solid", 
            borderWidth: 1, 
            borderRightWidth: 0, 
            borderBottomWidth: 0 
          }, 
          tableRow: { 
            margin: "auto", 
            flexDirection: "row" 
          }, 
          tableCol: { 
            width: "25%", 
            borderStyle: "solid", 
            borderWidth: 1, 
            borderLeftWidth: 0, 
            borderTopWidth: 0 
          }, 
          tableCell: { 
            margin: "auto", 
            marginTop: 5, 
            fontSize: 10 
          }
      });

const HistoriaPDF = ({paciente, historias}) => {

    var historias = historias.map(function(h, i){
        let fecha = h.fecha.split('T')[0]
        return (
              <View key={i}>
                <View >
                  <Text style={styles.text}>{fecha}</Text>
                  <Text style={styles.text}>{h.historia}</Text>
                </View>
              </View>
            );
      });

      const getFechaNacimiento = () => {
        if (paciente.fecha_nacimiento){
          return paciente.fecha_nacimiento.split('T')[0]
        }
        return '-'
      }

    // let fecha_actual = new Date()

    return(
        <Document>
            <Page size="A4" style={styles.body}>
                <Text style={styles.header} fixed>
                    ~ Documento Confidencial ~
                </Text>
            <View >
                <Text style={styles.title}>Historia Clinica del paciente {paciente.nombre} {paciente.apellido}</Text>
                {/* <Text style={styles.subtitle}>{fecha_actual}</Text> */}
                <View style={styles.table}> 
                    <View style={styles.tableRow}> 
                        <View style={styles.tableCol}> 
                            <Text style={styles.tableCell}>Nombre: {paciente.nombre}</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                            <Text style={styles.tableCell}>Apellido: {paciente.apellido}</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                            <Text style={styles.tableCell}>DNI: {paciente.DNI}</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                            <Text style={styles.tableCell}>Fecha de Nacimiento: {getFechaNacimiento()}</Text> 
                        </View> 
                    </View>
                    <View style={styles.tableRow}> 
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Email: {paciente.email}</Text> 
                        </View>
                        <View style={styles.tableCol}> 
                            <Text style={styles.tableCell}>Localidad: {paciente.localidad}</Text> 
                        </View> 
                        <View style={styles.tableCol}> 
                            <Text style={styles.tableCell}>Motivo de Consulta: {paciente.motivo_de_consulta}</Text> 
                        </View> 

                        <View style={styles.tableCol}> 
                            <Text style={styles.tableCell}>Tratamiento Finalizado?: {paciente.tratamiento_finalizado ? 'Si' : 'No'}</Text> 
                        </View> 
                    </View> 
                </View>   
                
                {/* Datos de Paciente Aqui */}
            </View>
            <View >     
            <Text style={styles.subtitle}>Historia</Text>
            </View>
            {historias}
            </Page>
        </Document>
    )
}

export default HistoriaPDF