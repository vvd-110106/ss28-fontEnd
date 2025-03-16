// 1. Tạo OBJ
const porson = {
    porsonName : "Nguyễn Văn A",
    age : 30,
    address: "Hà Nội",
    isMarinth:  false,
};
// const student = new.Object{ 
// }

// 2. Thêm thuộc tính cho obj
// 2 kiểu
console.log("Pesron name: ",porson.porsonName);
console.log("Pesron name: ",porson.age);

const key = "personName";
console.log("Pesron name: ",porson[key]);
console.log ("Pesron address: ", porson["address"]);
console.log ("Trước khi thêm: ", porson);

// 3. Thêm thuộc tính
porson.height = 160; // Thêm cho đối tượng 1 thuộc tính
porson.weight = "Thin"; // Thêm cho đối tượng 1 thuộc tính
console.log ("Sau khi dc thêm thuộc tính: ", porson);

// 4. Cập nhật giá trị
porson.porsonName = "Trần Văn A";
porson.age = 25;
console.log ("Sau khi được cập nhật: ", porson);

// 5. Xoá thuộc tính của obj
delete porson.isMarinth;
delete porson.age;
console.log("Sau khi xoá: ", porson);

// 6. NÂNG CAO truy xuất đối tượng với  Destructuring Asignment 
const{ address, age, porsonName} =porson;
console.log (address, age, porsonName);

// Tạo mảng đối tượng
const teachs = [
    {
        id: 1,
        name: "Ngô quang ANh",
        age: 20
    },
    {
        id: 2,
        name: "Nguyễn Văn A",
        age: 20
    }
]
console.table(teachs);

// Duyệt qua dối tượng

for(const key in porson) {
    console.log("Key", key);
    console.log("Valua", porson[key]);
}

// Lấy danh sách các cái key của OBJ
console.log("Danh sách key của object porson: ", Object.keys(porson));
console.log("Danh sách key của object porson: ", Object.values(porson));


// Optional chaining
const user = {
    name: "hello",
};
// if (user.address) {
//     console.log('City: ', user.address)
// }
console.log("City: ", user?.address?.city);