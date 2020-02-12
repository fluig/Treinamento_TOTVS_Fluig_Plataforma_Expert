/**
 *  Permite a passagem de parametros entre eventos do Workflow.
 * <b><u>Usar em eventos de processos</u></b>.
 * @super Object
 * @memberOf globalvars
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
globalvars.prototype=new Object();

/**
 * Inclui um novo valor nos parametros gerais. 
 * <b><u>Usar em eventos de processos</u></b>.
 *<pre>
 *Exemplo:
 *  globalvars.put("nome", "valor"); 
 *</pre>
 * @memberOf globalvars
 * @param {String} nome Nome do parametro
 * @param {Object} valor Valor do parametro
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
globalvars.put = function(nome, valor){};

/**
 * Recupera um valor da tabela de parametros gerais. 
 * <b><u>Usar em eventos de processos</u></b>.
 *<pre>
 *Exemplo:
 *  var valor = globalvars.get("nome"); 
 *</pre>
 * @memberOf globalvars
 * @param {String} nome Nome do parametro
 * @returns {Object} Valor do parametro
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
globalvars.get = function(nome){return new Object();};

/**
 *  A variável log permite ao usuário enviar mensagens que ficarão expostas no log do ECM server durante a execução 
 * de um processo.
 * <b><u>Usar em qualquer evento</u></b>.
 * @super Object
 * @memberOf log
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
log.prototype=new Object();

/**
 * Efetua log de uma String com a 'criticidade' INFO. 
 * <b><u>Usar em qualquer evento</u></b>.
 *<pre>
 *Exemplo:
 *  log.info('Teste logger');
 *</pre>
 * @memberOf log
 * @param {String} str Mensagem
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
log.info = function(msg){};


/**
 * Efetua log de uma String com a 'criticidade' WARNING. 
 * <b><u>Usar em qualquer evento</u></b>.
 *<pre>
 *Exemplo:
 *  log.warn('Possível erro');
 *</pre>
 * @memberOf log
 * @param {String} str Mensagem
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
log.warn = function(msg){};

/**
 * Efetua log de uma String com a 'criticidade' ERROR. 
 * <b><u>Usar em qualquer evento</u></b>.
 *<pre>
 *Exemplo:
 *  log.error('Erro: ');
 *</pre>
 * @memberOf log
 * @param {String} str Mensagem
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
log.error = function(msg){};

/**
 * Efetua log de uma String com a 'criticidade' FATAL. 
 * <b><u>Usar em qualquer evento</u></b>.
 *<pre>
 *Exemplo:
 *  log.fatal('erro fatal: ');
 *</pre>
 * @memberOf log
 * @param {String} str Mensagem
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
log.fatal = function(msg){};


/**
 * Disponibiliza diversas funções para o envio de e-mail.
 * <b><u>Usar em eventos do Processo</u></b>.
 * @super Object
 * @memberOf notifier
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
notifier.prototype=new Object();

/**
 * Envia um e-mail customizado. 
 * <b><u>Usar em eventos do Processo</u></b>.
 *<pre>
 *Exemplo:
 *	var parametros = new java.util.HashMap();
 *  parametros.put("NOME_USUARIO", "JOAO");
 *  parametros.put("CODIGO_USUARIO", "01");
 *  //Este parametro e obrigatorio e representa o assunto do e-mail
 *  parametros.put("subject", "ASSUNTO");
 *  
 *  var usuarios = new java.util.ArrayList();
 *  usuarios.add('adm');
 *  
 *  notifier.notify('adm', 'mail1', parametros, usuarios, 'text/html');
 *</pre>
 * @memberOf notifier
 * @param {String} from Matrícula do usuario que esta enviando o e-mail
 * @param {String} template código do template (tela de customizacao de e-mail)
 * @param {Object} parametros Map com os parametros do e-mail
 * @param {Object} to List com os destinatários do e-mail
 * @param {String} mimeType Tipo do conteúdo do email 'text/html' ou 'text/plain'
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
notifier.notify = function(from, template, parametros, to, mimeType){};

/**
 * Disponibiliza diversas funções para o uso de serviços (Progress).
 * <b><u>Usar em qualquer evento</u></b>.
 * @super Object
 * @memberOf ServiceManager
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
ServiceManager.prototype=new Object();

/**
 * Obtem a classe ServiceHelper do servico especificado. 
 * <b><u>Usar em qualquer evento</u></b>.
 *<pre>
 *Exemplo:
 * var servico = ServiceManager.getService("ems2_v10");
 * var serviceHelper = servico.getBean(); 
 * </pre>
 * @memberOf ServiceManager
 * @param {String} idServico Id do servico (cadastro de servicos)
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
ServiceManager.getService = function(idServico){return new Object()};
