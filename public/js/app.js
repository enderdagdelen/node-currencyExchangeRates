
let screen = document.getElementById('app');

document.getElementById('button').addEventListener('click',(e)=>{

    let girdi =  document.getElementById("list").value;
    let key = 'USD'+girdi;
    
    const url = 'http://localhost:4000/currency?currency='+girdi;

    fetch(url)
    .then((response)=>{
        response.json().then((data)=>{
           
            screen.innerHTML =`<p class="lead my-4">USD/${girdi}: ${data.data[key]}</p>`
        })
    })
    .catch()

    e.preventDefault();
});



document.getElementById('buttonAll').addEventListener('click',(e)=>{
    const url = 'http://localhost:4000/currency';
    fetch(url)
    .then((response)=>{
        response.json().then((data)=>{
            let fullList = Object.keys(data.data);
            console.log(fullList);
            olist = fullList.map((item)=>{
                return `
                    <ul class="list-group">
                        <li class="list-group-item">${item}: ${data.data[item]}</li>
                    </ul>
                `
            })
            screen.innerHTML = olist;
        })
    })
    .catch((error)=>{
        console.log(error);
    })
    e.preventDefault();
})
