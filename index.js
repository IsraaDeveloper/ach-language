const fs = require('fs');

const code = fs.readFileSync('awai.ach', 'utf-8');

let translate = code
    // say "teks"
    .replace(/kheun\s+(`([^`]+)`|"([^"]+)"|'([^']+)')/g, 'console.log($1)')
    // say variabel
    .replace(/kheun\s+([a-zA-Z0-9_+\-*/%()]+)/g, 'console.log($1)')
    // jika(...) → if(...)
    .replace(/meunyoe\s*\((.+)\)/g, 'if ($1)')
    // laen: → default:
    .replace(/laen\s*:/g, 'default:')
    // laen → else
    .replace(/\blaen\b/g, 'else')
    // let variabel = nilai
    .replace(/let\s+(\w+)\s*=\s*(.+)/g, 'let $1 = $2')
    //const variabel
    .replace(/konst\s+(\w+)\s*=\s*(.+)/g, 'const $1 = $2')
    // balek → return
    .replace(/\bbalek\b/g, 'return')
    // ulang (init; kondisi; increment) → for (...)
    .replace(/ulang\s*\((.+)\)/g, 'for ($1)')
    // selama(kondisi) → while(kondisi)
    .replace(/selama\s*\((.+)\)/g, 'while ($1)')
    // untuk item di array → for (let item of array)
    .replace(/untuk\s+(\w+)\s+di\s+(\w+)/g, 'for (let $1 of $2)')
    // benar → true
    .replace(/\bbeutoi\b/g, 'true')
    // salah → false
    .replace(/\bsalah\b/g, 'false')
    // hapus komentar pakai #
    .replace(/#.+/g, '')
    // pilih(...) → switch(...)
    .replace(/pilih\s*\((.+)\)/g, 'switch ($1)')
    // kasus → case
    .replace(/\bkasus\b/g, 'case')
    // breuh → break
    .replace(/\bpiyoh\b/g, 'break')
    // import "file" → require("file")
    .replace(/cok\s+"([^"]+)"/g, 'require("$1")')
    .replace(/cok\s+'([^']+)'/g, 'require("$1")')
    // coba → try
    .replace(/\bci\b/g, 'try')
    // tangkap (err) → catch (err)
    .replace(/drob\s*\((.+)\)/g, 'catch ($1)')
    // fungsi async
    .replace(/fungsi\s+(\w+)\s*\(([^)]*)\)\s*async/g, 'async function $1($2)')
    // fungsi biasa
    .replace(/fungsi\s+(\w+)\s*\(([^)]*)\)/g, 'function $1($2)')
    // tunggo → await
    .replace(/\bpreh\b/g, 'await')
    // timeout
    .replace(/saba\s*\((\d+)\)\s*{([^}]*)}/g, 'setTimeout(() => { $2 }, $1)')
eval(translate);