// ----------------- CREATE ------------

let comments = document.getElementById("comments");
let c_comment = document.getElementById("c_comment");
let name_comment = document.getElementById("name_comment");
let msg = document.getElementById("msg");
let comment = document.getElementById("comment");
let data = [];



comments.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});


let formValidation = () => {
    if (c_comment.value === ""){
        msg.innerHTML="No puede enviarse un comentario en blanco.";
        console.log("Fail to send. Blank post");
    } else if (name_comment.value === ""){
        msg.innerHTML="Por favor introduzca su nombre.";
    } else {
        console.log("Success. Post not blank");
        msg.innerHTML="";
        acceptData();
    }
};

let acceptData = () => {
    data.push({
        name: name_comment.value,
        text: c_comment.value,
    });

    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);

    createComment();
};

let createComment = () => {
    comment.innerHTML = "";
    data.map((x, y) => {
       return(comment.innerHTML += `
       <div id=${y}>
           <h3>${x.name}</h3>
           <p> ${x.text}</p>
           <span class="options">
               <i onClick="editComment(this)" class="fas fa-edit"></i>
               <i onClick="deleteComment(this)" class="fas fa-trash-alt"></i>
           </span>
       </div>
       `);
    })
    resetForm();
};

let resetForm = () =>{
    name_comment.value ="";
    c_comment.value = "";
};

let deleteComment = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);

};

let editComment = (e) => {
    let selectedComment = e.parentElement.parentElement
    name_comment.value = selectedComment.children[0].innerHTML;
    c_comment.value = selectedComment.children[1].innerHTML;
    /*c_comment.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();*/
    deleteComment(e);
};



