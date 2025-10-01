// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
});

// Translations
const translations = {
    en: {
        // Navbar
        nav_brand: "Su-ngai Bala Elephant Camp",
        // Header
        hero_subtitle: "Experience the charm of elephants and lush nature in Narathiwat.",
        // About
        about_title: "About Su-ngai Bala Elephant Camp",
        about_p1: "Su-ngai Bala Elephant Camp is the first elephant camp in the 3 southern border provinces. Located at Ban Su-ngai Bala, Manang Tayo sub-district, Mueang Narathiwat district, on an area of over 32,000 square meters (20 rai). It is not only a tourist attraction but also a warm home for 5 elephants and a source of income for the local community.",
        about_hours: "Opening Hours:",
        about_hours_time: "09:00 - 18:00 (Daily)",
        // New Section
        new_section_title: "An Unforgettable Experience",
        new_section_p1: "At Su-ngai Bala Elephant Camp, we are more than just a tourist destination; we are a family ready to share the love and bond between humans and elephants. We invite you to create precious memories with our gentle giant friends.",
        // Activities
        activities_title: "Must-Do Activities",
        activity1_title: "Elephant Riding",
        activity1_desc: "Enjoy riding an elephant to see the fruit orchards and surrounding nature (Child 50 THB, Adult 100 THB).",
        activity2_title: "Elephant Feeding",
        activity2_desc: "Get acquainted with the elephants by feeding them bananas and sugarcane (30 THB per set).",
        activity3_title: "Photos with Elephants",
        activity3_desc: "Capture impressive moments and get up close to the adorable elephants.",
        // Gallery
        gallery_title: "Image Gallery",
        // Map
        map_title: "Location",
        // Footer
        footer_contact: "Contact Us",
        footer_copyright: "&copy; 2025 Su-ngai Bala Elephant Camp. All Rights Reserved.",
        footer_credit: "Created by Gemini"
    },
    th: {
        // Navbar
        nav_brand: "ปางช้างสุไหงบาลา",
        // Header
        hero_subtitle: "สัมผัสความน่ารักของช้างและธรรมชาติที่อุดมสมบูรณ์ในนราธิวาส",
        // About
        about_title: "เกี่ยวกับปางช้างสุไหงบาลา",
        about_p1: "ปางช้างสุไหงบาลาเป็นปางช้างแห่งแรกในพื้นที่ 3 จังหวัดชายแดนภาคใต้ ตั้งอยู่ที่บ้านสุไหงบาลา ตำบลมะนังตายอ อำเภอเมืองนราธิวาส บนพื้นที่กว่า 32,000 ตารางเมตร (20 ไร่) ที่นี่ไม่เพียงแต่เป็นสถานที่ท่องเที่ยว แต่ยังเป็นบ้านอันอบอุ่นของช้าง 5 เชือก และเป็นแหล่งสร้างรายได้ให้กับคนในชุมชนอีกด้วย",
        about_hours: "เวลาทำการ:",
        about_hours_time: "09:00 - 18:00 น. (ทุกวัน)",
        // New Section
        new_section_title: "สัมผัสประสบการณ์สุดพิเศษที่ไม่มีวันลืม",
        new_section_p1: "ที่ปางช้างสุไหงบาลา เราไม่ได้เป็นเพียงแค่สถานที่ท่องเที่ยว แต่เราคือครอบครัวที่พร้อมจะแบ่งปันความรักและความผูกพันระหว่างคนกับช้าง ขอเชิญคุณมาร่วมสร้างความทรงจำอันล้ำค่ากับเพื่อนร่างยักษ์ใจดีของเรา",
        // Activities
        activities_title: "กิจกรรมที่ไม่ควรพลาด",
        activity1_title: "นั่งช้างชมสวน",
        activity1_desc: "เพลิดเพลินกับการนั่งช้างชมสวนผลไม้และธรรมชาติโดยรอบ (เด็ก 50 บาท, ผู้ใหญ่ 100 บาท)",
        activity2_title: "ป้อนอาหารช้าง",
        activity2_desc: "สร้างความคุ้นเคยกับน้องช้างด้วยการป้อนกล้วยและอ้อย (ชุดละ 30 บาท)",
        activity3_title: "ถ่ายรูปกับช้าง",
        activity3_desc: "เก็บภาพความประทับใจและสัมผัสความน่ารักของช้างอย่างใกล้ชิด",
        // Gallery
        gallery_title: "แกลเลอรี่ภาพ",
        // Map
        map_title: "การเดินทาง (Location)",
        // Footer
        footer_contact: "ติดต่อเรา",
        footer_copyright: "&copy; 2025 ปางช้างสุไหงบาลา. All Rights Reserved.",
        footer_credit: "สร้างโดย Gemini"
    },
    ms: {
        // Navbar
        nav_brand: "Kem Gajah Su-ngai Bala",
        // Header
        hero_subtitle: "Alami pesona gajah dan alam semula jadi yang subur di Narathiwat.",
        // About
        about_title: "Mengenai Kem Gajah Su-ngai Bala",
        about_p1: "Kem Gajah Su-ngai Bala adalah kem gajah pertama di 3 wilayah sempadan selatan. Terletak di Ban Su-ngai Bala, mukim Manang Tayo, daerah Mueang Narathiwat, di atas kawasan seluas lebih 32,000 meter persegi (20 rai). Ia bukan sahaja tarikan pelancong tetapi juga rumah mesra untuk 5 ekor gajah dan sumber pendapatan bagi masyarakat setempat.",
        about_hours: "Waktu Operasi:",
        about_hours_time: "09:00 - 18:00 (Setiap Hari)",
        // New Section
        new_section_title: "Pengalaman yang Tidak Dapat Dilupakan",
        new_section_p1: "Di Kem Gajah Su-ngai Bala, kami lebih daripada sekadar destinasi pelancongan; kami adalah sebuah keluarga yang bersedia untuk berkongsi kasih sayang dan ikatan antara manusia dan gajah. Kami menjemput anda untuk mencipta kenangan berharga bersama rakan-rakan gergasi kami yang baik hati.",
        // Activities
        activities_title: "Aktiviti yang Mesti Dilakukan",
        activity1_title: "Menunggang Gajah",
        activity1_desc: "Nikmati menunggang gajah untuk melihat kebun buah-buahan dan alam sekitar (Kanak-kanak 50 THB, Dewasa 100 THB).",
        activity2_title: "Memberi Makan Gajah",
        activity2_desc: "Berkenalan dengan gajah dengan memberi mereka makan pisang dan tebu (30 THB setiap set).",
        activity3_title: "Bergambar dengan Gajah",
        activity3_desc: "Abadikan detik-detik yang mengagumkan dan dekati gajah-gajah yang comel.",
        // Gallery
        gallery_title: "Galeri Gambar",
        // Map
        map_title: "Lokasi",
        // Footer
        footer_contact: "Hubungi Kami",
        footer_copyright: "&copy; 2025 Kem Gajah Su-ngai Bala. Hak Cipta Terpelihara.",
        footer_credit: "Dicipta oleh Gemini"
    }
};

// Function to set the language
const setLanguage = (language) => {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[language] && translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });
    document.documentElement.lang = language; // Update the lang attribute of the html tag
    localStorage.setItem('language', language); // Save language to local storage
};

// Add event listeners to language switchers
document.addEventListener('DOMContentLoaded', () => {
    const langSwitchers = document.querySelectorAll('.lang-switcher');
    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', (event) => {
            event.preventDefault();
            const language = switcher.getAttribute('data-lang');
            setLanguage(language);
        });
    });

    // Get language from local storage or default to 'th'
    const savedLanguage = localStorage.getItem('language') || 'th';
    setLanguage(savedLanguage);
});