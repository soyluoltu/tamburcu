# Tambur Makinesi Sorun Giderme Rehberi

Bu rehber, Tambur Makinesi kullanımı sırasında karşılaşabileceğiniz yaygın sorunları ve çözüm yollarını içermektedir. Sorunları kendi başınıza çözmenize yardımcı olacak adım adım talimatlar sunulmaktadır.

## Teşhis Süreci

Herhangi bir sorunla karşılaştığınızda, aşağıdaki teşhis sürecini izleyin:

1. Sorunu tam olarak tanımlayın (ne zaman başladı, hangi koşullarda oluyor, vb.)
2. Görsel ve işitsel kontroller yapın (anormal sesler, koku, duman, vb.)
3. Bu rehberde ilgili bölümü bulun
4. Önerilen çözümleri sırasıyla uygulayın
5. Sorun çözülmezse, daha ileri teknik destek için iletişime geçin

## Güç ve Elektrik Sorunları

### Cihaz Açılmıyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Yanlış hız ayarı | Kullanılan malzemeye göre hız | Malzeme türüne uygun hız ayarını kullanın (bkz. Kullanıcı Kılavuzu) |
| Yetersiz işleme süresi | İşlem süresi | Malzeme türüne uygun işleme süresini uygulayın |
| Uygun olmayan işleme ortamı | Kuru/ıslak/yağlı işleme | Malzeme türüne uygun işleme ortamını kullanın |
| Tambur aşınması | Tambur iç yüzeyi | Aşınmış tamburu değiştirin |
| Uyumsuz malzemeler | Tambur içindeki malzemelerin kombinasyonu | Farklı sertlikteki malzemeleri ayrı ayrı işleyin |

## Elektronik Sorunlar

### LED Göstergeleri Çalışmıyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| LED arızalı | LED'lerin fiziksel durumu | LED'leri değiştirin |
| Bağlantı sorunu | LED bağlantıları | Bağlantıları kontrol edin (önce fişi çekin) |
| Devre kartı sorunu | - | Teknik destek alın |

### Potansiyometre Düzgün Çalışmıyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Potansiyometre kirli | Potansiyometre hareketi | Elektronik temizleyici sprey kullanın |
| Potansiyometre aşınmış | Düzensiz tepki | Potansiyometreyi değiştirin |
| Bağlantı sorunu | Bağlantılar | Bağlantıları kontrol edin (önce fişi çekin) |

### Resetlenebilir Sigorta Sürekli Atıyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Kısa devre | Kablolarda hasar | Hasarlı kabloları değiştirin |
| Aşırı yük | Tambur içindeki malzeme miktarı | Yükü azaltın |
| Hasarlı motor | Motor çalışması | Motoru değiştirin |
| Sigorta arızalı | Sigortanın durumu | Sigortayı değiştirin |
| İç elektronik sorun | - | Teknik destek alın |

## Donanım Yükseltme Sorunları

### Yeni 3B Basılmış Parçalar Uymuyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Yanlış model dosyası | Kullanılan STL dosyası | Doğru STL dosyasını kullandığınızdan emin olun |
| Baskı ölçeklendirme sorunu | Yazıcı kalibrasyonu | Yazıcınızı kalibre edin ve 1:1 ölçekte basın |
| Baskı toleransları | Parça boyutları | Tasarımı küçük tolerans değişiklikleriyle düzenleyin |
| Farklı versiyon | Dosya versiyonu | En son model dosyalarını kullanın |

### Motor Yükseltmesi Sonrası Sorunlar

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Uyumsuz motor özellikleri | Motor voltaj ve akım değerleri | Uyumlu motor kullanın (20V DC, max. 4.5A) |
| Bağlantı farklılıkları | Bağlantı şeması | Devre şemasını takip edin ve gerekli adaptasyonları yapın |
| Farklı boyutlar | Motor montaj delikleri | Adaptör plakası tasarlayın ve basın |
| Aşırı güç | Motor gücü | Güvenli çalışma limitlerini aşmayın |

## Yazılım ve Firmware Sorunları (Dijital Kontrollü Versiyonlar İçin)

### Arduino Kodu Yüklenmiyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Yanlış Arduino kartı seçimi | Arduino IDE kartı | Doğru Arduino kartını seçin |
| Bağlantı sorunu | USB kablosu | Kabloyu değiştirin veya farklı bir port deneyin |
| Sürücü eksikliği | Arduino sürücüleri | Gerekli sürücüleri yükleyin |
| Derleyici hatası | Hata mesajı | Kod sözdizimini kontrol edin ve düzeltin |

