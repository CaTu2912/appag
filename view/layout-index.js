import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function ArticleScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.banner} />

            <View style={styles.layoutShared}>
                <View style={styles.breadcrumb}>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Trang chủ</Text>
                    </TouchableOpacity>
                    <Text> </Text>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Lưu trữ</Text>
                    </TouchableOpacity>
                    <Text> </Text>
                    <Text>Tập. 1 Số. 1 (2024) Khoa công nghệ thông tin</Text>
                </View>

                <ScrollView style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.articleHeader}>
                            <Text style={styles.articleTitle}>Ứng dụng trí tuệ nhân tạo trong việc tối ưu hóa hệ thống quản lý dữ liệu tại Khoa Công nghệ Thông tin</Text>
                            <View style={styles.authorInfo}>
                                <Text style={styles.authorText}><strong>Tác giả:</strong> Nguyễn Hoàng Thanh, Nguyễn Thành Tuấn, Nguyễn Thị Cát Tường</Text>
                                <TouchableOpacity>
                                    <Text style={styles.emailIcon}>📧</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.contactText}>Liên hệ tác giả: Hoctrohoangthanh@gmail.com</Text>
                        </View>

                        <View style={styles.sidebar}>
                            <TouchableOpacity style={styles.pdfButton}>
                                <Text style={styles.pdfText}>PDF <i className="fa-solid fa-file-pdf"></i></Text>
                            </TouchableOpacity>
                            <View style={styles.panel}>
                                <Text style={styles.panelHeading}>Số xuất bản</Text>
                                <Text>Tập. 1 Số. 1 (2024)</Text>
                            </View>
                            <View style={styles.panel}>
                                <Text style={styles.panelHeading}>Chuyên mục</Text>
                                <Text>Công nghệ thông tin</Text>
                            </View>
                            <View style={styles.panel}>
                                <Text style={styles.panelHeading}>Trích dẫn bài báo</Text>
                                <Text>—</Text>
                            </View>
                        </View>

                        <View style={styles.articleDetails}>
                            <View style={styles.articleSummary}>
                                <Text style={styles.sectionTitle}>Abstract</Text>
                                <Text style={styles.abstractText}>Recent studies have shown that low-cost multispectral sensors...</Text>
                                <Text><strong>Keywords:</strong> Low-cost, nondestructive assessment, multispectral sensor</Text>
                            </View>

                            <View style={styles.articleSummary}>
                                <Text style={styles.sectionTitle}>Tóm tắt</Text>
                                <Text style={styles.abstractText}>Nhiều nghiên cứu gần đây cho thấy cảm biến đa phổ giá thành thấp...</Text>
                                <Text><strong>Từ khóa:</strong> Đánh giá không phá hủy, cảm biến đa phổ, giá thấp</Text>
                            </View>

                            <View style={styles.articleSummary}>
                                <Text style={styles.sectionTitle}>Từ khóa</Text>
                                <Text>Công nghệ thông tin, đại học, quận Ninh Kiều, TP.Cần Thơ</Text>
                            </View>

                            <View style={styles.articleSummary}>
                                <Text style={styles.sectionTitle}>Tài liệu tham khảo</Text>
                                <Text>Ban Chấp hành Trung ương. (2013). Nghị quyết 29- NQ/TW...</Text>
                                <TouchableOpacity>
                                    <Text style={styles.referenceLink}>🔗</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.relatedArticles}>
                    <Text style={styles.relatedTitle}>Các bài viết được đọc nhiều nhất của cùng tác giả</Text>
                    <View style={styles.relatedList}>
                        {renderRelatedArticles()}
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                {/* Footer content can go here */}
            </View>
        </View>
    );
}

function renderRelatedArticles() {
    const relatedArticles = [
        {
            authors: "Nguyễn Văn A, Trần Thị B",
            title: "Quản lý thiết bị dạy học hiện tại tại các trường tiểu học huyện Lộc Ninh, tỉnh Bình Phước",
            link: "https://ctuet.edu.vn/tin-tuc.html"
        },
        {
            authors: "Nguyễn Văn A, Lê Thị C",
            title: "Quản lý thiết bị dạy học hiện tại tại các trường trung học cơ sở huyện Thanh Trì, tỉnh Sóc Trăng",
            link: "https://ctuet.edu.vn/tin-tuc.html"
        },
        // Add more articles as needed
    ];

    return relatedArticles.map((article, index) => (
        <View key={index} style={styles.relatedItem}>
            <Text>{article.authors}</Text>
            <TouchableOpacity>
                <Text style={styles.relatedLink} onPress={() => openLink(article.link)}>{article.title}</Text>
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
    row: {
        flexDirection: 'row',
    },
    articleHeader: {
        flex: 3,
    },
    articleTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    authorInfo: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    authorText: {
        marginRight: 10,
    },
    emailIcon: {
        fontSize: 20,
    },
    contactText: {
        marginTop: 10,
    },
    sidebar: {
        flex: 1,
        marginLeft: 20,
    },
    pdfButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 20,
        alignItems: 'center',
    },
    pdfText: {
        color: 'white',
    },
    panel: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    panelHeading: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    articleDetails: {
        flex: 3,
        marginLeft: 20,
    },
    articleSummary: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    abstractText: {
        fontSize: 16,
        marginBottom: 10,
    },
    referenceLink: {
        color: '#007bff',
    },
    relatedArticles: {
        marginTop: 20,
    },
    relatedTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    relatedList: {
        marginTop: 10,
    },
    relatedItem: {
        marginBottom: 10,
    },
    relatedLink: {
        color: '#007bff',
    },
    footer: {
        height: 50,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
