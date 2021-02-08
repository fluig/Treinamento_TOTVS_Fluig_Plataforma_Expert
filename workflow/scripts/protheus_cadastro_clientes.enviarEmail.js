function enviarEmail() {
	 /* Documentação de email personalizado
	 * https://tdn.totvs.com/pages/releaseview.action?pageId=183730587
	 */
	
	try{
	    var empresa = fluigAPI.getSecurityService().getCurrentTenantId();
	    var server = fluigAPI.getPageService().getServerURL();
	 	var usuario = hAPI.getCardValue("txt_solicitante");
	 	var num_solic = getValue("WKNumProces");
	    var template = "TPL_WF_CADASTRO_CLIENTE";    
	    var remetente = "treinamento.aluno";
	    var cod_cliente = hAPI.getCardValue("txt_cod_cliente");
	    var descr_cliente = hAPI.getCardValue("txt_nome_cliente");
	    
	    var assunto  = "Solicitação "+ num_solic + " - Criação do centro de custo - " + cod_cliente + " " + descr_cliente;
	 		
	    var parametros = new java.util.HashMap();   
	    
	 	parametros.put("SERVER_URL", server);
	    parametros.put("NOME_SOLICITANTE", usuario);
	    parametros.put("NUMERO_SOLIC", num_solic);
	    parametros.put("subject", assunto);
	    
	    parametros.put("COD_CLIENTE", cod_cliente);
	    parametros.put("DESCR_CLIENTE", descr_cliente);	    
	    parametros.put("CODIGO_EMPRESA", empresa);

        var docs = hAPI.listAttachments();
        // Se existir Anexo
        if(docs.size() > 0){
            var anexos = new java.util.ArrayList();
        	for (var i = 0; i < docs.size(); i++) {
                var doc = docs.get(i);
                var anexo = new java.util.HashMap();
                anexo.put("link", fluigAPI.getDocumentService().getDownloadURL(doc.getDocumentId()));
                anexo.put("description", doc.getDocumentDescription());
                anexos.add(anexo);
            }
        	
    	    parametros.put("anexos", anexos);    
        }
        
	    var destinatarios = new java.util.ArrayList();
	    destinatarios.add(hAPI.getCardValue("txt_solic_email"));	    
	    
	    notifier.notify(remetente, template, parametros, destinatarios, "text/html");
	}catch(e){
		log.error("Erro ao enviar email: " + e);
	}
}
