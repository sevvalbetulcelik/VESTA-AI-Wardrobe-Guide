# Test Notları – VESTA

## 1. Test Ortamı

- Proje: VESTA – The Intelligent Wardrobe
- Kullanılan teknolojiler: HTML5, CSS3, JavaScript
- Test ortamı: Web tarayıcısı
- Test edilen sayfalar: Ana Sayfa, Keşfet, Hakkında

## 2. Fonksiyonel Testler

| No | Kullanılan girdi / işlem | Beklenen sonuç | Gerçekleşen sonuç | Durum |
|---|---|---|---|---|
| 1 | Arama kutusuna "Gardırop" yazılması | Yalnızca Akıllı Gardırop kartı görünür. Sayaç 1 olur. | Tarayıcıda test edilecek. | Bekliyor |
| 2 | "akıllı gardırop" şeklinde küçük harf ve başında/sonunda boşluk kullanılması | Büyük-küçük harf ve boşluk farkına rağmen eşleşme sağlanır. | Tarayıcıda test edilecek. | Bekliyor |
| 3 | Arama kutusuna "Bilgisayar" yazılması | Hiçbir kart görünmez, sayaç 0 olur ve boş sonuç mesajı gösterilir. | Tarayıcıda test edilecek. | Bekliyor |
| 4 | Temizle düğmesine basılması, ardından yalnızca boşluk girilmesi | Tüm kartlar tekrar görünür ve sayaç 5 olur. | Tarayıcıda test edilecek. | Bekliyor |
| 5 | Üç sayfadaki menü bağlantılarının açılması | Ana Sayfa, Keşfet ve Hakkında bağlantıları doğru sayfalara yönlendirir. | Tarayıcıda test edilecek. | Bekliyor |
| 6 | Ekran genişliğinin 390 px yapılması ve Tab tuşuyla gezinilmesi | Yatay taşma olmamalı; arama alanına ve düğmeye klavyeyle ulaşılabilmelidir. | Tarayıcıda test edilecek. | Bekliyor |

## 3. Test Değerlendirmesi

JavaScript kodunda arama işlemi `input` event listener ile gerçekleştirilmektedir.

Arama sırasında:
- Başlıklar Türkçe karakter uyumlu şekilde küçük harfe dönüştürülür.
- Başında ve sonunda bulunan boşluklar temizlenir.
- Eşleşmeyen kartlar gizlenir.
- Görünen kart sayısı güncellenir.
- Sonuç bulunamadığında bilgilendirme mesajı gösterilir.
- Temizle düğmesi arama alanını sıfırlar.

## 4. Genel Sonuç

Fonksiyonel testlerin tamamlanmasıyla birlikte VESTA web sitesinin arama sistemi, sayfa bağlantıları, mobil görünümü ve klavye erişilebilirliği değerlendirilecektir.

Test sonuçları tarayıcı üzerinden gerçekleştirilen kontroller doğrultusunda güncellenecektir.