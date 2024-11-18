import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import '../assets/css/main.css'

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          //source={require('./assets/img/logo.png')} // Make sure to place the logo in your assets folder
        />
      </View>

      <View style={styles.layoutShared}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.headerText}>Biên tập và đạo đức xuất bản</Text>
          </View>

          <View style={styles.contentMain}>
            <Text style={styles.subheading}>Biên tập</Text>
            <Text style={styles.text}>
              Chúng tôi cam kết duy trì tiêu chuẩn cao nhất trong biên tập và đánh giá các bài báo. Các bài báo được gửi đến Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ sẽ được đánh giá bởi các nhà nghiên cứu và chuyên gia hàng đầu trong lĩnh vực tương ứng. Quá trình đánh giá sẽ bao gồm:
            </Text>
            <View style={styles.listContainer}>
              <Text style={styles.listItem}>• Đánh giá sơ bộ để xác định tính phù hợp và chất lượng cơ bản của bài báo.</Text>
              <Text style={styles.listItem}>• Đánh giá chuyên sâu bởi ít nhất hai phản biện độc lập và có uy tín trong lĩnh vực.</Text>
              <Text style={styles.listItem}>• Đánh giá và quyết định cuối cùng của Hội đồng Biên tập dựa trên các phản biện và khuyến nghị.</Text>
            </View>

            <Text style={styles.subheading}>Đạo đức Xuất bản</Text>
            <Text style={styles.text}>
              Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ tuân thủ các nguyên tắc đạo đức xuất bản nghiêm ngặt để đảm bảo tính trung thực và độ tin cậy của các công trình nghiên cứu được công bố. Các nguyên tắc chính bao gồm:
            </Text>
            <View style={styles.listContainer}>
              <Text style={styles.listItem}>• Trách nhiệm của tác giả: Tác giả phải đảm bảo rằng các công trình nghiên cứu được công bố là công trình của chính họ, chưa được công bố ở bất kỳ đâu khác và không vi phạm quyền sở hữu trí tuệ.</Text>
              <Text style={styles.listItem}>• Trách nhiệm của nhà xuất bản: Tạp chí cam kết không can thiệp vào nội dung của bài báo và đảm bảo rằng tất cả các bài báo đều được xử lý công bằng và minh bạch.</Text>
              <Text style={styles.listItem}>• Đảm bảo bí mật: Thông tin của bài báo sẽ được giữ bí mật trong suốt quá trình đánh giá và xuất bản.</Text>
              <Text style={styles.listItem}>• Chống đạo văn: Tạp chí sử dụng phần mềm kiểm tra đạo văn để phát hiện các hành vi sao chép và đạo văn trong các bài báo.</Text>
            </View>

            <Text style={styles.text}>
              Chúng tôi khuyến khích các tác giả, biên tập viên và phản biện báo cáo bất kỳ hành vi không đạo đức nào liên quan đến quá trình xuất bản. Mọi cáo buộc sẽ được xem xét nghiêm túc và điều tra đầy đủ để bảo vệ tính trung thực của tạp chí.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footerContainer}>
        {/* Footer content can go here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  banner: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  layoutShared: {
    padding: 16,
  },
  content: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  contentHeader: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentMain: {
    marginTop: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  listContainer: {
    marginLeft: 20,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  footerContainer: {
    height: 60,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
