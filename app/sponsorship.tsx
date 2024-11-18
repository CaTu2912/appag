import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import '../assets/css/main.css'

export default function SponsorshipScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner} />

      <View style={styles.layoutShared}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Tài trợ tạp chí</Text>
          </View>

          <View style={styles.main}>
            <Text style={styles.sectionTitle}>Tài trợ và Chính sách Phí:</Text>
            <Text style={styles.contentText}>
              Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ được tài trợ bởi Trường Đại học Kỹ thuật – Công nghệ Cần Thơ.
              Chính sách của Tạp chí là không tính phí nộp bài và phí xuất bản. Chúng tôi cam kết cung cấp quyền truy cập mở ngay lập tức
              vào nội dung của tạp chí theo nguyên tắc cung cấp nghiên cứu miễn phí cho công chúng, nhằm hỗ trợ việc trao đổi kiến thức toàn cầu.
            </Text>

            <Text style={styles.sectionTitle}>Cung cấp Bản in:</Text>
            <Text style={styles.contentText}>
              Mỗi tác giả và đồng tác giả sẽ nhận được một bản in miễn phí của tạp chí có bài viết được đăng, giao trực tiếp tại Tòa soạn hoặc
              qua đường bưu điện. Tác giả có thể đặt mua thêm bản in của tạp chí sau khi thanh toán trước phí token và phí bưu điện.
            </Text>
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
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 16,
  },
});