### Dijital Kontroller Çalışmıyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Firmware hatası | LED yanıp sönme deseni | Firmware'i yeniden yükleyin |
| Sensör arızası | Sensör bağlantıları | Sensörleri kontrol edin ve gerekirse değiştirin |
| Güç sorunu | Güç kaynağı | Stabil güç kaynağı kullanın |
| Uyumsuz kütüphane | Arduino kütüphaneleri | Doğru kütüphane versiyonlarını yükleyin |

## İleri Teknik Destek

Eğer yukarıdaki çözümlerden hiçbiri sorununuzu gidermezse:

1. Projenin GitHub sayfasında bir "Issue" açın ve şunları belirtin:
   - Tam sorun tanımı
   - Denediğiniz çözümler
   - Cihazınızın yapılandırması (kullandığınız parçalar, yaptığınız modifikasyonlar)
   - Mümkünse fotoğraf veya video

2. Teknik destek e-postası gönderin: [e-posta adresi]

3. Topluluk forumlarında yardım isteyin

## Tamir ve Yenileme

### Sık Değiştirilen Parçalar

| Parça | Değiştirme Sıklığı | Belirtiler | Değiştirme Zorluğu |
|-------|---------------------|-----------|-------------------|
| Rulmanlar | 6-12 ay | Gürültü, titreşim | Orta |
| Tambur | 1-2 yıl | Aşınma, çizikler | Kolay |
| Potansiyometre | 1-2 yıl | Dengesiz hız kontrolü | Orta |
| Motor fırçaları | 1-2 yıl | Düşük güç, durma | Zor |
| LED'ler | Nadiren | Yanmama | Orta |
| Sigorta | Gerektiğinde | Sürekli atma | Kolay |

### Yedek Parça Kaynakları

- 3B basılabilir parçalar: `hardware/3d-models` klasöründeki STL dosyaları
- Elektronik bileşenler: Standart elektronik malzeme satıcıları
- Özel parçalar: Projenin GitHub sayfasında belirtilen tedarikçiler

---

Bu sorun giderme rehberi, genel sorunları kapsamaktadır. Karşılaştığınız sorun burada belirtilmemişse veya önerilen çözümler işe yaramazsa, lütfen teknik destek için iletişime geçin.

**SON GÜNCELLEME**: 16.03.2025 Güç bağlantısı yok | Güç adaptörü prize takılı mı? | Güç adaptörünü prize takın |
| | Güç adaptörü cihaza bağlı mı? | Adaptör kablosunu cihaza bağlayın |
| | Priz çalışıyor mu? | Başka bir cihazla prizi test edin |
| Sigorta atmış | Resetlenebilir sigorta dışarı çıkmış mı? | Sigortayı reset düğmesine basarak resetleyin |
| Güç düğmesi arızalı | Güç düğmesinin fiziksel durumu | Düğmeyi birkaç kez basıp bırakın, tepki yoksa teknik destek alın |
| Güç adaptörü arızalı | Adaptörün LED ışığı yanıyor mu? | Adaptörü değiştirin |
| | Adaptör kablosunda hasar var mı? | Hasarlı kabloyu değiştirin |
| İç kablolama sorunu | - | Bu sorunu kendiniz çözmeye çalışmayın, teknik destek alın |

### Güç Göstergesi Yanıyor Ama Motor Çalışmıyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Potansiyometre minimum konumda | Potansiyometrenin konumu | Potansiyometreyi saat yönünde çevirin |
| Potansiyometre arızalı | Potansiyometreyi çevirdiğinizde tık sesi var mı? | Potansiyometreyi değiştirin |
| Motor bağlantısı gevşek | - | Cihazın içini açmadan önce fişini çekin, motor bağlantılarını kontrol edin |
| Motor arızalı | - | Motoru değiştirin veya teknik destek alın |
| Kontrol devresi arızalı | - | Bu sorunu kendiniz çözmeye çalışmayın, teknik destek alın |

### Cihaz Aniden Duruyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Aşırı ısınma | Cihaz uzun süre çalıştı mı? | Cihazı kapatın ve en az 30 dakika soğumaya bırakın |
| | Havalandırma delikleri tıkalı mı? | Havalandırma deliklerini temizleyin |
| Aşırı yük | Tamburdaki malzeme miktarı | Yükü azaltın (maksimum 500g) |
| Kısa devre | Yanık kokusu var mı? | Cihazı hemen kapatın ve teknik destek alın |
| Sigorta arızası | Sigorta tekrar tekrar atıyor mu? | Sigortayı değiştirin, sorun devam ederse teknik destek alın |
| Gevşek kablolar | - | Cihazın içindeki bağlantıları kontrol edin (önce fişini çekin) |

## Mekanik Sorunlar

