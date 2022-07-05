
window.onload = function(){
    let sectionKey = 0;
    const inputText = document.getElementById('schedule');
    const addButton = document.getElementById('add-button');
    const checkBox = document.querySelector("input[name=checkBox]");

    const addButtonClickHandler =(event) => {
        const addDate = (new Date()).toString();
        const li = document.createElement('div');
        li.id = `${sectionKey}Li`;
        console.log(li)
        const tmpId = li.id.toString();
        li.innerHTML += `<table class="table__table"><th>${addDate}</th><th>${inputText.value}</th><th><input type="checkbox" name="checkBox" id = ${sectionKey++} /></th></table>`
        li.lastChild.addEventListener('change',checkBoxCheckedHandler);
        document.getElementById('table').appendChild(li);
        inputText.value = "";
    }

    function enterHandler(e){
        if(e.keyCode === 13){
            addButtonClickHandler(e);
        }
    }

   function checkBoxCheckedHandler(e){
        if (e.target.value) {
            if(confirm("Are you sure to delete it?")){
                console.log(e.target.id)
                let list = document.getElementById(`${e.target.id}Li`);
                console.log(list)
                list.parentNode.removeChild(list)
            }
        }
    }

    addButton.addEventListener('click', addButtonClickHandler);
    inputText.addEventListener('keypress',enterHandler);
}
