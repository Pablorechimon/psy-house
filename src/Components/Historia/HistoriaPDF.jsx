import React from "react";
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

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
      });

const HistoriaPDF = ({paciente, historias}) => {

    var historias = historias.map(function(h, i){
        let fecha = h.fecha.split('T')[0]
        console.log(fecha)
        return (
              <View key={i}>
                <View >
                  <Text style={styles.text}>{fecha}</Text>
                  <Text style={styles.text}>{h.historia}</Text>
                </View>
              </View>
            );
      });

    return(
        <Document>
            <Page size="A4" style={styles.body}>
                <Text style={styles.header} fixed>
                    ~ Documento Confidencial ~
                </Text>
            <View >
                <Text style={styles.title}>Historia Clinica del paciente {paciente.nombre} {paciente.apellido}</Text>
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