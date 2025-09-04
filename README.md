# 🌀 Ach Language

**Ach Language** adalah bahasa pemrograman sederhana berbasis JavaScript dengan sintaks khas bahasa Aceh.
Tujuannya untuk mempermudah belajar pemrograman dengan nuansa lokal.

![GitHub repo size](https://img.shields.io/github/repo-size/IsraaDeveloper/ach-language?color=blue)
![GitHub stars](https://img.shields.io/github/stars/IsraaDeveloper/ach-language?style=social)
![GitHub forks](https://img.shields.io/github/forks/IsraaDeveloper/ach-language?style=social)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Fitur

* `kheun` → menampilkan teks atau variabel (seperti `console.log`)
* `meunyoe` → percabangan `if`
* `laen` → `else`
* `ulang` → perulangan `for`
* `selama` → perulangan `while`
* `untuk ... di ...` → perulangan `for ... of`
* `beutoi` → `true`
* `salah` → `false`
* `balek` → `return`
* `pilih` → `switch`
* `kasus` → `case`
* `piyoh` → `break`
* `ci ... drob` → `try ... catch`
* `fungsi` → `function`
* `preh` → `await`
* `saba(ms) { ... }` → `setTimeout`

> Komentar menggunakan `#`.

---

## 🚀 Instalasi & Menjalankan

1. Clone repository:

   ```bash
   git clone https://github.com/IsraaDeveloper/ach-language.git
   cd ach-language
   ```

2. Install dependency:

   ```bash
   npm install
   ```

3. Buat file baru dengan format **`.ach`**, contoh: `awai.ach`

4. Tulis kode Ach Language di file tersebut.

5. Jalankan dengan:

   ```bash
   npm start
   ```

---

## 📝 Contoh Kode

**`awai.ach`**

```ach
# Contoh dasar Ach Language

let angka = 10
konst nama = "Ach Language"

kheun "Hello Dunia!"
kheun nama
kheun angka

meunyoe (angka > 5) {
    kheun "Angka lebih besar dari 5"
} laen {
    kheun "Angka kecil atau sama dengan 5"
}

ulang (let i = 0; i < 3; i++) {
    kheun "Perulangan ke-" + i
}
```

**Output**

```bash
Hello Dunia!
Ach Language
10
Angka lebih besar dari 5
Perulangan ke-0
Perulangan ke-1
Perulangan ke-2
```

---

## 📂 Struktur Project

```
ach-language/
├── index.js        # Compiler utama
├── package.json    # Konfigurasi project
├── awai.ach        # File contoh
└── README.md       # Dokumentasi
```

---

## 🤝 Kontribusi

Pull request sangat diterima!
Jika menemukan bug atau ingin menambahkan fitur baru, silakan buat **issue** atau **PR**.

---

## 📜 Lisensi

Project ini dirilis di bawah lisensi **MIT License**.
Bebas digunakan, dimodifikasi, dan dikembangkan lebih lanjut.

---

🔥 Selamat coding dengan **Ach Language**!
