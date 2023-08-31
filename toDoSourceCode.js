const btn_add = document.querySelector("#btn_add");
const div_container = document.querySelector("#div_container");
const input_add = document.querySelector("#input_add");
const style_box = document.querySelector("#style_box");
const div_addList = document.querySelector("#div_addList");

let num_clicks=0;

btn_add.addEventListener("click", ()=>{

    num_clicks++; 

    const list_add = document.createElement("section");
    
    const check_list = document.createElement("input");
    check_list.setAttribute("type", "checkbox");
    check_list.setAttribute("name", "input_toDo");
    const style_inputlist =
        "margin-left: 5px;"+
        "width: 30px;"+
        "height: 50px;"
    check_list.setAttribute("style",style_inputlist);  

    const btn_remove = document.createElement("img")
    const style_btnremove =
        "background-color: #ff0000;"+
        "color: #fff;"+
        "border: 2px solid #000;"+
        "padding-block: 3px;"+
        "padding-inline: 8px;"+    
        "border-radius: 5px;"+
        "margin-left: 5px;"+
        "cursor: pointer;"+
        "width: 42px"
    btn_remove.setAttribute("style", style_btnremove);
    btn_remove.setAttribute("src", "/excluir.png");
    btn_remove.addEventListener("click", ()=>{
        list_add.remove();
    })
  
    if(input_add.value != ""){
        list_add.innerHTML = input_add.value;

        input_add.value = ""; 

        const paragraphs = document.querySelectorAll('p'); 
        paragraphs.forEach(paragraph => {
            paragraph.remove();
        });

        let style_list =
            "border: 1px solid #000;"+
            "width: 100%;"+
            "display: flex;"+
            "flex-direction: row;"+
            "justify-content: flex-end;"+
            "align-items: center;"+
            "width: 100%;"+
            "height: 60px;"+
            "font-size: 20px;"+
            "font-family: 'Times New Roman', Times, serif;"+
            "padding: 10px;"
            if(num_clicks % 2 == 0){
               style_list += "background-color: #000;"+
                "color: #fff;"
                list_add.setAttribute("style", style_list);
            }else{
                style_list +=
                "background-color: #fff;"+
                "color: #000;"
                list_add.setAttribute("style", style_list);
            }
            
        list_add.appendChild(check_list);
        list_add.appendChild(btn_remove);
        
        check_list.addEventListener('change', function() {
            if (check_list.checked) {
                console.log('O checkbox está marcado.');
                list_add.classList.add('line_through');
            } else {
                list_add.classList.remove('line_through');
                console.log('O checkbox não está marcado.');
            }
        });

    }else{
        const warning = document.createElement("p");
        const style_warning = 
        "border: 3px solid #000;"+
        "font-size: large;"+
        "color: #000;"+
        "background-color: #faf28a;"+
        "text-align: center;"+
        "margin-bottom:10px;"
        warning.innerHTML = "Digite a sua tarefa!"
        warning.setAttribute("style", style_warning)
        div_addList.appendChild(warning);
    }

    style_box.appendChild(list_add);
})
