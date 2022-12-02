//Instância uma variável para manipular XML
xmlhttp = new XMLHttpRequest();
//Ler o arquivo XML
xmlhttp.open("GET","db/db_conteudo.xml",false);
//Enviar o arquivo para ser lido
xmlhttp.send();
//Declarar o tipo de resposta para o browser
xmlDoc = xmlhttp.responseXML;
//Organizando os dados do XML em um vetor
x = xmlDoc.getElementsByTagName("postagem");


function funcaoConteudo(){
    for(n=x.length-1;n>=0;n--){
    //for(n=0;n<x.length;n++){
        document.write("<div id='section17'><img class='img' src='imagens/" + x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='400'><div class='texto_not'><div class='texto_titulo_not'><a href='postagem.html?posicao="+ n +"'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></div>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,300) +"...</div></div>");
    }
}

function funcaoPostagem(){
        //Armazena http://127.0.0.1/blog/postagem.html?posicao=0
        url = new URL(window.location.href);
        //aramzena posicao=0
        parametro = url.searchParams;
        //Armazena 0
        i = parametro.get("posicao");
        document.write("<div id='section18'>" + "<div class='texto2_not'><div class='texto_titulo2_not'>" +  x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</div>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue +"</div>" + "<div class='img_not'><img class='img' src='imagens/" + x[i].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='600'></div></div>");    
}




