import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Linking, Alert, Button } from 'react-native'; // Chỉ cần nhập một lần

//import Fooster from './Fooster';  // Giả sử bạn đã có Fooster
//import Banner from './Banner';      // Giả sử bạn đã có Banner

function Home() {
  return (
    <View style={styles.container}>
      {/* <Banner/> */}
      <ScrollView style={styles.layout}>
        {/* Nội dung chính */}
        <View style={styles.content}>
          <Text style={styles.title}>
            Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ
          </Text>
          <View style={styles.main}>
            <Text style={styles.text}>
              Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ là một tạp chí học thuật uy tín được Bộ Thông tin và Truyền thông cấp Giấy phép hoạt động Báo chí in và Tạp chí điện tử số 9999/GP-BTTTT ngày 01/01/2020. Tạp chí được Cục Thông tin Khoa học và Công nghệ Quốc gia cấp mã số ISSN cho cả Tạp chí in (ISSN 1234-5678) và Tạp chí điện tử (eISSN 8765-4321).
            </Text>
            <Text style={styles.text}>
              Tạp chí là nơi hội tụ các công trình nghiên cứu khoa học từ các giảng viên, học viên, sinh viên, và các nhà nghiên cứu trong nước cũng như quốc tế. Với sứ mệnh tạo ra một diễn đàn trao đổi và công bố các kết quả nghiên cứu khoa học thuộc nhiều lĩnh vực, Tạp chí Khoa học Đại học Kỹ thuật Công nghệ Cần Thơ luôn cam kết đảm bảo chất lượng cao nhất cho các bài báo được đăng tải.
            </Text>
            <Text style={styles.boldText}>Xuất bản định kỳ</Text>
            <Text style={styles.text}>
              Từ năm 2024, Tạp chí được phép xuất bản 10 số định kỳ hàng năm bằng cả tiếng Việt và tiếng Anh, bao gồm:
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>05 số chuyên san Khoa học Kỹ thuật và Công nghệ: Xuất bản vào các tháng 1, 3, 5, 7 và 9.</Text>
              <Text style={styles.listItem}>03 số chuyên san Khoa học Xã hội và Nhân văn: Xuất bản vào các tháng 2, 6, và 10.</Text>
              <Text style={styles.listItem}>02 số chuyên san Khoa học Tự nhiên: Xuất bản vào các tháng 4 và 8.</Text>
            </View>
            <Text style={styles.text}>
              Ngoài các số định kỳ, Tạp chí cũng xuất bản các số đặc biệt theo yêu cầu từ các biên tập viên khách mời nhằm hỗ trợ các hội thảo khoa học trong và ngoài nước. Hội đồng biên tập cũng mời các nhà khoa học có uy tín viết các bài báo tổng quan để hệ thống hóa và định hướng nghiên cứu cho các chuyên ngành.
            </Text>
            <Text style={styles.text}>
              Hội đồng biên tập rất mong nhận được sự hợp tác từ các nhà khoa học, giảng viên, học viên trong và ngoài nước gửi bài báo và tham gia bình duyệt các bài báo của Tạp chí.
            </Text>
          </View>
        </View>

        {/* Slide-bar */}
        <View style={styles.slideBar}>
          <View style={styles.slideBarBoard}>
            <Text style={styles.slideBarTitle}>Tin tức</Text>
            <Text style={styles.slideBarContent} onPress={() => Linking.openURL('#')}>
              CHƯƠNG TRÌNH ASEAN CAMP LẦN THỨ 5 TẠI TRƯỜNG ĐẠI HỌC RAJABHAT RAJANAGARINDRA
            </Text>
            <Text style={styles.date}>(18/07/2024)</Text>

            <Text style={styles.slideBarContent} onPress={() => Linking.openURL('#')}>
              TRƯỜNG ĐẠI HỌC KỸ THUẬT - CÔNG NGHỆ CẦN THƠ TỔ CHỨC HỘI THẢO QUỐC TẾ FOLLOW-ON TESOL UNCONFERENCE
            </Text>
            <Text style={styles.date}>(10/07/2024)</Text>
          </View>

          <View style={styles.slideBarBoard}>
            <Text style={styles.slideBarTitle}>Thành viên và chỉ mục</Text>
            <View style={styles.slideBarIndex}>
              <Image source={{ uri: "https://library.northsouth.edu/wp-content/uploads/2019/09/doaj.jpg" }} style={styles.indexImage} />
              <Image source={{ uri: "https://dthujs.vn/templates/images/indexing/crossref.jpeg" }} style={styles.indexImage} />
              <Image source={{ uri: "https://dthujs.vn/templates/images/indexing/gscholar.png" }} style={styles.indexImage} />
              <Image source={{ uri: "https://kiemtratailieu.vn/wp-content/uploads/2021/11/logo-full-2-2.png" }} style={styles.indexImage} />
              <Image source={{ uri: "ass/img/logo-cty.png" }} style={styles.indexImage} />
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <Fooster /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  main: {
    marginBottom: 16,
  },
  text: {
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 8,
  },
  listItem: {
    marginLeft: 16,
  },
  slideBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slideBarBoard: {
    flex: 1,
    marginHorizontal: 8,
  },
  slideBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  slideBarContent: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
  date: {
    color: 'gray',
  },
  slideBarIndex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  indexImage: {
    width: 80,
    height: 40,
    marginRight: 8,
  },
});

export default Home;
