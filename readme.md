##### Intenções
Ao ter o meu código funcional com a composição base pensei em como queria o random e pensei numa composição que se mexesse com as linhas, neste caso o strokeWeight, por ter tanta diversidade de grossura de linhas achei que seria visualmente interessante fazer-las diminuir e aumentar em tempor real.

##### Processo

Tentei mudar o random dos strokeweights:
strokeWeight = random (12,30); Tanto individualmente como com diferentes medidas para cada uma linha em conta com as grossuras originais. Como eu tinha alguns strokeWeight(0) a pairar no código pem simultâneo acabei por remover-los. O random acabou por funcionar mas não da forma que esperava, as linhas mudavam de grossura cada vez que atualizava a composição mas não mudavam em tempo real. Rapidamente percebi que faltava algo.