### Anormal Gürültü veya Titreşim

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Cihaz dengeli değil | Cihazın yerleşimi | Cihazı düz ve sağlam bir yüzeye yerleştirin |
| Gevşek vidalar veya parçalar | Tüm dış vidalar | Tüm vidaları kontrol edin ve gerekirse sıkın |
| | Tambur kapağı | Kapağın tam oturduğundan emin olun |
| Hasarlı rulmanlar | Rulman sesi | Rulmanları kontrol edin, gerekirse değiştirin |
| Tambur dengesiz yerleştirilmiş | Tamburun konumu | Tamburu çıkarıp yeniden yerleştirin |
| Tambur içindeki malzemeler | Malzemelerin tambur içindeki dağılımı | Malzemeleri tambur içinde eşit dağıtın |
| Hasarlı motor | Motor sesi | Motoru kontrol edin, gerekirse değiştirin |

### Tambur Dönmüyor veya Düzensiz Dönüyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Tambur yanlış yerleştirilmiş | Tamburun miller üzerindeki konumu | Tamburu çıkarıp doğru şekilde yerleştirin |
| Tambur veya miller hasarlı | Fiziksel hasar | Hasarlı parçaları değiştirin |
| Rulmanlar sıkışmış | Rulmanların dönüşü | Rulmanları temizleyin veya değiştirin |
| Mil eğilmiş | Millerin düzgünlüğü | Milleri değiştirin |
| Aşırı yük | Tambur içindeki malzeme miktarı | Malzeme miktarını azaltın |
| Motor kayışı gevşek (kayışlı modellerde) | Kayış gerginliği | Kayışı gerin veya değiştirin |

### Tambur Kapağı Açılmıyor veya Kapanmıyor

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Kilit mekanizması sıkışmış | Kilit mekanizmasının durumu | Mekanizmayı temizleyin ve yağlayın |
| Kapak çarpık veya deforme olmuş | Kapağın fiziksel durumu | Kapağı değiştirin |
| Tambur yanlış konumda | Tamburun konumu | Tambur konumunu düzeltin |
| Yabancı cisim engelleme yapıyor | Kapak kenarlarında yabancı cisim | Engelleri temizleyin |

## Performans Sorunları

### Düşük Hız veya Güç

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
| Düşük voltaj | Güç adaptörü | Doğru adaptörü kullandığınızdan emin olun (20V, 4.5A) |
| Aşınmış motor fırçaları | Motor fırçaları | Fırçaları değiştirin veya teknik destek alın |
| Tambur sürtünmesi | Tambur ile gövde arasında sürtünme | Tambur konumunu ayarlayın |
| | Rulman sürtünmesi | Rulmanları temizleyin ve yağlayın |
| Potansiyometre arızası | Potansiyometre tepkisi | Potansiyometreyi değiştirin |
| Aşırı yükleme | Tambur içindeki malzeme miktarı | Yükü azaltın |

### İşleme Kalitesi Düşük

| Olası Neden | Kontrol Edilecek | Çözüm |
|-------------|------------------|-------|
Olası Neden	Kontrol Edilecek	Çözüm
Yanlış hız ayarı	Kullanılan malzemeye göre hız	Malzeme türüne uygun hız ayarını kullanın (bkz. Kullanıcı Kılavuzu)
Yetersiz işleme süresi	İşlem süresi	Malzeme türüne uygun işleme süresini uygulayın
Uygun olmayan işleme ortamı	Kuru/ıslak/yağlı işleme	Malzeme türüne uygun işleme ortamını kullanın
Tambur aşınması	Tambur iç yüzeyi	Aşınmış tamburu değiştirin
Uyumsuz malzemeler	Tambur içindeki malzemelerin kombinasyonu	Farklı sertlikteki malzemeleri ayrı ayrı işleyin
Düzensiz tambur hareketi	Tambur dönüş düzgünlüğü	Tambur dengesini kontrol edin, rulmanları temizleyin
Aşındırıcı madde yetersizliği	İşlem ortamındaki aşındırıcı	Uygun miktarda aşındırıcı madde ekleyin
Aşındırıcı madde eskimesi	Aşındırıcı maddenin durumu	Aşındırıcı maddeyi yenileyin
Tambur aşırı dolu	Tambur içindeki malzeme miktarı	Malzeme miktarını azaltın (%50-60 doluluk idealdir)
Tambur az dolu	Tambur içindeki malzeme miktarı	Yeterli miktarda malzeme ekleyin (minimum %25 doluluk)
Düşük kaliteli aşındırıcı	Aşındırıcı madde kalitesi	Kaliteli ve uygun grit değerine sahip aşındırıcı kullanın

