/**
 * Retorna o valor das propriedades do processo. <b><u>Usar em eventos do processo e eventos de ficharios de processo</u></b>.<br> 
 * <pre>
 *Exemplo:
 *  var numProcesso = getValue("WKNumProces");
 * </pre>
 * Valores
 * <ul>
 * <li>WKDef		Código do processo
 * <li>WKVersDef	Versão do processo
 * <li>WKNumProces	Número do processo
 * <li>WKNumState	Número da atividade
 * <li>WKCompany	Número da Empresa
 * <li>WKUser		Usuário Corrente
 * </ul>
 * @memberOf Global
 * @param {String} nome Nome da propriedade do processo 
 * @returns {String} valor da propriedade <code>nome</code>
 * @since   Fluig 1.0
 * @see    http://www.fluig.com     
*/
getValue = function(nome){return "";};

/**
 * Disponibiliza diversas funções para manipulação do fichário.
 * <b><u>Usar em eventos do Fichário(que recebem form como parâmetro)</u></b>.
 * @super Object
 * @memberOf Form
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
Form.prototype=new Object();

/**
 * Habilita/Desabilita a edição de um campo do formulário. 
 * <b><u>Usar em eventos do Fichário(que recebem form como parâmetro)</u></b>.
 *<pre>
 *Exemplo:
 *  form.setEnabled("campo1", false);
 *</pre>
 * @memberOf Form
 * @param {String} nomeCampo nome do Campo do fichário
 * @param {Boolean} habilita flag informando se o campo será habilitado ou não
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
Form.setEnabled = function(nomeCampo, habilita){};

/**
 * Verifica se um campo do formulário esta Habilitado/Desabilitado. 
 * <b><u>Usar em eventos do Fichário(que recebem form como parâmetro)</u></b>.
 *<pre>
 *Exemplo:
 *  var habilitado = form.getEnabled("campo1");
 *</pre>
 * @memberOf Form
 * @param {String} nomeCampo nome do Campo do fichário
 * @returns {Boolean}  flag indicando se o campo esta habilitado.
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
Form.getEnabled = function(nomeCampo){ return false;};


/**
 * Atribui  valor a um campo do formulário. 
 * <b><u>Usar em eventos do Fichário(que recebem form como parâmetro)</u></b>.
 *<pre>
 *Exemplo:
 *  form.setValue("campo1", "valor1");
 *</pre>
 * @memberOf Form
 * @param {String} nomeCampo nome do Campo do fichário
 * @param {String} valor novo valor do campo
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
Form.setValue = function(nomeCampo, valor){};

/**
 * Retorna o  valor de um campo do formulário. 
 * <b><u>Usar em eventos do Fichário(que recebem form como parâmetro)</u></b>.
 *<pre>
 *Exemplo:
 *  var valor = form.getValue("campo1");
 *</pre>
 * @memberOf Form
 * @param {String} nomeCampo nome do Campo do fichário
 * @returns {String} valor retorna o valor atual do campo
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
Form.getValue = function(nomeCampo, valor){};

/**
 * Indica se o campo desabilitado é exibido como input (readonly) ou como label. 
 * <b><u>Usar em eventos do fichário(que recebem form como parâmetro)</u></b>.
 *<pre>
 *Exemplo:
 *  form.setShowDisabledFields(true);
 *</pre>
 * @memberOf Form
 * @param {Boolean} condicao true para a ficha ser visualizada em formato HTML com os campos desabilitados (padrão false)
 * @since   Fluig 1.3
 * @see    http://www.fluig.com    
 */
Form.setShowDisabledFields = function(condicao){};

/**
 * Indica se o link "imprimir" é exibido. 
 * <b><u>Usar em eventos do fichário(que recebem form como parâmetro)</u></b>.
 *<pre>
 *Exemplo:
 *  setHidePrintLink(true);
 *</pre>
 * @memberOf Form
 * @param {Boolean} condicao true para esconder o link "imprimir" e false para o link ser exibido (padrão false).
 * @since   Fluig 1.3
 * @see    http://www.fluig.com    
 */
Form.setHidePrintLink = function(condicao){};

/**
 * Indica se o botão "excluir" é exibido. 
 * <b><u>Usar em eventos do Fichário(que recebem form como parâmetro)</u></b>.
 *<pre>
 *Exemplo:
 *  setHideDeleteButton(true);
 *</pre>
 * @memberOf Form
 * @param {Boolean} condicao true para esconder o botão "excluir" e false para o link ser exibido (padrão false).
 * @see    http://www.fluig.com    
 */
Form.setHideDeleteButton = function(condicao){};



var form = new Form();

/**
 * Possibilita incluir conteúdo no html.
 * <b><u>Usar no evento displayFields do fichário</u></b>.
 * @super Object
 * @memberOf customHTML
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
customHTML.prototype=new Object();

/**
 * Adiciona conteúdo no final do HTML do fichário. 
 * <b><u>Usar no evento displayFields do fichário</u></b>.
 *<pre>
 *Exemplo:
 *  customHTML.append("&lt;script&gt;var teste = '1';&lt;/script&gt;");
 *  customHTML.append("&lt;script&gt;var usuario ='").append( getValue("WKUser") ).append("'&lt;/script&gt;");
 *</pre>
 * @memberOf customHTML
 * @param {String} conteudo String com o conteúdo a ser incluido no HTML
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
customHTML.append = function(conteudo){};