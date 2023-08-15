const input = document.querySelector('.search')
const list = document.querySelector('#list_item')


input.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        console.log('Enter Key');
        handleAdd()
    }
})

const handleAdd = () => {
    if(input.value.length>0) {
        AddElement(input.value)
       input.value = ''    }
    else {
        window.alert("task cant be edit")
    }
}

function AddElement(text){
    const ele = document.createElement('li')
    const text_node = document.createElement("span")
    text_node.innerText = text
    ele.appendChild(text_node)
    ele.style.margin="2px 2px";
    list.appendChild(ele)

    //delete button
    const button = document.createElement('button')
    button.innerHTML = "<a onclick={deleteElement(event.target)}> Done </a>";
    button.style.margin="5px 5px  "
    button.style.padding="10px 10px "
    button.style.cursor="pointer"
    button.style.border= "2px solid white";
    button.style.backgroundColor="green";
    button.style.borderRadius="15px"
    ele.appendChild(button);
}

function deleteElement(ele){
    let text = ele.parentElement.parentElement.querySelector("span").innerText
    console.log(text)
    ele.parentElement.parentElement.remove()
}



