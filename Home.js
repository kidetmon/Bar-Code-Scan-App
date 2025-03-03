import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.greeting}>Hello 👋</Text>
                <Text style={styles.name}>Christie Doe</Text>
                <Image 
                    source={require('./assets/face.png')}
                    style={styles.profileImage} 
                />
            </View>

            {/* Insights */}
            <View style={styles.insights}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ScanScreen')}>
                    <Text style={styles.cardTitle}>Scan new</Text>
                    <Text style={styles.cardSubtitle}>Scanned 483</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, { backgroundColor: '#ffcccb' }]}>
                    <Text style={styles.cardTitle}>Counterfeits</Text>
                    <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardTitle}>Success</Text>
                    <Text style={styles.cardSubtitle}>Checkouts 8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardTitle}>Directory</Text>
                    <Text style={styles.cardSubtitle}>History 26</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff', 
      padding: 20 },
    header: { 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      marginBottom: 20 },
    greeting: {
      top: 30,
      fontSize: 18, 
      fontWeight: 'bold' },
    name: { 
      fontFamily: 'HelveticaNowDisplay',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 21.84,
      width: 100,
      height: 20,
      top: 55,
      left: -150,
      },
    profileImage: {
      top: 45, 
      width: 50,
      height: 50, 
      borderRadius: 20 },
    insights: { 
      top: 100,
      width: 360,
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      justifyContent: 'space-between',
      //width: 158,
      height: 300,
      //top: 150,
      left: 10,
    },
    card: { 
      width: '48%', 
      padding: 20, 
      backgroundColor: '#f0f0f0', 
      borderRadius: 10, 
      marginBottom: 10,

     },
    cardTitle: { 
      fontSize: 16, 
      fontWeight: 'bold' },
    cardSubtitle: { 
      fontSize: 12, 
      color: '#666' },
});

export default HomeScreen;