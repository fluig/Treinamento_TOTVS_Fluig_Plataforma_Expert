/**
 * Propriedade contentdo o último Id de um filho (cadastro pai/filho).<b><u>Disponível quando o fichário possui um pai/filho padrão</u></b>.<br>
 * &lt;table  tablename="nomeDoFilho"&gt;&lt;/table&gt;
 * @type {Number}
 * @memberOf Global
 * @since   Fluig 1.3
 * @see    http://www.fluig.com     
 */
Global.prototype.newId=0;


/**
 * Retorna o dados de um determinado dataset/fichário. <b><u>Usar no HTML de qualquer fichário</u></b>.<br> 
 *<u>O arquivo vcXMLRPC.js precisa ser declarado</u><br>
 *&lt;script&gt; type="text/javascript" src="/webdesk/vcXMLRPC.js"&gt;&lt;/script&gt;
 * <pre>
 *Exemplo:
 * 
 *  var filtro = new Object();
 *  filtro["colleaguePK.colleagueId"] = "adm";
 *  var colaboradores = getDatasetValues("colleague", filtro);
 * 		
 *  if(colaboradores.length > 0) {
 *    alert(colaboradores[0].colleagueName);
 *  }
 * <pre>
 * @memberOf Global
 * @param {String} tablename nome da tabela filho. Atributo <code>tablename</code> de uma table.
 * @returns {Number} Id do filho criado
 * @since   Fluig 1.3
 * @see    http://www.fluig.com     
*/
wdkAddChild = function(tablename){return 0;};


