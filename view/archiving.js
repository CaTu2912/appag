import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function ArchiveScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.banner} />

            <View style={styles.layoutShared}>
                <View style={styles.breadcrumb}>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Trang chủ</Text>
                    </TouchableOpacity>
                    <Text>Lưu trữ</Text>
                </View>

                <ScrollView style={styles.content}>
                    <View style={styles.issueList}>
                        <Text style={styles.yearHeading}>2024</Text>
                        {renderIssues()}
                    </View>
                </ScrollView>
            </View>

            <View style={styles.footer}>
                {/* You can add footer content here */}
            </View>
        </View>
    );
}

function renderIssues() {
    const issues = [
        { title: "Tập. 3 Số. 1 (2024)", link: "#" },
        { title: "Tập. 2 Số. 1 (2024)", link: "#" },
        { title: "Tập. 1 Số. 1 (2024)", link: "#" }
    ];

    return issues.map((issue, index) => (
        <View key={index} style={styles.issueItem}>
            <TouchableOpacity>
                <Text style={styles.issueTitle}>{issue.title}</Text>
            </TouchableOpacity>
        </View>
    ));
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    banner: {
        height: 150,
        backgroundColor: '#ddd',
    },
    layoutShared: {
        padding: 16,
    },
    breadcrumb: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    linkText: {
        color: '#007bff',
    },
    content: {
        marginTop: 20,
    },
    issueList: {
        marginVertical: 10,
    },
    yearHeading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    issueItem: {
        marginVertical: 8,
    },
    issueTitle: {
        fontSize: 18,
        color: '#333',
    },
    footer: {
        height: 50,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
