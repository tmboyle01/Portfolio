// variable for form
let form = document.getElementById("form");
// variable to save the input
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// event Listner to check for submit of form
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

// function to validate form
let formValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML = "Post Can Not Be Blank";
        console.log("failure");
    }
    else{
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = ()=>{
    posts.innerHTML += 
    `
    <div class="card">
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    <br>
    `;
    input.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}


let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}