import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faQuoteRight, faCopy } from '@fortawesome/free-solid-svg-icons';

const Views = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#f4f4f4', padding: 20 }}>
        {/* Breadcrumb Navigation */}
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Text style={{ fontSize: 16, color: '#000' }}>Trang chủ</Text>
          <Text style={{ fontSize: 16, color: '#000', marginHorizontal: 10 }}>&gt;</Text>
          <Text style={{ fontSize: 16, color: '#000' }}>Lưu trữ</Text>
          <Text style={{ fontSize: 16, color: '#000', marginHorizontal: 10 }}>&gt;</Text>
          <Text style={{ fontSize: 16, color: '#000' }}>Tập. 1 Số. 1 (2024)</Text>
        </View>

        {/* Issue Details */}
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ flex: 1, marginRight: 20 }}>
            <TouchableOpacity>
              <Image source={require('./ass/img/thobaymau.jpg')} style={{ width: '100%', height: 200 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>
              Ngày xuất bản: 01/01/2000
            </Text>
            <TouchableOpacity style={{ marginBottom: 10 }}>
              <Text style={{ color: 'blue' }}>
                <FontAwesomeIcon icon={faFilePdf} size={16} /> Tập. 1 Số. 1 (2024)
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Article Section */}
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Khoa học Công nghệ thông tin
          </Text>

          {/* Article 1 */}
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Thực trạng quản lý hoạt động giáo dục địa phương cho học sinh ở các trường tiểu học huyện Tam Nông, tỉnh Đồng Tháp
            </Text>
            <Text style={{ fontSize: 14, color: '#555', marginBottom: 5 }}>Trần Đại Nghĩa, Nguyễn Ngọc Thiên Trung</Text>
            <Text style={{ fontSize: 14, color: '#555', marginBottom: 10 }}>
              DOI: <Text style={{ color: 'blue' }}>https://doi.org/10.52714/dthu.13.01S.2024.1281</Text>
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ flexDirection: 'row', marginRight: 15 }}>
                <FontAwesomeIcon icon={faFilePdf} size={16} />
                <Text style={{ marginLeft: 5 }}>PDF</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={toggleModal} style={{ flexDirection: 'row' }}>
                <FontAwesomeIcon icon={faQuoteRight} size={16} />
                <Text style={{ marginLeft: 5 }}>Trích dẫn</Text>
              </TouchableOpacity>
            </View>

            {/* Modal for Citation */}
            <Modal
              visible={isModalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={toggleModal}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                  <Text style={{ fontSize: 16, marginBottom: 10 }}>Cách trích dẫn</Text>
                  <Text style={{ fontSize: 14 }}>
                    Trần, Đ. N., & Nguyễn, N. T. T. (2024). Thực trạng quản lý hoạt động giáo dục địa phương cho học sinh ở các
                    trường tiểu học huyện Tam Nông, tỉnh Đồng Tháp. Tạp chí Khoa học Đại học Đồng Tháp, 13(01S), 1-10.
                    https://doi.org/10.52714/dthu.13.01S.2024.1281
                  </Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Button title="APA" onPress={() => {}} />
                    <Button title="Chicago" onPress={() => {}} />
                    <Button title="IEEE" onPress={() => {}} />
                    <Button title="Sao chép" onPress={() => {}} />
                  </View>
                  <Button title="Đóng" onPress={toggleModal} />
                </View>
              </View>
            </Modal>
          </View>

          {/* Article 2 */}
          {/* Repeat the same structure for other articles */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Views;
