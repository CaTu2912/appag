import React from 'react';
import { View, Text, ScrollView, Linking, StyleSheet, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { createRouter } from 'expo-router';
import '../assets/css/main.css'

//const router = createRouter();

const AuthorGuideScreen = () => (
    <ScrollView style={styles.container}>
        {/* Banner */}
        <View style={styles.banner} />

        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerText}>Hướng dẫn tác giả</Text>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
            <Text style={styles.sectionTitle}>1. Quy định về trách nhiệm của tác giả:</Text>
            <View style={styles.list}>
                <Text style={styles.listItem}>• Tác giả bài báo chịu trách nhiệm trước pháp luật về chất lượng, nội dung, tính hợp pháp của bài báo...</Text>
                <Text style={styles.listItem}>• Tác giả bài báo phải tuân thủ quy định về đăng bài trên Tạp chí...</Text>
                {/* Add other list items here */}
            </View>

            <Text style={styles.sectionTitle}>2. Quy định hình thức và kết cấu nội dung của bài báo:</Text>
            <View style={styles.list}>
                <Text style={styles.listItem}>• Bản thảo bài báo gửi đăng phải là công trình nguyên tác...</Text>
                {/* Add other list items here */}
            </View>

            <Text style={styles.sectionTitle}>Hướng dẫn trình bày bản thảo bài báo:</Text>
            <TouchableOpacity onPress={() => Linking.openURL('#')}>
                <Text style={styles.link}>Tải về</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Mẫu phiếu cung cấp thông tin tác giả:</Text>
            <TouchableOpacity onPress={() => Linking.openURL('#')}>
                <Text style={styles.link}>Tải về</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Mẫu phiếu giải trình chỉnh sửa bài báo:</Text>
            <TouchableOpacity onPress={() => Linking.openURL('#')}>
                <Text style={styles.link}>Tải về</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>3. Quy trình gửi bài báo:</Text>
            <View style={styles.list}>
                <Text style={styles.listItem}>• Để gửi bản thảo bài báo cho Tạp chí, tác giả liên hệ cần đăng ký tài khoản với đầy đủ thông tin liên quan...</Text>
                {/* Add other list items here */}
            </View>

            <Text style={styles.sectionTitle}>4. Quy trình nhận bài:</Text>
            <View style={styles.list}>
                <Text style={styles.listItem}>• Sau khi tiếp nhận bản thảo bài báo của tác giả, Ban Thư ký sẽ kiểm tra, rà soát các yêu cầu về mặt hình thức...</Text>
                {/* Add other list items here */}
            </View>
        </View>

        {/* Footer */}
        <View style={styles.footer} />
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    banner: {
        height: 150,
        backgroundColor: '#f8f8f8',
    },
    header: {
        padding: 20,
        backgroundColor: '#007bff',
    },
    headerText: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    list: {
        marginTop: 5,
        marginBottom: 15,
    },
    listItem: {
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 5,
    },
    link: {
        color: '#007bff',
        fontSize: 16,
        textDecorationLine: 'underline',
        marginTop: 5,
    },
    footer: {
        height: 100,
        backgroundColor: '#f8f8f8',
    },
});

export default AuthorGuideScreen;