document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.form').addEventListener('submit', function (event) {
        event.preventDefault(); // منع الإرسال التلقائي للنموذج

        // الحصول على القيم المدخلة
        const gender = document.getElementById('gender').value;
        const age = parseFloat(document.getElementById('age').value);
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);

        // التحقق من صحة المدخلات
        if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
            alert('يرجى إدخال أرقام موجبة فقط.');
            return;
        }

        // حساب مؤشر كتلة الجسم (BMI)
        const bmi = weight / ((height / 100) ** 2);

        // تحديد الوجبة بناءً على مؤشر كتلة الجسم
        let mealRecommendation;
        if (bmi < 18.5) {
            mealRecommendation = 'وجبة عالية السعرات الحرارية مثل:'
                + ' - الأرز والدجاج مع الخضروات'
                + ' - البطاطس المقلية مع اللحم البقري'
                + ' - المكسرات والفواكه المجففة';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            mealRecommendation = 'وجبة متوازنة مثل:'
                + ' - السلطة مع السمك المشوي'
                + ' - الدجاج المشوي مع الكينوا والخضروات'
                + ' - الشوفان مع الفواكه الطازجة';
        } else {
            mealRecommendation = 'وجبة منخفضة السعرات الحرارية مثل:'
                + ' - الخضروات المشوية مع صلصة الليمون'
                + ' - سلطة الدجاج الخضراء'
                + ' - شوربة العدس';
        }

        // عرض التوصية
        alert(`استنادًا إلى مدخلك، نقترح عليك: ${mealRecommendation}`);
    });
});
