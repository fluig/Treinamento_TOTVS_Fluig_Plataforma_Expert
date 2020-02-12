/**
 * Disponibiliza diversas funções para consulta de informações da entidade Aprovador.
 * @super Object
 * @memberOf approverDto
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
approverDto.prototype=new Object();

/**
 * Retorna o número do aprovador
 *<pre>
 * @memberOf approverDto

 * @returns Integer 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
approverDto.getapproverId = function(){return "";};
/**
 * Retorna a versão do aprovador
 *<pre>
 * @memberOf approverDto
 * @returns Integer 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
approverDto.getVersion = function(){return "";};

/**
 * Retorna o código da empresa em que o aprovador foi publicado. 
 
 *<pre>
 * @memberOf approverDto
 * @returns Integer Retorna o código da empresa em que o aprovador foi publicado. 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
approverDto.getCompanyId = function(){return "";};

/**
 * Retorna a matricula do colaborador que criou o aprovador
 *<pre>
 * @memberOf approverDto
 * @returns String Retorna a matricula do colaborador que criou o aprovador
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
approverDto.getColleagueId = function(){return "";};

/**
 * Retorna o tipo da aprovação, onde: <br>
 *  0 - Colaborador <br>
 *  1 - Grupo <br>
 *<pre>
 * @memberOf approverDto
 * @returns Integer 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
approverDto.getApproverType = function(){return "";};

/**
 * Retorna o nível de aprovação, no caso de aprovação em níveis. 
 *<pre>
 * @memberOf approverDto
 * @returns Integer 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
approverDto.getLevelId = function(){return "";};


