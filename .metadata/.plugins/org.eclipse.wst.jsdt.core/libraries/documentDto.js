/**
 * Disponibiliza diversas funções para consulta de informações da entidade documento.

 * @super Object
 * @memberOf documentDto
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.prototype=new Object();

/**
 * Retorna o número do documento

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna o número do documento
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getDocumentId = function(){return "";};
/**
 * Retorna a versão do documento

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna a versão do documento
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getVersion = function(){return "";};

/**
 * Retorna o código da empresa em que o 
documento foi publicado. 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna o código da empresa em que o documento foi publicado. 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getCompanyId = function(){return "";};

/**
 * Retorna o UUID (identificador Único Global) do documento. 

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna o UUID (identificador Único Global) do documento. 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getUUID()  = function(){return "";};

/**
 * Retorna o tipo do arquivo físico, se retornar branco ou nulo é porque esse tipo não é 
	conhecido pelo Fluig.

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna o tipo do arquivo físico, se retornar branco ou nulo é porque esse tipo não é conhecido pelo Fluig. 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getDocumentTypeId = function(){return "";};

/**
 *Retorna o código do Idioma do documento.

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna o código do Idioma do documento.
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getLanguageId = function(){return "";};

/**
 * Retorna o código do Ícone do documento

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna o código do Ícone do documento
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getIconId = function(){return "";};

/**
 *Retorna o código do assunto do documento. 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna o código do assunto do documento.  
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getTopicId = function(){return "";};

/**
 * Retorna a matricula do colaborador que criou o documento

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna a matricula do colaborador que criou o documento
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getColleagueId = function(){return "";};

/**
 * Retorna a descrição do documento.

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna a descrição do documento.
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getDocumentDescription = function(){return "";};

/**
 * Retorna os comentários adicionais do documento. 

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna os comentários adicionais do documento.
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getAdditionalComments = function(){return "";};

/**
 * Retorna o caminho físico onde o documento está armazenado.

 *<pre>
 * @memberOf documentDto

 * @returns String Retorna o código da empresa em que o documento foi publicado.  
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getPhisicalFile = function(){return "";};

/**
 * Retorna a data de criação.  

 *<pre>
 * @memberOf documentDto

 * @returns Date Retorna a data de criação. 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getCreateDate = function(){return "";};

/**
 * Retorna a data de Aprovação.   

 *<pre>
 * @memberOf documentDto

 * @returns Date Retorna a data de Aprovação. 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getApprovedDate = function(){return "";};

/**
 * Retorna a Data da última modificação.   

 *<pre>
 * @memberOf documentDto

 * @returns Date Retorna a Data da última modificação. 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getLastModifiedDate = function(){return "";};



/**
 * Retorna o tipo do documento, onde: <br> 
	0 - Pasta raiz <br>
	1 - Pasta <br>
	2 - Documento normal <br> 
	3 - Documento externo <br>
	4 - Fichário <br>
	5 - Ficha <br>
	7 - Anexo Workflow <br> 
	8 - Novo Conteúdo <br>
	9 - A plicativo <br>
	10 - Relatório <br>
	15 - Pasta Social <br>
	portal -Site <br>
	portalPage - Página de Site <br> <br> 
*<pre>
 * @memberOf documentDto
 * @returns String Tipo do Documento
 *  
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getDocumentType = function(){return "";};

/**
 * Retorna a data de expiração.    

 *<pre>
 * @memberOf documentDto

 * @returns Date Data de expiração.  
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getExpirationDate = function(){return "";};



/**
 * Retorna o número da Pasta/Fichário pai 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Número da Pasta/Fichário pai 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getParentDocumentId = function(){return "";};

/**
 * String com o nome do arquivo físico principal e anexos.  

 *<pre>
 * @memberOf documentDto

 * @returns String String com o nome do arquivo físico principal e anexos.  
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getRelatedFiles = function(){return "";};

/**
 * Verifica se o documento está ativo  

 *<pre>
 * @memberOf documentDto

 * @returns Boolean Retorna se a versão é ativa.  
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getActiveVersion = function(){return "";};

/**
* Retorna a descrição da versão. 
* <b><u>Usar em eventos do Fluig</u></b>.
*<pre>
* @memberOf documentDto

* @returns String Retorna a descrição da versão.
* @since   Fluig 1.0
* @see    http://www.fluig.com    
*/
documentDto.getVersionDescription = function(){return "";};

