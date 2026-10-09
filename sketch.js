let nnnoise;

async function setup() {
  createCanvas(800, 784);
  background(237,239,235);
  
 noStroke();  
// remove o traço 
// rect(x, y, w, h)

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
 strokeWeight(12);

// LINHA 1 - VERTICAL CENTRAL
// x = centro - 33, y1 vai do topo (0) y2 ao fundo (height)
// line(x1, y1, x2, y2)
 line(width/2-33,0,width/2-33,height);

 strokeWeight(17);

//LINHA 2 - HORIZONTAL 1
 line(0,height/2-71.98,width,height/2-71.98);

//LINHA 3 - HORIZONTAL 2
 line(0,height/2+118.04,width,height/2+118.04);

 strokeWeight(12);

//LINHA 4 - HORIZONTAL 3
 line(width/2-33,height/2+355.69,614,height/2+355.69);

//LINHA 5 - VERTICAL 2
 line(width/2+214,height,width/2+214,width/2+118.04);

//LINHA 6 - VERTICAL 3
 line(width/2-319.02,height,width/2-319.02,width/2+118.04);
 

 // tem } duplo por ser um bloco de tratamento de erro
 try {
    nnnoise = await loadImage('nnnoise.png');
    
    // Desenha a textura por cima de tudo
    drawingContext.globalAlpha = '0.6' // 0.0 a 1.0
    image(nnnoise, 0, 0, width, height);
    
    // faz um aviso caso não carregue a imagem, como no p5 que não dá
  } catch (error) {
    console.error("Erro ao carregar a imagem:", error);
  }
}