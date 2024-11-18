import React from 'react';
import { View, Text, ScrollView, Linking, StyleSheet } from 'react-native';
import '../assets/css/main.css'

const GeneralPolicies = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chính sách chung và các nguyên tắc</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionHeader}>Chính sách về các nhóm lĩnh vực:</Text>
        <Text style={styles.paragraph}>
          Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ bao gồm hai chuyên san với các lĩnh vực như sau:
        </Text>
        
        <Text style={styles.subHeader}>(1) Chuyên san Khoa học Xã hội và Nhân văn</Text>
        <Text style={styles.paragraph}>
          Các chuyên ngành được đề cập trong phần này có liên quan đến sự tiến bộ của khoa học xã hội và nhân văn...
        </Text>

        <Text style={styles.subHeader}>(2) Chuyên san Khoa học Tự nhiên</Text>
        <Text style={styles.paragraph}>
          Phần này xuất bản các tài liệu nghiên cứu hoặc đánh giá ban đầu liên quan đến sự phát triển của tất cả các loại...
        </Text>

        <Text style={styles.listHeader}>Chuyên san Khoa học Xã hội và Nhân văn</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>- Mở bài nộp</Text>
          <Text style={styles.listItem}>- Đã lập chỉ mục</Text>
          <Text style={styles.listItem}>- Đã được bình duyệt</Text>
        </View>

        <Text style={styles.listHeader}>Chuyên san Khoa học Tự nhiên</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>- Mở bài nộp</Text>
          <Text style={styles.listItem}>- Đã lập chỉ mục</Text>
          <Text style={styles.listItem}>- Đã được bình duyệt</Text>
        </View>

        <Text style={styles.sectionHeader}>Quá trình bình duyệt:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>- Bất kỳ bản thảo nào trong phạm vi...</Text>
          <Text style={styles.listItem}>
            - Quá trình gửi bài và phản biện được thực hiện hoàn toàn trực tuyến tại địa chỉ{' '}
            <Text style={styles.link} onPress={() => Linking.openURL('https://ctuet.vn/')}>
              https://ctuet.vn/
            </Text>
          </Text>
        </View>

        <Text style={styles.sectionHeader}>Chính sách truy cập mở:</Text>
        <Text style={styles.paragraph}>
          Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ cung cấp quyền truy cập mở ngay lập tức...
        </Text>

        {/* Additional sections can be added here following the same pattern */}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
  listHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  list: {
    paddingLeft: 20,
    marginTop: 10,
  },
  listItem: {
    fontSize: 14,
    lineHeight: 20,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default GeneralPolicies;
