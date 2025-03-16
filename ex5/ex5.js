const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" }
    ]
};
console.log("Tên công ty:", company.name);
console.log("Danh sách tên nhân viên của công ty:");
for (const employee of company.employees) {
    console.log("-", employee.name);
}
