let add = document.getElementById("btn");
let inp = document.getElementById("inp");
let outputs = document.getElementById("outputs");

let dataPro;

if (localStorage.data != null) {
  dataPro = JSON.parse(localStorage.data);
} else {
  dataPro = [];
}

add.onclick = function () {
  let newPro = {
    p: inp.value,
  };

  dataPro.push(newPro);
  localStorage.setItem("data", JSON.stringify(dataPro));
  showData();
  inp.value = '';
  inp.focus();
};
function showData(params) {
  let table = "";

  for (let i = 0; i < dataPro.length; i++) {
    table += `
             <p>${dataPro[i].p} <button id="del" onclick='deleteData(${i})'>Delete</button></p>
             
    `;
  }

  outputs.innerHTML = table;
}
showData();

function deleteData(i) {
  dataPro.splice(i, 1);
  localStorage.data = JSON.stringify(dataPro);
  showData();
}
