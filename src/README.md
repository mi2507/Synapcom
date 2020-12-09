Descrição
Interface que simula o funcionamento de saque em um caixa eletrônico. O usuário deve poder inserir o valor desejado e visualizar quais notas o caixa irá disponibilizar.

Requisitos técnicos e funcionais:
Desenvolvido utilizando HTML, CSS/SASS e Javascript;
O caixa deve entregar sempre o menor número possível de notas;
O caixa deve validar se é possível sacar o valor solicitado com as notas disponíveis;
As notas disponíveis são: R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00;

Para validação, usei os exemplos abaixo:

Valor do Saque: R$ 30,00. Resultado Esperado: 1 nota de R$ 20,00 e 1 nota de R$ 10,00.

Valor do Saque: R$ 80,00. Resultado Esperado: 1 nota de R$ 50,00, 1 nota de R$ 20,00 e 1 nota de R$ 10,00.

Valor do Saque: R$ 100,00. Resultado Esperado: 1 nota de R$ 100,00.

Valor do Saque: R$ 180,00. Resultado Esperado: 1 nota de R$ 10,00, 1 nota de R$ 50,00, 1 nota de R$ 20,00,e 1 nota de R$ 100,00. .

Valor do Saque: R$ 105,00. Resultado Esperado: Notas de indisponíveis.

Para rodar o projeto :

versão do node:
node v13.12.0 (npm v6.14.4)

para compilar o sass:
na pasta src do projeto rodar o comando :
sass --watch style.scss:style.css 
