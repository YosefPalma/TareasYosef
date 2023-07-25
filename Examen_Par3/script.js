let game=document.getElementById("game"); //Nombre del video juego
let dates=document.getElementById("dates") //Fechas de lanzamiento
let descripcion = document.getElementById("descripcion");  //Descripciíon del juego
let post = document.getElementById("post");

form_modal.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if(game.value === "" || dates.value === "" || descripcion.value === ""){
  
  }else{
    acceptData();
  }
};
let games={};
let dates_games={};
let descripciones={};

let acceptData = () => {
  games["text"]= game.value;
  dates_games["text"]=dates.value;
  descripciones["text"] = descripcion.value;
  createPost();
  modal_close();
};

let createPost = () => {

  post.innerHTML += `
    <div>
      <p>${games.text}</p>
      <p>Fecha de lanzamiento: ${dates_games.text}</p>
      <p>${descripciones.text}</p>
      <span>
        <i onclick="editpost(this)" class="fas fa-edit"></i>
        <i onclick="deletepost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;
  descripcion.value = "";
  game.value="";
};

let editpost = (e) => {
  
  descripcion.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  modal_open();
  game.value=e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
}

let deletepost = (e) => {
  e.parentElement.parentElement.remove();
}

let deleteAll =(e)=>{
  e.parentElement.remove();
}
let modal_open=()=>{
  modal.showModal();

};
let modal_close=()=>{
  modal.close();
};
