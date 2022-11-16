let btnAdd = document.querySelector('#add');
let btnCal = document.querySelector('#calculate');
let table = document.querySelector('#mytab');
let nameInput = document.querySelector('#name');
let codeInput = document.querySelector('#Code');
let PriceInput = document.querySelector('#Price');
let QuantityInput = document.querySelector('#Qty');
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let price = PriceInput.value;
    let code = codeInput.value;
    let Quantity=QuantityInput.value;
    let template = `<tr>
    <td>${name}</td>
    <td>${Quantity}</td>
    <td>${code}</td>
    <td> ${price}</td>
    </tr>`;
    table.innerHTML += template;
    });
    btnCal.addEventListener('click', () => {
    var mytab = document.getElementById
    ('mytab');
    let sum = 0;
    for (i = 1; i < mytab.rows.length; i++) {
    var obj = mytab.rows.item(i).cells;
    // for(j=0;j<obj.length;j++){
    // info.innerHTML=info.innerHTML+' '+obj.item(j).innerHTML;
    // }
    sum += parseInt(obj.item(1).innerHTML)
    }
    info.innerHTML = "Total sum is" + sum + '<br /';
    }
    );