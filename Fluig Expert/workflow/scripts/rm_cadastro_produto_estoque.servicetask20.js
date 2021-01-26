// Programa responsável por integrar com os Webservices do RM  
// Para executar o programa, seguir os passos abaixo:  
//    1) Adicionar o arquivo abaixo ao seu projeto:  
//            http://tdn.totvs.com/download/attachments/211064343/DataClientfluig.js  
//     2) Inclua um serviço no Fluig com o nome WSDATASERVER apontando para    
//       http://localhost:8051/wsDataServer/MEX?singlewsdl (substituir localhost pelo IP e Porta do servidor RM)//.  

function servicetask20(attempt, message) {

	var NOME_DATASERVER = "EstPrdDataBR";  
	  
    /* Prepararação das variaveis */  
      //usuário e senha do aplicativo RM. O mesmo utilizado para logar no sistema e que tenha permissão de   
      //acesso ao cadastro que deseja utilizar  
      var usuario = "mestre";  
      var senha = "totvs";  
      //importante passar no contexto o mesmo código de usuário usado para logar no webservice  
      var context = "CODSISTEMA=G;CODCOLIGADA=1;CODUSUARIO=mestre"  
    /* Fim Prepararação das variaveis */  
        
  
    try{  
          
        if (isEmpty(hAPI.getCardValue("CODCOLIGADA")) || isEmpty(hAPI.getCardValue("IDPRD")))     
        return      
        var primaryKey = hAPI.getCardValue("CODCOLIGADA") + ";" + hAPI.getCardValue("IDPRD");  
  
        // carrega o webservice...  
        var authService = getWebService(usuario, senha);  
        // define o contexto...  
        var context = "CODSISTEMA=G;CODCOLIGADA=1;CODUSUARIO=mestre"  
        // faz a leitura...  
        var text = new String(authService.readRecord(NOME_DATASERVER, primaryKey, context));  
  
        if (!ChekExist(text))  
            text = GetXml();  
  
      
	    // atualiza o valor...    
        text = replaceValue(text, "CODIGOPRD" , hAPI.getCardValue("CODIGOPRD"));   
        text = replaceValue(text, "CODCOLIGADA" , hAPI.getCardValue("CODCOLIGADA"));   
        text = replaceValue(text, "IDPRD" , hAPI.getCardValue("IDPRD"));   
        text = replaceValue(text, "NOMEFANTASIA" , hAPI.getCardValue("NOMEFANTASIA"));   
        text = replaceValue(text, "DESCRICAO" , hAPI.getCardValue("DESCRICAO"));   


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
    return "<EstPrdBR >" +   
"  <TPRODUTO>" +   
"    <CODCOLPRD>1</CODCOLPRD>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODIGOPRD>01</CODIGOPRD>" +   
"    <NOMEFANTASIA>CD's</NOMEFANTASIA>" +   
"    <CODIGOREDUZIDO>0001</CODIGOREDUZIDO>" +   
"    <CODFAB>6.02</CODFAB>" +   
"    <NUMNOFABRIC>1</NUMNOFABRIC>" +   
"    <ULTIMONIVEL>0</ULTIMONIVEL>" +   
"    <TIPO>P</TIPO>" +   
"    <DESCRICAO>CD's</DESCRICAO>" +   
"    <PRECO1>0.0000</PRECO1>" +   
"    <PRECO2>0.0000</PRECO2>" +   
"    <PRECO3>0.0000</PRECO3>" +   
"    <PRECO4>0.0000</PRECO4>" +   
"    <PRECO5>0.0000</PRECO5>" +   
"    <DATABASEPRECO1>1996-07-05T00:00:00</DATABASEPRECO1>" +   
"    <DATABASEPRECO2>1996-07-05T00:00:00</DATABASEPRECO2>" +   
"    <DATABASEPRECO3>1996-07-05T00:00:00</DATABASEPRECO3>" +   
"    <DATABASEPRECO4>1996-07-05T00:00:00</DATABASEPRECO4>" +   
"    <DATABASEPRECO5>1996-07-05T00:00:00</DATABASEPRECO5>" +   
"    <CODMOEPRECO1>R$</CODMOEPRECO1>" +   
"    <CODMOEPRECO2>R$</CODMOEPRECO2>" +   
"    <CODMOEPRECO3>R$</CODMOEPRECO3>" +   
"    <CODMOEPRECO4>UFIR</CODMOEPRECO4>" +   
"    <CODMOEPRECO5>R$</CODMOEPRECO5>" +   
"    <REFERENCIACP>1</REFERENCIACP>" +   
"    <PESOLIQUIDO>0.0000</PESOLIQUIDO>" +   
"    <PESOBRUTO>0.0000</PESOBRUTO>" +   
"    <COMPRIMENTO>0.0000</COMPRIMENTO>" +   
"    <ESPESSURA>0.0000</ESPESSURA>" +   
"    <LARGURA>0.0000</LARGURA>" +   
"    <CODUNDCONTROLE>UN</CODUNDCONTROLE>" +   
"    <ESTOQUEMINIMO1>0.0000</ESTOQUEMINIMO1>" +   
"    <ESTOQUEMAXIMO1>0.0000</ESTOQUEMAXIMO1>" +   
"    <ESTOQUEMINIMO2>0.0000</ESTOQUEMINIMO2>" +   
"    <ESTOQUEMAXIMO2>0.0000</ESTOQUEMAXIMO2>" +   
"    <ESTOQUEMINIMO3>0.0000</ESTOQUEMINIMO3>" +   
"    <ESTOQUEMAXIMO3>0.0000</ESTOQUEMAXIMO3>" +   
"    <PONTODEPEDIDO1>0.0000</PONTODEPEDIDO1>" +   
"    <PONTODEPEDIDO2>0.0000</PONTODEPEDIDO2>" +   
"    <PONTODEPEDIDO3>0.0000</PONTODEPEDIDO3>" +   
"    <DTCADASTRAMENTO>1996-03-18T00:00:00</DTCADASTRAMENTO>" +   
"    <PERCENTCOMISSAO>0.0000</PERCENTCOMISSAO>" +   
"    <DESCONTOCOMPRA>0.0000</DESCONTOCOMPRA>" +   
"    <DESCONTOVENDA>0.0000</DESCONTOVENDA>" +   
"    <CUSTOUNITARIO>0.0000</CUSTOUNITARIO>" +   
"    <CODTIP>01</CODTIP>" +   
"    <CODTB2FAT>002</CODTB2FAT>" +   
"    <CODTB3FAT>001</CODTB3FAT>" +   
"    <MARGEMBRUTALUCRO>0.0000</MARGEMBRUTALUCRO>" +   
"    <PERCENTCOMISSAO2>0.0000</PERCENTCOMISSAO2>" +   
"    <QTDEVOLUME>1</QTDEVOLUME>" +   
"    <CODUNDCOMPRA>UN</CODUNDCOMPRA>" +   
"    <CODUNDVENDA>UN</CODUNDVENDA>" +   
"    <EPERIODICO>0</EPERIODICO>" +   
"    <CAMPOLIVRE>112</CAMPOLIVRE>" +   
"    <CAMPOLIVRE2>l;</CAMPOLIVRE2>" +   
"    <CAMPOLIVRE3>l;</CAMPOLIVRE3>" +   
"    <CUSTOMEDIO>0.0000</CUSTOMEDIO>" +   
"    <CUSTOREPOSICAO>0.0000</CUSTOREPOSICAO>" +   
"    <CUSTOREPOSICAOB>0.0000</CUSTOREPOSICAOB>" +   
"    <USANUMDECPRECO>0</USANUMDECPRECO>" +   
"    <CLASSEFISCALECF>0</CLASSEFISCALECF>" +   
"    <INATIVO>0</INATIVO>" +   
"    <PESAVEL>0</PESAVEL>" +   
"    <DATAULTALTERACAO>2005-04-19T00:00:00</DATAULTALTERACAO>" +   
"    <CODUSUARIO>Carlos Alberto</CODUSUARIO>" +   
"    <MARGEMLUCROFISC>0.0000</MARGEMLUCROFISC>" +   
"    <PRODUTOBASE>0</PRODUTOBASE>" +   
"    <SERVICOPRODUTORMOFFICINA>1</SERVICOPRODUTORMOFFICINA>" +   
"    <TRIBUTACAOECF>T07</TRIBUTACAOECF>" +   
"    <PRODVISIVELCLICBUSINESS>1</PRODVISIVELCLICBUSINESS>" +   
"  </TPRODUTO>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>1</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>2</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>3</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>4</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>5</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>6</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>7</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>8</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>9</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>10</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>11</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>12</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>13</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>14</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>15</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>16</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>17</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>18</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>20</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>22</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>23</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>24</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>25</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdFil>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"    <CODFILIAL>26</CODFILIAL>" +   
"    <ESTOCAVEL>1</ESTOCAVEL>" +   
"    <CONSIGNADO>0</CONSIGNADO>" +   
"  </TPrdFil>" +   
"  <TPrdCompl>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <IDPRD>1</IDPRD>" +   
"  </TPrdCompl>" +   
"</EstPrdBR>";
}