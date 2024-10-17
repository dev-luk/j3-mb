const url="https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/blob/Aula01/trabalho/trabalho-dados-gerais.json";

async function visualizarInformacoesGlobais (){
    const resposta = await fetch (url);
    const dados = await resposta.json;
    console.log(dados);
}

visualiarInformacoesGlobais();