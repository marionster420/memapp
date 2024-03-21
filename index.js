let dispute_selected = [];
let note_array = [];
let dispute_count = 0;
let dispute_span = 0;

function createDispute() {
    let start = document.getElementById("selected_dispute");
    let create_div = document.createElement("div");    
    let create_span = document.createElement("span");
    let create_textbox = document.createElement("textarea");    
    let create_textbox2 = document.createElement("textarea");  
    let create_button = document.createElement("button");
    let div_count = `dispute_div${dispute_count++}`;
    let span_count = `dispute_span${dispute_span++}`;
    let del_div = "document.getElementById('"+div_count+"').remove();dispute_count--;dispute_span--;recount_dispute();";

    create_div.className = "input-group m-1";
    create_div.setAttribute("id",div_count);    
    create_span.className = "input-group-text";
    create_span.innerText = `Dispute ${dispute_span}`;
    create_span.setAttribute("id",span_count);    
    create_textbox.className = "form-control";
    create_textbox.setAttribute("rows","5");
    create_textbox.setAttribute("name","dispute_note");
    create_textbox2.className = "form-control";
    create_textbox2.setAttribute("rows","5");
    create_textbox.className = "form-control";
    create_button.innerText = "Delete";
    create_button.className = "btn btn-primary";   
    create_button.setAttribute("onclick",del_div);
    
    start.appendChild(create_div);
    create_div.appendChild(create_span);
    create_div.appendChild(create_textbox);
    create_div.appendChild(create_textbox2);
    create_div.appendChild(create_button);
    

}

function recount_dispute() {
    let start = document.getElementById("selected_dispute");
    let span_name = start.querySelectorAll("span.input-group-text");
    let span_count = start.querySelectorAll("span.input-group-text").length;
    
    for(i=0; i<span_count; i++) {        
        span_name[i].innerText = `Dispute ${i+1}`;
    }
}

function disputes_gathering() {
    note_array = []
    let dispute_name = document.getElementsByName("dispute_note");
    for(i=0; i<dispute_name.length; i++) {    
        note_array.push(dispute_name[i].value);   
        console.log(note_array)
    }

    dispute_selected = []
    let start = document.getElementById("selected_dispute");
    let span_name = start.querySelectorAll("span.input-group-text");
    for(i=0; i<span_name.length; i++) {        
        dispute_selected.push(span_name[i].textContent);   
        console.log(dispute_selected)
    }





}
    // console.log(document.getElementsByName("dispute_note")[1].value)
    // console.log(document.getElementsByName("dispute_note").length)
