import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import '../assets/css/main.css'

const PublicationFrequency = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tần suất xuất bản</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ xuất bản định kỳ 09 số mỗi năm, bao gồm:</Text>
        </Text>
        
        <View style={styles.list}>
          <Text style={styles.listItem}>- Số 1: Chuyên san Khoa học Xã hội và Nhân văn (Tiếng Việt) xuất bản trước ngày 15/02.</Text>
          <Text style={styles.listItem}>- Số 2: Chuyên san Khoa học Tự nhiên (Tiếng Việt) xuất bản trước ngày 15/03.</Text>
          <Text style={styles.listItem}>- Số 3: Chuyên san Khoa học Xã hội và Nhân văn (Tiếng Anh) xuất bản trước ngày 15/04.</Text>
          <Text style={styles.listItem}>- Số 4: Chuyên san Khoa học Xã hội và Nhân văn (Tiếng Việt) xuất bản trước ngày 15/06.</Text>
          <Text style={styles.listItem}>- Số 5: Chuyên san Khoa học Tự nhiên (Tiếng Anh) xuất bản trước ngày 15/07.</Text>
          <Text style={styles.listItem}>- Số 6: Chuyên san Khoa học Xã hội và Nhân văn (Tiếng Việt) xuất bản trước ngày 15/08.</Text>
          <Text style={styles.listItem}>- Số 7: Chuyên san Khoa học Xã hội và Nhân văn (Tiếng Anh) xuất bản trước ngày 15/10.</Text>
          <Text style={styles.listItem}>- Số 8: Chuyên san Khoa học Tự nhiên (Tiếng Việt) xuất bản trước ngày 15/11.</Text>
          <Text style={styles.listItem}>- Số 9: Chuyên san Khoa học Xã hội và Nhân văn (Tiếng Việt) xuất bản trước ngày 15/12.</Text>
        </View>

        <Text style={styles.paragraph}>
          Để biết thêm thông tin về các số đặc biệt và các bài viết đã xuất bản, vui lòng truy cập vào{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://ctuet.vn/')}>Hệ thống quản lý xuất bản kỹ thuật số của Tạp chí</Text>.
        </Text>
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
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    paddingLeft: 20,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default PublicationFrequency;
