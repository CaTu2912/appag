import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // You can import the CSS as needed.

const Header = () => {
    return (
        <header className="nav-item">
            Tạp chí khoa học Trường đại học kỹ thuật - công nghệ Cần Thơ
        </header>
    );
};

const NavigationUserWrapper = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <div id="navigationUserWrapper">
            <div className="left-group">
                <Header />
                <div className="nav-item">
                    <div className="nav-link"><a href="">Công việc</a></div>
                    <div className="nav-item-hidden" />
                </div>
            </div>
            <div className="right-group">
                <a href="" className="nav-item">
                    <span className="fa fa-eye"></span> Xem trang
                </a>

                <li className="nav-item" onClick={() => setShowUserMenu(!showUserMenu)}>
                    <div className="nav-link">
                        <a href="">
                            <i className="fa-solid fa-user"></i>
                            <span style={{ marginRight: '4px' }}></span>
                            khachhang@gmail.com
                            <span className="badge">0</span>
                        </a>
                    </div>
                    {showUserMenu && (
                        <div className="nav-item-hidden">
                            <a href="">Hồ sơ cá nhân</a>
                            <a href="">Đăng xuất</a>
                        </div>
                    )}
                </li>
            </div>
        </div>
    );
};

const TabPanel = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState(4);

    const showContext = (tabIndex) => setActiveTab(tabIndex);
    const showContext2 = (subTabIndex) => setActiveSubTab(subTabIndex);

    return (
        <div className="pkpTabs">
            <div className="tabs-list">
                <button onClick={() => showContext(1)} className={activeTab === 1 ? 'selected-button' : ''}>Quy trình</button>
                <button onClick={() => showContext(2)} className={activeTab === 2 ? 'selected-button' : ''}>Xuất bản</button>
            </div>

            <div className={`context ${activeTab === 1 ? 'active' : ''}`}>
                <div className="pkpListPanel__content">
                    <div className="tabs-list">
                        <button onClick={() => showContext2(4)} className={activeSubTab === 4 ? 'selected-button' : ''}>Bài nộp</button>
                        <button onClick={() => showContext2(5)} className={activeSubTab === 5 ? 'selected-button' : ''}>Phản biện</button>
                        <button onClick={() => showContext2(6)} className={activeSubTab === 6 ? 'selected-button' : ''}>Biên tập</button>
                        <button onClick={() => showContext2(7)} className={activeSubTab === 7 ? 'selected-button' : ''}>Xuất bản</button>
                    </div>

                    <div id="4" className={`context2 ${activeSubTab === 4 ? 'active2' : ''}`}>
                        <div className="de-ar-tab-panel-widget">Giai đoạn này chưa được khởi tạo.</div>
                        <div className="de-ar-tab-panel-widget">
                            <div className="de-ar-tab-panel-content">
                                <div className="de-ar-tab-panel-controller">
                                    <div className="de-ar-panel-controller-header">
                                        <h4>Tệp bài viết</h4>
                                    </div>

                                    <span className="de-ar-tab-panel-none-file"><em>Không có tệp</em></span>
                                    <table id="de-ar-table" className="de-ar-tab-panel-controller-table">
                                        <colgroup>
                                            <col style={{ width: '75%' }} />
                                            <col style={{ width: '15%' }} />
                                            <col style={{ width: '15%' }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ textAlign: 'center' }}></th>
                                                <th scope="col" style={{ textAlign: 'left' }}></th>
                                                <th scope="col" style={{ float: 'right' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="file-row">
                                                <td>
                                                    <span id="file-info">
                                                        <i className="fa-solid fa-file-word"></i>
                                                        <span>6854-1</span>
                                                        <a href="">Văn bản của bài viết, thanhst84949,<a href="#" id="file-link" title="">eeeee.docx</a></a>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span id="file-date">
                                                        <span>12/09/2024</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#" id="edit-file-link" title="Sửa tệp">Chỉnh sửa</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="5" className={`context2 ${activeSubTab === 5 ? 'active2' : ''}`}>
                <div className="de-ar-tab-panel-widget">Giai đoạn này chưa được khởi tạo.</div>
                <div className="de-ar-tab-panel-widget">
                    <div className="de-ar-tab-panel-content">
                        <div className="de-ar-tab-panel-pb-details">
                            <div className="de-ar-pb-header">
                                <h4>Danh sách thành phần phản biện</h4>
                            </div>
                            <div className="de-ar-pb-member-list">
                                <strong><h6>Tác Giả</h6></strong>
                                <table className="pb-author-table">
                                    <thead>
                                        <tr>
                                            <th>Tên</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tên tác giả 1</td>
                                            <td>author1@example.com</td>
                                        </tr>
                                        <tr>
                                            <td>Tên tác giả 2</td>
                                            <td>author2@example.com</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <strong><h6>Phản Biện Viên</h6></strong>
                                <table className="pb-reviewer-table">
                                    <thead>
                                        <tr>
                                            <th>Tên</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tên phản biện viên 1</td>
                                            <td>reviewer1@example.com</td>
                                        </tr>
                                        <tr>
                                            <td>Tên phản biện viên 2</td>
                                            <td>reviewer2@example.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

function App() {
    return (
        <div className="App">
            <NavigationUserWrapper />
            <TabPanel />
        </div>
    );
}

export default App;
