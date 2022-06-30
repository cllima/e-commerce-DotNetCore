// Cria uma nova pasta no wwwroot + js + carrinho.js e coloca AQUI.

// Função click inclemento sinal de +.
class Carrinho {
    clickIncremento(btn) {
        let data = this.getData(btn);
        data.Quantidade++;
        this.postQuantidade(data);
    }

     // Criando função click decremento  sinal de -.
    clickDecremento(btn) {
        let data = this.getData(btn);
        data.Quantidade--;
        this.postQuantidade(data);
    }

    updateQuantidade(input) {
        let data = this.getData(input);
        this.postQuantidade(data);
    }

    getData(elemento) {
        var linhaDoItem = $(elemento).parents('[item-id]');
        var itemId = $(linhaDoItem).attr('item-id');
        var novaQtde = $(linhaDoItem).find('input').val();

        return {
            Id: itemId,
            Quantidade: novaQtde
        };
    }

     //Coloca AQUI - A função Ajax sempre dentro de uma section
    postQuantidade(data) {
        $.ajax({
            url: '/pedido/updatequantidade',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        });
    }
}

var carrinho = new Carrinho();



