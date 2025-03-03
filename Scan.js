
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const ScanScreen = () => {
    return (
      <ImageBackground 
            source={require('./assets/scan.png')}
            style={styles.background}
      >

        <View style={styles.container}>
            {/* Back button */}
            <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity>

            {/* Camera Scan */}
            <View style={styles.scanBox}>
                <Image 
                    //source={require('./assets/qr.png')}
                    style={styles.productImage} 
                />
            </View>

            {/* Product Information */}
            <View style={styles.productInfo}>
                <Text style={styles.productTitle}>Lauren's</Text>
                <Text style={styles.productName}>Orange Juice</Text>
                <Image 
                    source={require('./assets/scan.png')}
                    style={styles.icon}
                />
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>  
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        padding: 20,
    },
    container: { 
      flex: 1, 
      //backgroundColor: '#f8f8f8', 
      padding: 40,
    },
    backButton: { 
      position: 'absolute', 
      top: 40, 
      left: 20 },
    backText: { 
      fontSize: 24 },
    scanBox: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' },
    productImage: { 
      width: 200, 
      height: 300, 
      borderRadius: 10 },
    productInfo: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: 20,
      width: 350,
      left: -20, 
      backgroundColor: '#fff', 
      borderRadius: 20 },
    productTitle: { 
      fontSize: 14,
      top:-20,
      left: 95,
      color: '#666' },
    productName: { 
      fontSize: 18,
      left: 20, 
      fontWeight: 'bold' },
    addButton: { 
      width: 40, 
      height: 40, 
      borderRadius: 10, 
      backgroundColor: '#007AFF', 
      justifyContent: 'center', 
      alignItems: 'center' },
    addText: { 
      color: '#fff', 
      fontSize: 24 },
    icon: {
      top: 1, 
      width: 50,
      height: 50,
      left: -200, 
      borderRadius: 10 ,
    },
});

export default ScanScreen;
