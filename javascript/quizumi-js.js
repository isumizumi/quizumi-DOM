// Tugas: Quiz Hacktiv8
var body = document.body;
document.body.style.backgroundImage = "url('image/background.jpg')";

var firstDiv = document.createElement('div');
firstDiv.setAttribute('class', 'header');
body.appendChild(firstDiv);

var imageLogo = document.createElement('img');
imageLogo.src = "image/logo1.png";
firstDiv.appendChild(imageLogo);

var breakLine = document.createElement('br');
body.appendChild(breakLine);

var secondDiv = document.createElement('div');
secondDiv.setAttribute('id', 'content');
secondDiv.setAttribute('class', 'body');
body.appendChild(secondDiv);

var h1 = document.createElement('h1');
var h1Text = document.createTextNode('.:: Quizumi ::.');
h1.appendChild(h1Text);
secondDiv.appendChild(h1);

var p1 = document.createElement('p');
var p1Text = document.createTextNode('Welcome to the Hacktiv8 Academic Quiz.');
var breakLine = document.createElement('br');
body.appendChild(breakLine);
var p1Text = document.createTextNode('Keep calm and answer the questions.');
p1.appendChild(p1Text);
secondDiv.appendChild(p1);

var form = document.createElement('form');
form.setAttribute('name', 'myForm');
form.setAttribute('id', 'myForm');
form.setAttribute('onsubmit', 'return false');
var formText = document.createTextNode('Nama: ');
form.appendChild(formText)
secondDiv.appendChild(form);

var inputForm = document.createElement('input');
inputForm.setAttribute('type', 'text');
inputForm.setAttribute('name', 'fname');
inputForm.setAttribute('id', 'fname');
inputForm.setAttribute('placeholder', 'Contoh: Isumi Karina');
form.appendChild(inputForm);

var breakLine = document.createElement('br');
form.appendChild(breakLine);
var breakLine = document.createElement('br');
form.appendChild(breakLine);

var labelForm = document.createElement('label');
labelForm.setAttribute('for', 'selectBatch');
var labelText = document.createTextNode('Batch: ');
labelForm.appendChild(labelText);
form.appendChild(labelForm);

var selectForm = document.createElement('select');
selectForm.setAttribute('id', 'selectBatch');
selectForm.setAttribute('name', 'selectBatch');
form.appendChild(selectForm);

var firstOptionForm = document.createElement('option');
firstOptionForm.setAttribute('value', 'Arctic Fox');
var firstOptionText = document.createTextNode('1. Arctic Fox');
firstOptionForm.appendChild(firstOptionText);
selectForm.appendChild(firstOptionForm);

var secondOptionForm = document.createElement('option');
secondOptionForm.setAttribute('value', 'Branford Fox');
var secondOptionText = document.createTextNode('2. Branford Fox');
secondOptionForm.appendChild(secondOptionText);
selectForm.appendChild(secondOptionForm);

var thirdOptionForm = document.createElement('option');
thirdOptionForm.setAttribute('value', 'Cross Fox');
var thirdOptionText = document.createTextNode('3. Cross Fox');
thirdOptionForm.appendChild(thirdOptionText);
selectForm.appendChild(thirdOptionForm);

var fourthOptionForm = document.createElement('option');
fourthOptionForm.setAttribute('value', 'Darwin Fox');
var fourthOptionText = document.createTextNode('4. Darwin Fox');
fourthOptionForm.appendChild(fourthOptionText);
selectForm.appendChild(fourthOptionForm);

var breakLine = document.createElement('br');
body.appendChild(breakLine);

var p2 = document.createElement('p');
p2.setAttribute('id', 'container');
secondDiv.appendChild(p2);

var button = document.createElement('button');
button.setAttribute('type', 'button');
button.setAttribute('class', 'button2 button1');
var buttonText = document.createTextNode('Take Quiz!');
button.addEventListener('click', function(){
  quiz();
});
button.appendChild(buttonText);
secondDiv.appendChild(button);

var thirdDiv = document.createElement('div');
thirdDiv.setAttribute('class', 'footer');
var imageLogo2 = document.createElement('img');
imageLogo2.src = "image/logo2.png";
thirdDiv.appendChild(imageLogo2);
body.appendChild(thirdDiv);

// Tipe data object
var student  = function() {
  this.phase = "";
  this.level = function(phase) {
    if (phase.toLowerCase() === "satu") {
      return "Selamat ya jawaban kamu BENAR SEMUA! Nilaimu SEMPURNA!";
    }
    else if (phase.toLowerCase() === "nol") {
      return "Jawaban kamu masih ada yang SALAH! Nilaimu BELUM SEMPURNA!";
    }
    else if (phase.toLowerCase() === "remedial") {
      return "Jawaban kamu masih ada yang RAGU-RAGU, jadi perlu remedial dulu!";
    }
    else {
      return "Kamu masih asal-asalan mengerjakan Quiz! Silakan diulangi!";
    }
  };
}

// Object newStudent
var newStudent = new student();

// Conditional untuk menentukan phase
var benar = 0, salah = 0; ragu = 0;

function phaseLevel() {
    if (benar === 5) {
      newStudent.phase = "Satu";
    }
    else if (salah >=  1 && ragu === 0) {
      newStudent.phase = "Nol";
    }
    else if (ragu >=  1 && salah === 0) {
      newStudent.phase = "Remedial";
    }
}

function a() {
  benar++;
  phaseLevel();
}

function b() {
  salah++;
  phaseLevel();
}

function c() {
  ragu++;
  phaseLevel();
}

