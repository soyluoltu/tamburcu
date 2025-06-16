# Katkıda Bulunma Rehberi

Tambur Makinesi projesine katkıda bulunmak istediğiniz için teşekkür ederiz! Bu rehber, projeye nasıl katkıda bulunabileceğinizi anlamanıza yardımcı olacaktır.

## Önemli Lisans Bilgisi

Bu proje GNU Affero General Public License v3.0 (AGPL-3.0) lisansı altında dağıtılmaktadır. Bu lisans kapsamında:

- Projeyi kendi amaçlarınız için inceleyebilir, değiştirebilir ve kullanabilirsiniz
- Değiştirilmiş versiyonları dağıtabilirsiniz, ancak aynı lisans altında olmalıdır
- Değişikliklerinizi açık kaynak olarak paylaşmanız gerekmektedir
- **Ticari kullanım kısıtlaması**: Bu proje ticari amaçlarla kullanım için tasarlanmamıştır. Ticari amaçlarla kullanmak için proje sahibinden açık izin almanız gerekmektedir.

Projeye katkıda bulunarak, katkınızın aynı lisans altında dağıtılacağını kabul etmiş olursunuz.

## Katkıda Bulunma Süreci

### 1. Issue Oluşturma

Bir özellik eklemek, hata düzeltmek veya değişiklik önermek istiyorsanız, önce bir issue oluşturun:

- Issue'nuzda net bir başlık ve ayrıntılı bir açıklama kullanın
- Hata bildiriyorsanız, hatayı nasıl tekrarlayabileceğimizi adım adım belirtin
- Yeni bir özellik öneriyorsanız, neden gerekli olduğunu açıklayın
- Mümkünse, ekran görüntüleri veya çizimler ekleyin

### 2. Fork ve Clone

Projeyi kendi GitHub hesabınıza forklayın ve ardından yerel makinenize klonlayın:

```bash
git clone https://github.com/sizin-kullanici-adiniz/tambur-makinesi.git
cd tambur-makinesi
```

### 3. Branch Oluşturma

Yeni bir branch oluşturun ve değişikliklerinizi bu branch üzerinde yapın:

```bash
git checkout -b yeni-ozellik
```

Branch adlandırma kuralları:
- `fix/` - Hata düzeltmeleri için (örn. `fix/motor-kontrolu`)
- `feature/` - Yeni özellikler için (örn. `feature/sicaklik-sensoru`)
- `docs/` - Dokümantasyon değişiklikleri için (örn. `docs/kullanim-klavuzu`)
- `improve/` - İyileştirmeler için (örn. `improve/performans`)

### 4. Değişiklikleri Yapma

Katkınızı yapın ve çalıştığından emin olun. Katkı türüne göre dikkat edilmesi gerekenler:

#### Donanım Değişiklikleri

- 3B model dosyalarınızın STL ve kaynak formatlarını ekleyin
- Devre şemalarını hem görsel (PDF/PNG) hem de kaynak dosya formatında (Eagle, KiCAD vb.) sağlayın
- Malzeme listesini güncelleyin
- Değişikliklerinizin diğer parçalarla uyumluluğunu kontrol edin

#### Yazılım/Firmware Değişiklikleri

- Kodunuzun düzgün biçimlendirildiğinden emin olun
- Fonksiyonlar ve karmaşık kod bölümleri için yorumlar ekleyin
- Kodunuzu test edin ve çalıştığından emin olun

#### Dokümantasyon Değişiklikleri

- Yazım hatalarını ve dilbilgisi hatalarını kontrol edin
- Dokümantasyonunuzun mevcut formatı takip ettiğinden emin olun
- Karmaşık talimatlar için görsellerle destekleyin

### 5. Commit ve Push

Değişikliklerinizi anlamlı mesajlarla commit edin:

```bash
git add .
git commit -m "Açıklayıcı bir commit mesajı"
git push origin yeni-ozellik
```

İyi bir commit mesajı şöyle olmalıdır:
- "Potansiyometre hassasiyeti artırıldı"
- "Motor aşırı ısınma sorunu düzeltildi"
- "Kullanım kılavuzuna güvenlik uyarıları eklendi"

### 6. Pull Request Oluşturma

GitHub üzerinden bir Pull Request (PR) oluşturun:

- Ana projedeki `main` branch'ine karşı PR oluşturun
- PR açıklamasında değişikliklerinizi detaylı olarak anlatın
- Yapılan değişikliklerin ne sorunu çözdüğünü veya hangi özelliği eklediğini belirtin
- İlgili issue'ları referans gösterin ("Fixes #123" gibi)

### 7. Kod İncelemesi

PR'ınız incelenecek ve geri bildirim alabilirsiniz. Sabırlı olun ve gerekirse değişiklikler yapın:

```bash
git add .
git commit -m "İnceleme geri bildirimleri uygulandı"
git push origin yeni-ozellik
```

## Kod Standartları

### Genel İlkeler

- KISS (Keep It Simple, Stupid) prensibi - Basit ve anlaşılır tasarımlar tercih edin
- DRY (Don't Repeat Yourself) prensibi - Kod tekrarından kaçının
- Açık ve okunabilir kod yazın
- Her değişikliğin dokümantasyonunu güncelleyin

### 3B Model Standartları

- STL dosyaları 3B yazdırılabilir olmalıdır (uygun duvar kalınlığı, uygun destekler)
- Kaynak dosyalar (SCAD, F3D, STEP vb.) değişiklik yapılabilir formatta olmalıdır
- Ölçüleri net belirtin (mm cinsinden)
- Parçalar mümkün olduğunca standart boyutlu vidalar ve donanım ile uyumlu olmalıdır

### Elektronik Standartları

- Devre şemaları net ve anlaşılır olmalı
- Komponentler kolay bulunabilen parçalardan seçilmeli
- Güvenlik önlemlerini göz ardı etmeyin (sigortalar, aşırı akım koruması vb.)
- Kablolama ve bağlantılar için renk kodları ve etiketleme bilgilerini dahil edin

### Firmware Standartları

- Arduino kodları Arduino stil kılavuzunu takip etmelidir
- Değişkenler ve fonksiyonlar için anlamlı isimler kullanın
- Karmaşık işlemler için yorumlar ekleyin
- Hata yakalama ve güvenlik kontrolleri dahil edin

## İletişim

Sorularınız veya daha fazla bilgi için:

- GitHub Issues: Bu projede bir issue açın
- E-posta: [e-posta adresi]

## Davranış Kuralları

Tüm katkıda bulunanlar CODE_OF_CONDUCT.md dosyasında belirtilen davranış kurallarına uymakla yükümlüdür. Saygılı ve yapıcı bir ortam sağlamak için lütfen bu kuralları okuyun ve uygulayın.

---

Katkınız için tekrar teşekkür ederiz! Sizin gibi katkıda bulunanlar sayesinde bu proje gelişmeye ve iyileşmeye devam edecektir.