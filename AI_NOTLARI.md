# AI Kullanım Notları – VESTA

## 1. Proje Hakkında

Projenin adı VESTA – The Intelligent Wardrobe'dur. Kişisel stil, akıllı gardırop yönetimi ve yapay zekâ destekli kombin önerileri konularını tanıtan üç sayfalık bir web sitesi geliştirilmiştir.

Proje geliştirme sürecinde yapay zekâdan tasarım planlama, HTML yapısı, CSS düzeni ve JavaScript arama işlevinin oluşturulması konularında destek alınmıştır.

## 2. Kullanılan Promptlar ve Amaçları

**Prompt 1 – Proje planlaması**

"VESTA isimli yapay zekâ destekli kişisel gardırop projesi için profesyonel, modern ve üç sayfadan oluşan bir web sitesi tasarla. Ana Sayfa, Keşfet ve Hakkında sayfalarının içeriklerini planla."

Amaç: Projenin sayfa yapısını, hedef kitlesini ve içeriklerini belirlemek.

**Prompt 2 – Tasarım ve HTML/CSS**

"VESTA projesi için lüks, sade ve modern bir tasarım oluştur. Playfair Display ve DM Sans yazı tiplerini kullan. Üç sayfada ortak navigasyon menüsü ve tutarlı bir görsel dil oluştur."

Amaç: Sayfaların tasarım bütünlüğünü sağlamak ve kullanıcı deneyimini geliştirmek.

**Prompt 3 – JavaScript arama sistemi**

"JavaScript kullanarak içerik kartlarını başlıklarına göre filtreleyen bir arama sistemi oluştur. Arama yazıldıkça çalışsın, sonuç sayısını göstersin, sonuç bulunamadığında mesaj çıkarsın ve Temizle düğmesi aramayı sıfırlasın."

Amaç: Keşfet sayfasındaki arama işlevini geliştirmek.

## 3. Yapay Zekâ Önerilerinin Değerlendirilmesi

Arama sisteminde `trim()` ve `toLocaleLowerCase("tr-TR")` kullanımı tercih edilmiştir.

Bu öneri kabul edilmiştir. Çünkü kullanıcı arama yaparken kelimenin başına veya sonuna boşluk eklese bile doğru sonuçların gösterilmesini sağlar. Türkçe karakterlerde büyük-küçük harf duyarlılığını da azaltır.

Ayrıca JavaScript kodunda `if (searchInput)` kontrolü kullanılmıştır. Böylece arama alanının bulunmadığı Ana Sayfa ve Hakkında sayfalarında arama kodunun gereksiz yere çalışması önlenmiştir.

## 4. Kod Açıklamaları

**Event Listener:**

`searchInput.addEventListener("input", filterContents);`

Bu event listener, kullanıcı arama kutusuna her karakter girdiğinde `filterContents()` fonksiyonunu çalıştırır. Böylece sayfa yenilenmeden anlık arama yapılır.

**Filtreleme koşulu:**

`const isMatch = title.includes(searchValue);`

Bu koşul, kart başlığının aranan kelimeyi içerip içermediğini kontrol eder. Eşleşen kartlar görünür kalırken eşleşmeyen kartlar gizlenir.

## 5. Copilot Kullanımı

Projenin kodları geliştirilirken GitHub Copilot ile otomatik kod değişikliği yapılmamıştır. Kodların çalışma mantığı incelenmiş ve JavaScript işlevleri değerlendirilmiştir.

**Not:** Copilot erişimi varsa ayrıca kod incelemesi yaptırılarak önerileri değerlendirmek önerilir.

## 6. Sonuç

Yapay zekâ desteği, projenin planlanması, tasarımının oluşturulması ve JavaScript arama sisteminin geliştirilmesi aşamalarında yardımcı olmuştur. Kodlar incelenerek projenin ihtiyaçlarına uygun şekilde düzenlenmiştir.