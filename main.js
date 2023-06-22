// ----------------- CREATE ------------

let comments = document.getElementById("comments");
let c_comment = document.getElementById("c_comment");
let msg = document.getElementById("msg");
let comment = document.getElementById("comment");
let data = {};


comments.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});


let formValidation = () => {
    if (c_comment.value === ""){
        msg.innerHTML="No puede enviarse un comentario en blanco.";
        console.log("Fail to send. Blank post");
    } else {
        console.log("Success. Post not blank");
        msg.innerHTML="";
        acceptData();
    }
};

let acceptData = () => {
    data["text"] = c_comment.value;
    console.log(data);

    createComment();
};

let createComment = () => {
    comment.innerHTML += `
    <div>
        <p> ${data.text}</p>
        <span class="options">
            <i onClick="editComment(this)" class="fas fa-edit"></i>
            <i onClick="deleteComment(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;

    c_comment.value = "";
};

let deleteComment = (e) => {
    e.parentElement.parentElement.remove();
};

let editComment = (e) => {
    c_comment.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};


