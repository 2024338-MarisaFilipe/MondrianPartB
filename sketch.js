//variavel para guardar textura e strokeweight
let nnnoise;
let w1, w2, w3, w4, w5, w6;

async function setup() {
  createCanvas(800, 784);

  //o random dos strokeweight de cada linha
  w1 = random(12, 30);
  w2 = random(12, 30);
  w3 = random(12, 30);
  w4 = random(12, 30);
  w5 = random(12, 30);
  w6 = random(12, 30);

 // carrega imagem + faz um aviso caso não carregue a imagem, como no p5 que não dá
  try {
    nnnoise = await loadImage('nnnoise.png');
  } catch (error) {
    console.error("Erro ao carregar a imagem:", error);
  }
}

function draw() {

  // os valores aleatórios a cada 10 frames
  if (frameCount % 10 === 0) {
    w1 = random(12, 30);
    w2 = random(12, 30);
    w3 = random(12, 30);
    w4 = random(12, 30);
    w5 = random(12, 30);
    w6 = random(12, 30);
    }

   background(237,239,235);
noStroke()

//vermelho
 fill(229, 26, 19);
 rect(0,0,width/2-33,320.02);

 //amarelo
 fill(246,205,0);
 rect(0,height/2+118.04,width/2-319.02,273);

// azul
 fill(36,34,117);
 rect(366.54,height/2+118.04,width/2-150,247);

//linhas
 stroke(51);


// x = centro - 33, y1 vai do topo (0) y2 ao fundo (height)
// line(x1, y1, x2, y2)

//organizei assim por uma questão de sobreposição:

// LINHA 1 - VERTICAL CENTRAL 
strokeWeight (w1);
 line(width/2-33,0,width/2-33,height);

//LINHA 5 - VERTICAL 2
strokeWeight(w5);
 line(width/2+214,height,width/2+214,width/2+118.04);

//LINHA 6 - VERTICAL 3
strokeWeight(w6);
 line(width/2-319.02,height,width/2-319.02,width/2+118.04);
 

//LINHA 2 - HORIZONTAL 1
strokeWeight(w2);
 line(0,height/2-71.98,width,height/2-71.98);

//LINHA 3 - HORIZONTAL 2
strokeWeight(w3);
 line(0,height/2+118.04,width,height/2+118.04);

//LINHA 4 - HORIZONTAL 3
strokeWeight(w4);
line(width/2-25, height/2+355.69, 609, height/2+355.69);
 
 // textura
if (nnnoise) {
  drawingContext.globalAlpha = 0.6;
  image(nnnoise, 0, 0, width, height);
  drawingContext.globalAlpha = 1; //
  }
}