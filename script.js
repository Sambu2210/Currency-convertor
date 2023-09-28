fetch("https://api.frankfurter.app/currencies").then(res=>res.json()).then(res=>dropDown(res));

let select = document.getElementsByClassName("currency");
let btn = document.getElementById("btn");
let input = document.getElementById("input");

function dropDown(res){
    let arr = Object.entries(res);

    for(let i=0; i<arr.length; i++){
        let opt = `<option value="${arr[i][0]}">${arr[i][0]}</option>`;
         select[0].innerHTML += opt;
         select[1].innerHTML += opt;
    } 
}

btn.addEventListener('click',()=>{
    let select1 = select[0].value;
    let select2 = select[1].value;
    let money = input.value;

    if(select1 == select2)
    alert("please select different countrys")
    else
        convert(select1,select2,money)
})

function convert(select1,select2,money){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${money}&from=${select1}&to=${select2}`)
    .then(resp => resp.json())
    .then((data) => {
        let answer = Object.values(data.rates);
        console.log(answer[0])
        document.getElementById("result").value = answer[0];
    });
}