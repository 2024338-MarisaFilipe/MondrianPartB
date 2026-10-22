##### Intenções
Ao ter o meu código funcional com a composição base pensei em como queria o random e pensei numa composição que se mexesse com as linhas, neste caso o strokeWeight, por ter tanta diversidade de grossura de linhas achei que seria visualmente interessante fazer-las diminuir e aumentar em tempor real. A minha intenção com esta composição foi criar um mundo movimentado para além do racionalismo abstrato que esta obra me representa. Pensei na ideia da linha ultrapassar os limites como um desafio ao ultrapassar os limites do ratio e do que é a estaticidade plástica e moral. De uma forma literal, também ultrapassar a minha limitação de conhecimento perante código e desafiar-me a fazer parte de uma composição.

##### Processo

Tentei mudar o random dos strokeweights:
strokeWeight = random (12,30); Tanto individualmente como com diferentes medidas para cada uma linha em conta com as grossuras originais. Como eu tinha alguns strokeWeight(0) a pairar no código pem simultâneo acabei por remover-los. O random acabou por funcionar mas não da forma que esperava, as linhas mudavam de grossura cada vez que atualizava a composição mas não mudavam em tempo real. Rapidamente percebi que faltava algo.

 Como era praticamente uma animação eu percebi que poderia ter algo haver com o random mudar com os frames mas não percebi que função ou expressão faria isso. Quando pesquisei no P5js por frame a única coisa que me pareceu relevante para o que queria era o frameRate() e o frameCount(). Porém os exemplos do site não eram propriamente explicativos do que queria fazer então perguntei ao Ecosia e aprendi que o frameCount iria criar valores aleatórios a cada frame que eu quizesse por. Novamente tinha também a questão do let por ter de carregar.

 ##### Aplicação e ajustes

Então por baixo do let nnoise; adicionei o let w1, w2, w3, w4, w5, w6; que corresponde às minhas linhas e à sua grossura individual.

Dentro do async function setup() adicionei os randoms de cada linha. 
  w1 = random(12, 30);
  w2 = random(12, 30);
  w3 = random(12, 30);
  w4 = random(12, 30);
  w5 = random(12, 30);
  w6 = random(12, 30);

Estes randoms são o strokeWeight que se randomiza de 12 a 30 de grossura, se quizesse algo estático seria simples assim mas ainda me falta atribuir a parte pelos frames.

Dentro da função async function setup() tive que mover o try da textura porque podia criar erros ou lag caso pusesse dentro da próxima função que ia criar, o function draw().

Dentro do function draw() usei a recomendação que o Ecosia me deu anteriormente e criei o frame o if (frameCount % 10 === 0). Ao ir destruíndo e testanto percebi que sem o if a espessura da linha mudaria a cada único frame. Pesquisei online também o que faz o % e o === na função e este site  https://www.w3schools.com/js/js_arithmetic.asp explicou me que o (%) retorna o resto da divisão enquanto que o === é um valor igual e um tipo igual. De qualquer forma não deixa de ser uma expressão inteira e é mais fácil de compreender através da função que é criar um efeito, neste caso de mudança através dos frames. 

Ao ter os valores random do w1, w2, w3, w4, w5, w6 tal como a textura tenho que adicionar algo que os conecte às linhas, neste caso seria o strokeWeight(wX)ao por na LINHA 1 - VERTICAL CENTRAL o strokeWeight (w1) cria uma associação que depois faz com que a linha vá mudando com os valores minímos e máximos do random juntamente com a mudança dos frames, que cria o efeito de aumentar e diminuir a grossura das linhas na composição.

Para ter a composição completamente perfeita adicionei o   drawingContext.globalAlpha = 1 porque sem ele a composição fica semi transparente e assim a opacidade mantêm-se estável perante os frames.

Tertei remover o noStroke para ver como ficava e os retângulos começaram a aumentar exponensialmente por terem um traço de volta logo voltei a por pela sua função.

Adicionalmente para além de ter retirado os strokeWeights que tinha na parte A para não fazer erros, mudei também o nome das linhas para não ser tão confuso pela ordem. Mudei também as medidas da linha horizontal 3 de x1 (width/2-33) para x1 (width/2-25) e x2 de (614) para x2 (609) pela questão de quando as linhas aumentam com os frames, por ser de 12 a 30 aumentam e ultrapassa o limite. Logo, ao diminuir vai ficar sobreposto pelo retângulo e não causa o problema da linha ficar de fora. 

Caso tenha mudado mais algum valor nas linhas seria pelo mesmo motivo, o motivo causar deslizes de tamanho que se notavam. Acredito que a minha experiência com o random tenha funcionado bem, apesar que também podia ter feito o random sem a adição de frames e usar o reload para ver a mudança de forma mais estática, mas fiquei mais satisfeita com o resultado assim.