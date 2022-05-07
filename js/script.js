let itens = [];

document.querySelector('input[type=submit]')
    .addEventListener('click', () => {

        const nomeProduto = document.querySelector('input[name=nome_produto]');
        const quantProduto = document.querySelector('input[name=quantidade]');
        const precoProduto = document.querySelector('input[name=price]');

        // Puxa todos os itens adicionados para a lista.
        itens.push({
            nomeItem: nomeProduto.value,
            quantidadeItem: quantProduto.value,
            valorItem: precoProduto.value
        });

        let listaProdutos = document.querySelector('.lista-produtos');
        let somaItens = 0;
        let total = 0;

        listaProdutos.innerHTML = "";
        itens.map(function (item) {

            // Function para multiplicar valor por itens, e somar o resultado ao total.
            somaItens = parseFloat(item.quantidadeItem * item.valorItem);
            total += parseFloat(somaItens);

            listaProdutos.innerHTML += `
        <div class="lista-produtos-carrinho">
                <h3>item.:  ${item.nomeItem} </h3>
                <h3>quant.:  ${item.quantidadeItem} </h3>
                <h3> x preço unit.: R$  ${item.valorItem} </h3>
                <h3 class="price-produto">
                    <span>R$  ${somaItens.toFixed(2)} </span>
                </h3>
        </div>         
        `;
        })

        total = total.toFixed(2);
        nomeProduto.value = "";
        quantProduto.value = "";
        precoProduto.value = "";

        let elementoSoma = document.querySelector('.soma_produtos h1')
        elementoSoma.innerHTML = 'Total: R$ ' + total;

    });

// O botão limpar, faz o carrinho de compras esvaziar.    
document.querySelector('button[name=limpar]')
    .addEventListener('click', () => {
        itens = [];

        document.querySelector('.lista-produtos').innerHTML = "";
        document.querySelector('.soma_produtos h1').innerHTML = "Total: R$ 0,00";

    })