const parent = document.querySelectorAll('div');

var newDiv;
var maxImage = 38;
var imgsLenght = 0;

function verifyError(){
  imgsLenght = prompt(`Quantas imagens quer que aparece na tela? MAX: ${maxImage}`);
  if(imgsLenght > maxImage){
    imgsLenght = 0;
    alert('o valor máximo é ' + maxImage);
    verifyError();
  } else {
    displayImgs();
  }
}


function displayImgs(){
  for(i = 1; i <= imgsLenght; i++){
    createDiv();
    newDiv.appendChild(createImg());
    newDiv.appendChild(createSpan());
    parent[0].appendChild(newDiv);
  }
}

function createDiv(){
  let indexW = Math.floor(Math.random() * (0,2) + 1);
  let indexH = Math.floor(Math.random() * (0,2) + 1);

  newDiv = document.createElement('div');
  newDiv.setAttribute('class',`item-galeria w-${indexW} h-${indexH}`);
}

function createImg(){
  let newImg = document.createElement('img');
  newImg.setAttribute('class','img-galeria');
  newImg.setAttribute('id',`img${i}`)
  newImg.setAttribute('src',`images/img (${i}).jpg`);

  return newImg;
}

function createSpan(){
  let newSpan = document.createElement('span');
  newSpan.setAttribute('class','title-galeria');
  newSpan.innerText = `imagem ${i}`;

  return newSpan;
}