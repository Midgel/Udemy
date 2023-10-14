function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    throw{
        nome: erro.msg,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase()+'!!!')
    }catch (e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)

//Evitar mostrar erros reais ao usuário
//legal seria gerar HASH ao usuário para envio ao suporte
//uso do THROW TRY CATCH e FINALLY