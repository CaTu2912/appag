import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import '../assets/css/main.css'

export default function Guide() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.banner} />

            <View style={styles.layoutShared}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Hướng dẫn phản biện</Text>
                    </View>
                    
                    <View style={styles.main}>
                        <Text style={styles.sectionTitle}>1. Quy định trách nhiệm của người phản biện:</Text>
                        <View style={styles.list}>
                            <Text style={styles.listItem}>- Người phản biện bài báo cho Tạp chí phải có cùng chuyên môn hoặc gần với chuyên môn mà nội dung bài báo đề cập, có khả năng đánh giá chất lượng bài báo trong thời gian quy định.</Text>
                            <Text style={styles.listItem}>- Người phản biện có trách nhiệm đánh giá nội dung khoa học của bài báo một cách khách quan, trung thực; hoàn thành công việc theo đúng yêu cầu của Tạp chí.</Text>
                            <Text style={styles.listItem}>- Thời gian phản biện không quá 30 ngày kể từ thời điểm người phản biện nhận được nội dung bản thảo của bài báo.</Text>
                            <Text style={styles.listItem}>- Người phản biện được trả thù lao theo Quy chế tài chính nội bộ của Trường Đại học Kỹ thuật – Công nghệ Cần Thơ.</Text>
                            <Text style={styles.listItem}>- Phản biện gửi trả bản nhận xét trễ quá 2 lần/1 bài; đánh giá bản thảo bài báo thiếu khách quan, có sai sót thì Ban Biên tập sẽ không tiếp tục mời phản biện.</Text>
                            <Text style={styles.listItem}>- Người phản biện thực hiện quá trình phản biện theo hướng dẫn chi tiết tại đây.</Text>
                        </View>

                        <Text style={styles.sectionTitle}>2. Quy trình phản biện bài báo:</Text>
                        <View style={styles.list}>
                            <Text style={styles.listItem}>- Đối với bản thảo bài báo được đưa vào quy trình bình duyệt, thành viên Hội đồng Biên tập quyết định mời người phản biện đáp ứng yêu cầu quy định.</Text>
                            <Text style={styles.listItem}>- Người phản biện bình duyệt bản thảo bài báo theo các tiêu chuẩn và thời gian quy định. Cho ý kiến tư vấn về chất lượng bài báo theo các phương án:</Text>
                            <View style={styles.subList}>
                                <Text style={styles.subListItem}>• Phương án 1: Bài viết được chấp nhận đăng và không cần chỉnh sửa, bổ sung.</Text>
                                <Text style={styles.subListItem}>• Phương án 2: Bài viết được chấp nhận đăng với điều kiện phải chỉnh sửa, bổ sung theo yêu cầu của người phản biện.</Text>
                                <Text style={styles.subListItem}>• Phương án 3: Bài viết cần được chỉnh sửa, bổ sung và nộp lại cho Tạp chí để gửi đi phản biện lần hai.</Text>
                                <Text style={styles.subListItem}>• Phương án 4: Bài viết không được chấp nhận đăng.</Text>
                            </View>
                            <Text style={styles.listItem}>- Trên cơ sở ý kiến tư vấn của người phản biện và ý kiến đánh giá cá nhân của thành viên Hội đồng Biên tập, thành viên Hội đồng Biên tập ra quyết định theo một trong các phương án trên...</Text>
                            {/* Tiếp tục với các quy trình khác */}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
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
    main: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    list: {
        marginLeft: 8,
    },
    listItem: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555',
        marginBottom: 4,
    },
    subList: {
        marginLeft: 16,
        marginTop: 8,
    },
    subListItem: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555',
    },
});
