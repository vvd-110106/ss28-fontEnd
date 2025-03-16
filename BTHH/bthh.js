// B1:Tạo menu
// B1.1: Hiển thị lựa chọn cho người dùng
// B1.2: Lấy thông tin người dùng
// B2: Kiểm tra lựa chọn người dùng
// b3: thức hiện các logic trong các case

let choice;
const products = [];
do {
    choice = +prompt(`
        1.Thêm sản phẩm
        2.Sửa thông tin sản phẩm
        3.Xóa sản phẩm theo id
        4.In danh sách sản phẩm
        5.Tìm kiếm sản phẩm theo tên
        6.Thoát chương trình
`)
    switch (choice) {
        case 1: // Thêm sản phẩm

            // Lấy được thông tin sản phẩm từ người dùng
            const productName = prompt("Nhập tên sản phẩm: ");
            const price = +prompt("Nhập giá của sản phẩm: ");

            // Gom nhóm tất cả các dữ liệu từ người dùng thành 1 object duy nhất
            const newProduct = {
                id: Math.ceil(Math.random() * 10000000), // Làm tròn và sinh tự động
                productName,
                price,
            };

            // Lưa vào 1 mảng 
            products.push(newProduct);

            // hiển thị thông báo
            alert("Thêm sản phẩm thành công");
            break;
        case 2: // Sửa thông tin sản phẩm

            break;
        case 3: // Xóa sản phẩm theo id

            // lấy được id cần xoá
            const idDelete = +prompt("Nhập id của sản phẩm cần xoá:");

            // Tìm kiếm vị trí phần tử trong mảng theo id
            const findIndexProductDelete = products.findIndex((product) => product.id === idDelete);

            // Kiểm tra id đó có tồn tại trong mảng hay không
            if (findIndexProductDelete !== -1) {
                // Lấy ra tên của sản phẩm càn xoá 
                const productNameDelete = products[findIndexProductDelete].productName;

                // Lấy xác nhận xoá từ người dùng
                const confirmDelete = confirm(`Bạn có chắc chắn muốn xoá sản phẩm tên là ${productNameDelete} không?`);

                // Trong js, có những giá trị mào luôn luôn là falsy: false, 0, "", null , NaN, undefined

                if (confirmDelete === true) {
                    // tiến hành xoá
                    products.splice(findIndexProductDelete, 1);

                    // hiển thị thông báo
                    alert("Xoá sản phẩm thành công");

                }
            } else {
                alert("Không tìm thấy sản phẩm");
            }


            break;
        case 4: // In danh sách sản phẩm
            console.table(products)
            break;
        case 5: //Tìm kiếm sản phẩm theo tên
            // Lây tên sản phẩm mà người dùng cần timf kiếm
            const productNameInputSearch = prompt("Nhập tên sản phẩm cần tìm kiếm: ");
            
            // Tìm kiếm sản phẩm trong mảng
            const findProductName = products.find((product) => product.productName.trim ().toLowerCase === productNameInputSearch.trim().toLowerCase);

            if (findProductName) {
                console.log ("Tìm thấy sản phẩm", findProductName)
            }else {
                alert ('Không tìm thấy sản phẩm.')
            }
            break;
        case 6: // Xoá

            break;
        default:
            alert("Lựa chọn không hợp lệ: ")
            break;
    }
} while (choice !== 6);