var name  = "";
var batch = "";
// Fungsi dari kumpulan pertanyaan + ending
function quiz() {
  name = document.getElementById("fname").value;
  batch = document.getElementById("selectBatch").value;
  document.getElementById("content").innerHTML =  "Quiz ini berisi pertanyaan tentang materi di Phase 0." + "<br/>";
  document.getElementById("content").innerHTML += "Selamat mengerjakan! Das beste!" + "<br/>" + "<br/>";
  document.getElementById("content").innerHTML += "Hint: Bacalah setiap pernyataan pelan-pelan saja." + "<br/>" + "Hati-hati ada jebakan Batman! ^_^" + "<br/>" + "<br/>";
  document.getElementById("content").innerHTML += "Cara menjawab:" + "<br/>";
  var ask = ["Klik tombol BENAR jika menurutmu pernyataan SANGAT TEPAT.",
             "Klik tombol SALAH jika menurutmu pernyataan BELUM TEPAT.",
             "Klik tombol TIDAK YAKIN jika kamu masih RAGU-RAGU."];
  for(var i = 0; i < ask.length; i++) {
    var j = i+1;
    document.getElementById("content").innerHTML += "<br/>" + j + ". " + ask[i] + "<br/>";
  }
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='question1()'>Next</button></p>";
}

function question1() {
  document.getElementById("content").innerHTML = "Apa pendapatmu tentang pernyataan di bawah ini:";
  document.getElementById("content").innerHTML += "<br/>" + "<br/>" + "HTML5 support penggunaan tag header untuk menggantikan div.";
  document.getElementById("content").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>BENAR</button> <button type='button' class='button2 button1' onclick='b()'>SALAH</button> <button type='button' class='button2 button1' onclick='c()'>TIDAK YAKIN</button></p>";
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='question2()'>Next</button></p>";
}

function question2() {
  document.getElementById("content").innerHTML = "Apa pendapatmu tentang pernyataan di bawah ini:";
  document.getElementById("content").innerHTML += "<br/>" + "<br/>" + "Bentuk umum selektor (CSS) adalah seperti ini:" + "<br/>" + "selector { property: value; /* properti lainnya */ }";
  document.getElementById("content").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>BENAR</button> <button type='button' class='button2 button1' onclick='b()'>SALAH</button> <button type='button' class='button2 button1' onclick='c()'>TIDAK YAKIN</button></p>";
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='question3()'>Next</button></p>";
}

function question3() {
  document.getElementById("content").innerHTML = "Apa pendapatmu tentang pernyataan di bawah ini:";
  document.getElementById("content").innerHTML += "<br/>" + "<br/>" + "Perbedaan struktur perulangan WHILE dengan DO-WHILE terletak pada posisi pengecekan kondisi." + "<br/>" + "Pada WHILE kondisi dicek saat awal perulangan, sedangkan DO-WHILE kondisi perulangan dicek terakhir.";
  document.getElementById("content").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>BENAR</button> <button type='button' class='button2 button1' onclick='b()'>SALAH</button> <button type='button' class='button2 button1' onclick='c()'>TIDAK YAKIN</button></p>";
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='question4()'>Next</button></p>";
}

function question4() {
  document.getElementById("content").innerHTML = "Apa pendapatmu tentang pernyataan di bawah ini:";
  document.getElementById("content").innerHTML += "<br/>" + "<br/>" + "Pada output akan tampil undefined, jika mengetikkan kode seperti ini:" + "<br/>" + "function tampilkanAngka(angka) { return angka }" + "<br/>" + "console.log(tampilkanAngka());";
  document.getElementById("content").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>BENAR</button> <button type='button' class='button2 button1' onclick='b()'>SALAH</button> <button type='button' class='button2 button1' onclick='c()'>TIDAK YAKIN</button></p>";
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='question5()'>Next</button></p>";
}

function question5() {
  document.getElementById("content").innerHTML = "Apa pendapatmu tentang pernyataan di bawah ini:";
  document.getElementById("content").innerHTML += "<br/>" + "<br/>" + "Split pada fungsi array untuk memecah string dan mengembalikan nilai berupa array sesuai dengan pemisah tertentu yang didefinisikan.";
  document.getElementById("content").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>BENAR</button> <button type='button' class='button2 button1' onclick='b()'>SALAH</button> <button type='button' class='button2 button1' onclick='c()'>TIDAK YAKIN</button></p>";
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='endStory()'>Next</button></p>";
}

function endStory() {
  document.getElementById("content").innerHTML = "Terima kasih atas jawabanmu dalam quiz ini." + "<br/>" + "<br/>" + "Berdasarkan hasil quiz, inilah prediksi kelulusanmu. " + "<br/>" + "<br/>" + "Nama : " + name + "<br/>" + "Batch : " + batch + "<br/>" + "<br/>" + "Kamu akan belajar di phase: " + newStudent.phase + "<br/>" + newStudent.level(newStudent.phase);
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='spoiler()'>Are You Ready Live Coding!? Just Click Me! >_<</button></p>";
}

function spoiler() {
  document.getElementById("content").innerHTML = "Adapun kompetensi yang akan diujikan adalah:" + "<br/>";

  var kisi = ["Tipe data angka, string, dan boolean", "Array", "Kondisional", "Looping", "Built-in Function", "Rekursif (Sederhana)", "Sintaks ES6 (let, const, dan class)"];
  for(var x = 0; x < kisi.length; x++) {
    var y = x+1;
    document.getElementById("content").innerHTML += "<br/>" + y + ". " + kisi[x] + "<br/>";
  }
  document.getElementById("content").innerHTML += "<br/>" + ":: Semoga sukses semuanya! Ganbatte! Das Beste! All the best! ::" + "<br/>";
}