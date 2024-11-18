import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import '../assets/css/main.css'

const JournalPurposeAndScope = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mục đích và phạm vi của tạp chí</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Tôn chỉ, mục đích</Text>
        
        <View style={styles.list}>
          <Text style={styles.listItem}>- Thông tin về hoạt động của Trường Đại học Kỹ thuật – Công nghệ Cần Thơ.</Text>
          <Text style={styles.listItem}>- Định kỳ theo kỳ hạn xuất bản... thuộc các lĩnh vực đào tạo, giảng dạy của Trường Đại học Kỹ thuật – Công nghệ Cần Thơ.</Text>
        </View>
        
        <Text style={styles.sectionTitle}>Trọng tâm và phạm vi</Text>
        <Text style={styles.paragraph}>
          Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ là tạp chí học thuật truy cập mở... 
          chủ yếu tập trung vào các chủ đề nêu trên trong bối cảnh Việt Nam... 
          cũng hoan nghênh các bài nộp đề cập đến các chủ đề đó trong bối cảnh cộng đồng ASEAN.
        </Text>
        
        <Text style={styles.paragraph}>
          Những đóng góp cho Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ có thể được thực hiện... 
          tài liệu tuân theo một phương pháp cụ thể.
        </Text>
        
        <Text style={styles.paragraph}>
          Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ xuất bản 09 số/năm... 
          trên Hệ thống quản lý xuất bản kỹ thuật số của Tạp chí.
        </Text>
        
        <Text style={styles.paragraph}>
          Bên cạnh các số định kỳ đa ngành, đa lĩnh vực, Tạp chí cũng xuất bản... 
          chuyên ngành, hệ thống hóa những vấn đề đã được giải quyết và gợi ý những định hướng nghiên cứu tiếp theo cho chuyên ngành.
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 10,
  },
  list: {
    paddingLeft: 20,
    marginBottom: 10,
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

export default JournalPurposeAndScope;
