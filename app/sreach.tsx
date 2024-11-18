import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import '../assets/css/main.css'

export default function HomeScreen() {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        // Thực hiện hành động tìm kiếm
        console.log('Tìm kiếm:', search);
    };

    return (
        <View style={styles.container}>
            <View style={styles.banner} />

            <View style={styles.layoutShared}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Tìm kiếm</Text>
                    </View>
                    
                    <View style={styles.navSearch}>
                        <TextInput
                            style={styles.input}
                            placeholder="Tìm kiếm"
                            value={search}
                            onChangeText={setSearch}
                        />
                        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                            <Icon name="search" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    banner: {
        height: 200,
        backgroundColor: '#ddd',
    },
    layoutShared: {
        padding: 16,
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    header: {
        marginBottom: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    navSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    searchButton: {
        marginLeft: 8,
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 8,
    },
});
