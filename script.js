function showCategory(categoryId) {
    // 1. إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    // 2. إظهار القسم المطلوب
    const selectedSection = document.getElementById(categoryId);
    if (selectedSection) {
        selectedSection.classList.add('active-section');
    }

    // 3. تغيير حالة الأزرار (active)
    const navItems = document.querySelectorAll('.category-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // إضافة كلاس active للزر الذي تم الضغط عليه
    event.currentTarget.classList.add('active');
}