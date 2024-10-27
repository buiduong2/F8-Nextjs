## Yêu cầu 

- Favicon : phải thay đổi 
- Meta: 
  - Phải đầy đủ
  - Đổi sang trang khác cũng phải thay đổi theo
- Đăng nhập
  - Tính năng chính
  - Sẽ đăng xuất được ?

- Tính năng quản lý MyMap
  - Phải đăng nhập mới vào được trang này
  - Tạo Map là tạo của từng tài khoản khác nhau
  - Thêm nút CheckAll
  - Bấm vào create thì nó chuyển link sang một trang tương ứng với các URL tương ứng
  - Và tự động lưu luôn một bản cho người dùng

- TÍnh năng MyMap
  - Khi thay đổi tên một MyMap thì nó tự động thay đổi Title theo
  - mô tả cũng như thế
    - Lúc ban đầu sửa có thể là bằng DOM nhưng lần tiếp theo tải lại trang thì phải là server side
  - Sau khi thêm một vài Node + Eages thì bấm lưu lại. Lần tiếp theo tải lại trang phải vẫn còn đấy
  - Quản lý resouce (id của MyMindMap)
    - Nếu là Resource của một Client thì CLient khác ko vào được
    - Sửa sai id của MindMap thì cũng sẽ hiện ra trang lỗi
    - Nếu chưa đăng nhập mà truy cập vào một tài nguyên của người dùng thì yêu cầu đăng nhập
    - Nếu ko cùng một tài khoản thì trả về 404
    - Có thể thay đổi chế độ từ private -> công khai
    - Nếu đang công khai rồi thì nếu ko phải chủ sở hữu thì ko thể chỉnh sửa được
  - Quản lý Node
    - Click đúp thì có thể sửa
    - Khi sửa xong có thể Enter hoặc bấm ra ngoài thì submit việc sửa
  - MiniMap
  - Xóa Node: 
    - Nếu xóa NOde thì các Egde cũng sẽ phải bị xóa theo
    - 