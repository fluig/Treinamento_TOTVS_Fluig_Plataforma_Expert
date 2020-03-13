function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
    var NOME_DATASERVER = "TstAreaData";  
    
    /* Prepararação das variaveis */  
      //usuário e senha do aplicativo RM. O mesmo utilizado para logar no sistema e que tenha permissão de   
      //acesso ao cadastro que deseja utilizar  
      var usuario = "mestre";  
      var senha = "totvs";  
      //importante passar no contexto o mesmo código de usuário usado para logar no webservice  
      var context = "CODSISTEMA=G;CODCOLIGADA=1;CODUSUARIO=mestre"  
    /* Fim Prepararação das variaveis */  
        	  
    try{  
          
        if (isEmpty(hAPI.getCardValue("CODCOLIGADA")) || isEmpty(hAPI.getCardValue("CODAREA")))     
        return      
        var primaryKey = hAPI.getCardValue("CODCOLIGADA") + ";" + hAPI.getCardValue("CODAREA");  
  
        // carrega o webservice...  
        var authService = getWebService(usuario, senha);  
        // define o contexto...  
        var context = "CODSISTEMA=G;CODCOLIGADA=1;CODUSUARIO=mestre"  
        // faz a leitura...  
        var text = new String(authService.readRecord(NOME_DATASERVER, primaryKey, context));  
  
        if (!ChekExist(text))  
            text = GetXml();  
  
        // atualiza o valor...  
        text = replaceValue(text, "CODCOLIGADA" , hAPI.getCardValue("CODCOLIGADA"));   
        text = replaceValue(text, "CODAREA" , hAPI.getCardValue("CODAREA"));   
        text = replaceValue(text, "NOME" , hAPI.getCardValue("NOME"));  
  
  
        var result = new String(authService.saveRecord(NOME_DATASERVER, text, context));   
          
    // se retornou a chave, salvou ok...  
        checkIsPK(result, 2);  
    }  
    catch (e)   
    {  
        if (e == null)  e = "Erro desconhecido!";  
        var mensagemErro = "Ocorreu um erro ao salvar dados no RM: " + e;  
        throw mensagemErro;  
    } 
	
}

function GetXml()  
{  
    return "<TstArea >" +   
"  <BArea>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <CODAREA>01</CODAREA>" +   
"    <NOME>Sistemas RM - Linha MSDOS - área RH</NOME>" +   
"    <DESCRICAO>Está área engloba todas as questões de prova refente aos sistemas da RM na linha de RH, desenvolvidos, em DOS, como :RM FOLHA, RM PONTO</DESCRICAO>" +   
"  </BArea>" +   
"</TstArea>";  
      
}  


