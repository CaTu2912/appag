import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SubmitArticleScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.banner} />

            <View style={styles.layoutShared}>
                <View style={styles.breadcrumb}>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Trang chủ</Text>
                    </TouchableOpacity>
                    <Text>Gửi bài mới</Text>
                </View>

                <View style={styles.alertContainer}>
                    <Text style={styles.alertText}>
                        <Text style={styles.linkText}>Đăng nhập</Text> hoặc <Text style={styles.linkText}>Đăng kí</Text> để gửi.
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.header}>Danh sách yêu cầu gửi bài</Text>
                    <Text style={styles.mainText}>
                        Là một phần của quá trình gửi, các tác giả được yêu cầu kiểm tra việc tuân thủ tất cả các mục sau của bài nộp của họ và các bài nộp có thể được trả lại cho những tác giả không tuân thủ các nguyên tắc này.
                    </Text>

                    <View style={styles.listGroup}>
                        {renderListItems()}
                    </View>
                </View>

                <View style={styles.content}>
                    <Text style={styles.header}>Thể lệ gửi bài</Text>
                    <Text style={styles.mainText}>
                        Tác giả bài báo chịu trách nhiệm trước pháp luật về chất lượng, nội dung, và tính hợp pháp của bài báo...
                    </Text>
                    <View style={styles.guidelineLinks}>
                        <TouchableOpacity>
                            <Text style={styles.linkText}>Hướng dẫn tác giả.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.linkText}>Hướng dẫn phản biện.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

function renderListItems() {
    const listItems = [
        {
            title: "Định dạng tài liệu",
            content: "Bài viết phải được gửi dưới dạng tệp Microsoft Word (.docx) hoặc PDF (.pdf).",
        },
        {
            title: "Tính nguyên bản",
            content: "Bài viết chưa được xuất bản hoặc đang xem xét ở tạp chí khác.",
        },
        // Add other list items similarly
    ];

    return listItems.map((item, index) => (
        <View key={index} style={styles.listItem}>
            <Icon name="check-circle" size={20} color="green" />
            <Text style={styles.listItemText}>
                <Text style={{ fontWeight: 'bold' }}>{item.title}: </Text>
                {item.content}
            </Text>
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
    alertContainer: {
        backgroundColor: '#d9edf7',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
    },
    alertText: {
        fontSize: 14,
        color: '#31708f',
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
        marginVertical: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    mainText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    listGroup: {
        marginVertical: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    listItemText: {
        fontSize: 14,
        color: '#333',
        marginLeft: 8,
    },
    linkText: {
        color: '#007bff',
    },
    guidelineLinks: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
});
