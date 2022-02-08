var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["bank"] = document.getElementById("bank").value;
    formData["branchName"] = document.getElementById("branchName").value;
    formData["branchCode"] = document.getElementById("branchCode").value;
    formData["swiftCode"] = document.getElementById("swiftCode").value;
    formData["address"] = document.getElementById("address").value;   

    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("bankDetails").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.bank;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.branchName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.branchCode;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.swiftCode;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.address;      
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('bank').value = selectedRow.cells[0].innerHTML;
    document.getElementById('branchName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('branchCode').value = selectedRow.cells[2].innerHTML;
    document.getElementById('swiftCode').value = selectedRow.cells[3].innerHTML;
    document.getElementById('address').value = selectedRow.cells[4].innerHTML;
    

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.bank;
    selectedRow.cells[1].innerHTML = formData.branchName;
    selectedRow.cells[2].innerHTML = formData.branchCode;
    selectedRow.cells[3].innerHTML = formData.swiftCode;
    selectedRow.cells[4].innerHTML = formData.address;
   
}

function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('bankDetails').deleteRow(row.rowIndex);
    }
    resetForm();
}

let formBlock = document.getElementById('formTable');
let cancelBlock = document.getElementById('cancelBlock');
let formButton = document.getElementById('create');
let cancelButton = document.getElementById('cancel');


formButton.addEventListener('click', function () {
    formBlock.classList.remove('hidden');      
    cancelBlock.classList.add('hidden');      
    formButton.classList.add('button-active');
    cancelButton.classList.remove('button-active');  
})

cancelButton.addEventListener('click', function () {
    formBlock.classList.add('hidden');      
    cancelBlock.classList.remove('hidden');      
    formButton.classList.remove('button-active');
    cancelButton.classList.add('button-active');  

})
