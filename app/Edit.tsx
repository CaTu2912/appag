import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import '../assets/css/main.css'

const App = () => {
  const openEmail = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        {/* You can add an image or logo here if needed */}
      </View>

      <View style={styles.layoutShared}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.headerText}>Ban biên tập</Text>
          </View>

          <View style={styles.contentMain}>
            {/* Tổng Biên Tập */}
            <Text style={styles.subheading}>TỔNG BIÊN TẬP</Text>
            <TouchableOpacity onPress={() => openEmail('phamquocanh@ctu.edu.vn')}>
              <Text style={styles.text}>Phạm Quốc Anh</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Trường Đại học Kỹ thuật - Công nghệ Cần Thơ, Việt Nam</Text>
            <Text style={styles.emailText}>Email: phamquocanh@ctu.edu.vn</Text>

            {/* Phó Tổng Biên Tập */}
            <Text style={styles.subheading}>PHÓ TỔNG BIÊN TẬP</Text>
            <TouchableOpacity onPress={() => openEmail('lehongson@ctu.edu.vn')}>
              <Text style={styles.text}>Lê Hồng Sơn</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Trường Đại học Kỹ thuật - Công nghệ Cần Thơ, Việt Nam</Text>
            <Text style={styles.emailText}>Email: lehongson@ctu.edu.vn</Text>

            {/* Biên Tập Viên Tiếng Anh */}
            <Text style={styles.subheading}>BIÊN TẬP VIÊN TIẾNG ANH</Text>
            <TouchableOpacity onPress={() => openEmail('thanhhuong@ctu.edu.vn')}>
              <Text style={styles.text}>Nguyễn Thị Thanh Hương</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Trường Đại học Kỹ thuật - Công nghệ Cần Thơ, Việt Nam</Text>
            <Text style={styles.emailText}>Email: thanhhuong@ctu.edu.vn</Text>

            {/* Ban Thư Ký */}
            <Text style={styles.subheading}>BAN THƯ KÝ</Text>
            <TouchableOpacity onPress={() => openEmail('minhchau@ctu.edu.vn')}>
              <Text style={styles.text}>Trần Minh Châu</Text>
            </TouchableOpacity>
            <Text style={styles.text}>(Biên tập viên, Trưởng ban Thư ký) - Trường Đại học Kỹ thuật - Công nghệ Cần Thơ, Việt Nam</Text>
            <TouchableOpacity onPress={() => openEmail('nguyenvannam@ctu.edu.vn')}>
              <Text style={styles.text}>Nguyễn Văn Nam</Text>
            </TouchableOpacity>
            <Text style={styles.text}>(Biên tập viên, Thư ký) - Trường Đại học Kỹ thuật - Công nghệ Cần Thơ, Việt Nam</Text>
            <TouchableOpacity onPress={() => openEmail('phanhuunghia@ctu.edu.vn')}>
              <Text style={styles.text}>Phan Hữu Nghĩa</Text>
            </TouchableOpacity>
            <Text style={styles.text}>(Biên tập viên, Thư ký) - Trường Đại học Kỹ thuật - Công nghệ Cần Thơ, Việt Nam</Text>
            <TouchableOpacity onPress={() => openEmail('dolanhuong@ctu.edu.vn')}>
              <Text style={styles.text}>Đỗ Lan Hương</Text>
            </TouchableOpacity>
            <Text style={styles.text}>(Biên tập viên, Thư ký) - Trường Đại học Kỹ thuật - Công nghệ Cần Thơ, Việt Nam</Text>

            {/* Phụ Trách Trị Sự */}
            <Text style={styles.subheading}>PHỤ TRÁCH TRỊ SỰ</Text>
            <TouchableOpacity onPress={() => openEmail('hoangtheanh@ctu.edu.vn')}>
              <Text style={styles.text}>Hoàng Thế Anh</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Trường Đại học Kỹ thuật - Công nghệ Cần Thơ, Việt Nam</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        {/* Footer content can be added here */}
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
    marginBottom: 5,
  },
  emailText: {
    fontSize: 16,
    color: '#007bff',
    marginBottom: 15,
  },
  footerContainer: {
    height: 60,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
