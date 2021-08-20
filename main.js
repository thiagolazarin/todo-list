let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#lista')
let el = document.getElementsByTagName('li')

btn.addEventListener('click',() => {
    let txt = input.value 

    if(txt === ""){
        alert('Você precisa digitar algo')
    }else{
        let li = document.createElement('li')
        li.innerHTML = `${txt} <button class="delete" id="btnD">
            X
        </button>`;
        list.appendChild(li)
        input.value = '';

        let apagar = document.getElementsByClassName("delete");
        for(let i=0; i<apagar.length; i++){
            apagar[i].onclick = function(){
            this.parentNode.remove()
        }
}
    }
})