/**
 * Retorna se o documento permite Download 

 *<pre>
 * @memberOf documentDto

 * @returns Boolean Retorna se o documento permite Download
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getDownloadEnabled = function(){return "";};

/**
 * Retorna se o documento está em aprovação. 

 *<pre>
 * @memberOf documentDto

 * @returns Boolean Retorna se o documento está em aprovação.
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getApproved = function(){return "";};


/**
 * Retorna a partir de que data em que o documento poderá ser visualizado 

 *<pre>
 * @memberOf documentDto

 * @returns Date Retorna a partir de que data em que o documento poderá ser visualizado.
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getValidationStartDate = function(){return "";};

/**
 * Retorna a matricula do colaborador que publicou o documento.

 *<pre>
 * @memberOf documentDto

 * @returns String A matricula do colaborador que publicou o documento. 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getPublisherId = function(){return "";};

/**
 * Retorna a descrição da ficha, para 
documento do tipo 5. 

 *<pre>
 * @memberOf documentDto

 * @returns String Descrição da ficha, para documento do tipo 5.
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getCardDescription  = function(){return "";};

/**
 * Retorna o fichário que foi usado como base 
	para criação da ficha, por isso só tem um 
	valor quando o documento é do tipo 5 
	(ficha). 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Numero do Fichário
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getDocumentPropertyNumber = function(){return "";};

/**
 * Retorna a versão do fichário em que a ficha foi criada. 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Versão do fichário em que a ficha foi criada. 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getDocumentPropertyVersion = function(){return "";};

/**
 * Retorna o código da empresa em que o 
documento foi publicado. 

 *<pre>
 * @memberOf documentDto

 * @returns Integer Retorna o código da empresa em que o documento foi publicado. 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getCompanyId = function(){return "";};

/**
 * Retorna se o documento/pasta está abaixo 
	da pasta particular.

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getPrivateDocument = function(){return "";};

/**
 * Se é um documento particular retorna a matricula do colaborador onde este documento está alocado. 

 *<pre>
 * @memberOf documentDto

 * @returns String
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getPrivateColleagueId = function(){return "";};

/**
 * Retorna se o documento já foi indexado. 

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getIndexed = function(){return "";};

/**
 * Retorna a prioridade do documento.  

 *<pre>
 * @memberOf documentDto

 * @returns Integer 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getPriority = function(){return "";};

/**
 * Retorna se notifica os usuários que tenham esse assunto de interesse.

 *<pre>
 * @memberOf documentDto

 * @returns Boolean
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getUserNotify = function(){return "";};

/**
 * Retorna se o documento está expirado. 

 *<pre>
 * @memberOf documentDto

 * @returns Boolean
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getExpires = function(){return "";};

/**
 * Retorna o volume onde o documento foi 
publicado, se estiver em branco ele utiliza o 
volume do pai. 

 *<pre>
 * @memberOf documentDto

 * @returns String Código do Volume 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getVolumeId = function(){return "";};

/**
 * Retorna se herda segurança do pai  

 *<pre>
 * @memberOf documentDto

 * @returns Boolean
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getInheritSecurity = function(){return "";};

/**
 * Retorna se atualiza as propriedades da cópia controlada.  

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getUpdateIsoProperties = function(){return "";};

/**
 * Retorna a hora da última modificação em milissegundos

 *<pre>
 * @memberOf documentDto

 * @returns String 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getLastModifiedTime = function(){return "";};

/**
 * Retorna se o documento está na lixeira.  

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getDeleted = function(){return "";};

/**
 * Retorna o documento do dataset , se o documento é um fichário. 

 *<pre>
 * @memberOf documentDto

 * @returns String 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getDatasetName = function(){return "";};


/**
 * Retorna as palavras chaves do documento. 
Cada palavra é separada por vírgula.

 *<pre>
 * @memberOf documentDto

 * @returns String 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getKeyWord = function(){return "";};

/**
 * Retorna se a versão/revisão inalterável.   

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getImutable = function(){return "";};

/**
 * Retorna se o documento está em edição, para documento do tipo "Novo Conteúdo" <br>.

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getDraft = function(){return "";};

/**
 * Retorna se utiliza visualizador interno

 *<pre>
 * @memberOf documentDto

 * @returns Boolean 
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getInternalVisualizer = function(){return "";};

/**
 * Retorna o tamanho físico do documento principal e anexos.  

 *<pre>
 * @memberOf documentDto

 * @returns Float
 * @since   Fluig 1.0
 * @see    http://www.fluig.com    
 */
documentDto.getPhisicalFileSize = function(){return "";};



