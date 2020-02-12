
hAPI.prototype = new Object();

/**
 * Idem função entry do Progress. Retorna a ocorrência <b>numEntrada</b> após o split da string. 
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  //O valor retornado é "v2"
 *  var valor = hAPI.entry(2, "v1;v2;v3", ";");
 *</pre>
 * @memberOf hAPI
 * @param {Number} numEntrada   
 * @param {String} str 
 * @param {String} delimitador 
 * @returns {String} Retorna a ocorrencia <b>numEntrada</b>
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.entry = function(numEntrada, str, delimitador){return "";};

/**
 * Retorna o valor de um campo do fichário. 
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  var valor = hAPI.getCardValue("campo1");
 *</pre>
 * @memberOf hAPI
 * @param {String} nomeCampo nome do Campo 
 * @returns {String} Valor do campo informado
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.getCardValue = function(nomeCampo){return "";};

/**
 * Atribui novo valor a um campo do fichário. 
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  hAPI.setCardValue("campo1", "valorX");
 *</pre>
 * @memberOf hAPI
 * @param {String} nomeCampo nome do Campo
 * @param {String} valor novo valor para o Campo  
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.setCardValue = function(nomeCampo, valor){};

/**
 * Encaminha o processo para uma determinada Atividade. Deve ser usado para tomar decisões em atividades automáticas de listener (AutomaticTasks)<br> 
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  var colaboradores = new java.util.ArrayList();
 *  colaboradores.add("adm");
 *  hAPI.setAutomaticDecision(2, colaboradores, "Decisão Automática");
 *</pre>
 * @memberOf hAPI
 * @param {Number} numAtividade Número da Atividade de destino.
 * @param {Array} responsaveis Lista com o ID dos colaboradores que receberão a atividade. 
 * @param {String} comentario Comentario da atividad no processo.
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.setAutomaticDecision = function(numAtividade, responsaveis, comentario){};

/**
 * Lista todas as threads em execução de um processo. 
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  var threads = hAPI.getActiveStates();
 *  log.info(threads.get(0));
 *</pre>
 * @memberOf hAPI
 * @returns {List} Lista com todas as threads em execução
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.getActiveStates = function(){return [];};
    
/**
 * Atribui um novo prazo a uma atividade do processo. 
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *	var processo = new java.lang.Integer( getValue("WKNumProces") );
 *	var data = new java.text.SimpleDateFormat("dd/MM/yyyy").parse( "10/10/2010" );
 *  hAPI.setDueDate(processo, 0, "adm", data, 0);
 *  //Define o prazo para Hoje ao meio dia
 *  hAPI.setDueDate(1, 0, "adm", new java.util.Date(), (12 * 60 * 60) );
 *</pre>
 * @memberOf hAPI
 * @param {Number} numProcesso Id do processo 
 * @param {Number} numThread Id da thread (geralmente 0). Usado para processos que possuem FORK.
 * @param {String} colaborador Id do responsavel pela atividade  
 * @param {Number} segundos Usado para calcular a hora do prazo. Deve ser informado a quantidade de segundos para atingir uma determida hora.
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.setDueDate = function(numProcesso, numThread, colaborador, novaData, segundos){};


/**
 * Transfere o processo atual para outro(s) colaborador(es).
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  var colaboradores = new java.util.ArrayList();
 *  colaboradores.add("adm");
 *  hAPI.transferTask(colaboradores, "Tarefa Transferida", 0);
 *</pre>
 * @memberOf hAPI
 * @param {Array} colaboradores Lista com os colaboradores que receberão a atividade.
 * @param {String} comentario Comentário do processo para transferência
 * @param {Number} numThread Id da thread (geralmente 0). Usado para processos que possuem FORK.
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.transferTask = function(colaboradores, comentario, numThread){};

/**
 * Transfere o processo atual para outro(s) colaborador(es).
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  var colaboradores = new java.util.ArrayList();
 *  colaboradores.add("adm");
 *  hAPI.transferTask(colaboradores, "Tarefa Transferida");
 *</pre>
 * @memberOf hAPI
 * @param {Array} colaboradores Lista com os colaboradores que receberão a atividade.
 * @param {String} comentario Comentário do processo para a transferência  
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.transferTask = function(colaboradores, comentario){};
    
/**
 * Define uma observação para a atividade atual do processo.
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  var processo = new java.lang.Integer( getValue("WKNumProces") );
 *  hAPI.setTaskComments(getValue("WKUser"), processo, 0, "Comentario Atividade");
 *</pre>
 * @memberOf hAPI
 * @param {String} colaboradore Id do colaborador.
 * @param {Number} numProcesso Id do processo  
 * @param {Number} numThread Id da thread (geralmente 0). Usado para processos que possuem FORK.
 * @param {String} comentario Comentário do processo para a atividade corrente
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.setTaskComments = function(colaborador, numProcesso, numThread, comentario){};

/**
 * Retorna o valor de uma propriedade avançada do Processo.
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  var valor = hAPI.getAdvancedProperty("Propriedade1");
 *  log.info(valor);
 *</pre>
 * @memberOf hAPI
 * @param {String} nomePropriedade Id da propriedade cadastrada.
 * @returns {String} valor da propriedade
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.getAdvancedProperty = function(nomePropriedade){return "";};


/**
 * Retorna os valores do fichário do processo.
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  var card = hAPI.getCardData(186);
 *  log.info(card.get("campo1"));
 *</pre>
 * @memberOf hAPI
 * @param {Number} numProcesso Id do processo.
 * @returns {Object} HashMap com os valores do fiha do processo
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.getCardData = function(numProcesso){return new Object();};

/**
 * Inicia uma nova instância de um processo.
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  var lista = new java.util.ArrayList();
 *  lista.add("adm");
 *  var resposta = hAPI.startProcess("ProcessoXPTO",
 *  								 0,
 *  								 lista ,
 *  								 "Iniciado automaticamente",
 *  								 false,
 *  								 null,
 *  								 false);
 *  var numProcessoCriado = resposta.get("iProcess");
 *</pre>
 * @memberOf hAPI
 * @param {String} idProcesso Código do processo cadastrado no Fluig.
 * @param {Number} numAtividade Número da atividade de inicio do processo. Pode ser informado 0.
 * @param {Array} colaboradores Id dos usuários que receberão a atividade.
 * @param {String} comentario Comentário para a atividade do processo.
 * @param {Boolean} completaTarefa indica se a tarefa sera finalizada após a criação do processo.
 * @param {Object} valoresFicha HashMap representando propriedade/valor dos campos do fichario do processo.
 * @param {Boolean} modoGestor indica se a tarefa sera inicializada com o modo gestor do Fluig ativo.
 * @returns {Object} HashMap com informações referentes ao processo criado
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.startProcess = function(idProcesso, numAtividade, colaboradores, comentario, completaTarefa, valoresFicha, modoGestor){return new Object();};

/**
 * Atribui um usuario substituto para a atividade atual do processo.
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  hAPI.setColleagueReplacement("adm");
 *</pre>
 * @memberOf hAPI
 * @param {String} novoResponsavel Id do colaborador substituto.
 * @since   Fluig 1.3
 * @see    http://www.totvs.com.br    
 */
hAPI.setColleagueReplacement = function(novoResponsavel){};

/**
 * Retorna o link para movimentação da solicitação.
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *  var valor = getUserTaskLink(2);
 *  log.info(valor);
 *</pre>
 * @memberOf hAPI
 * @param {Number} numAtividade Número da Atividade de destino.
 * @returns {String} Link para movimentação da solicitação.
 * @since   Fluig 1.1.4
 * @see    http://www.totvs.com.br    
 */
hAPI.getUserTaskLink = function(numAtividade){return "";};
