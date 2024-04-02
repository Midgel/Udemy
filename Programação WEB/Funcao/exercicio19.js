/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

const calculaPedido = function (codigo, quantidade) {
    switch (codigo) {
        case 100:
            descricao = "Cachorro Quente";
            preco = 3;
            valor_final = quantidade * preco;
            console.log(`Sua solicitação do produto ${descricao} na quantidade ${quantidade} ficou em R$${valor_final.toFixed(2)}`);
            break;
        case 200:
            descricao = "Hambúrguer Simples";
            preco = 4;
            valor_final = quantidade * preco;
            console.log(`Sua solicitação do produto ${descricao} na quantidade ${quantidade} ficou em R$${valor_final.toFixed(2)}`);
        break;
        case 300:
            descricao = "Cheeseburguer";
            preco = 5.5;
            valor_final = quantidade * preco;
            console.log(`Sua solicitação do produto ${descricao} na quantidade ${quantidade} ficou em R$${valor_final.toFixed(2)}`);
        break;
        case 400:
            descricao = "Bauru";
            preco = 7.5;
            valor_final = quantidade * preco;
            console.log(`Sua solicitação do produto ${descricao} na quantidade ${quantidade} ficou em R$${valor_final.toFixed(2)}`);
        break;
        case 500:
            descricao = "Refrigerante";
            preco = 3.5;
            valor_final = quantidade * preco;
            console.log(`Sua solicitação do produto ${descricao} na quantidade ${quantidade} ficou em R$${valor_final.toFixed(2)}`);
        break;
        case 600:
            descricao = "Suco";
            preco = 2.8;
            valor_final = quantidade * preco;
            console.log(`Sua solicitação do produto ${descricao} na quantidade ${quantidade} ficou em R$${valor_final.toFixed(2)}`);
            break;
        default:
            console.log("Produto não existente");
            break;
    }
}

calculaPedido(500,3)