const valor = 'Global'

function minhafnc() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhafnc()
}

exec()
minhafnc()