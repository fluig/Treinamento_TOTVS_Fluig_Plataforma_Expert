// Dataset Offline
// Responsavel por definir a estrutura das colunas que serão criadas para armazenar os registros
function defineStructure() {
    // Exemplo:
    
    // Código do centro de custo -> Definir que será NUMBER
    // Descrição do centro de custo -> Definir que será STRING
    
    // Código do centro de custo -> Será CHAVE PRIMÁRIA (PK)
    // Código do centro de custo -> Será INDEX
}

// Dataset Offline
// Responsável por atualizar/criar/deletar os registros da tabela
function onSync(lastSyncDate) {
    // Exemplo:
    
    // Definir se será sincronização Comum ou Jornalizada
}

// Dataset Avançado
// Criar um dataset para consumir dados de fonte externa 
// Criar um dataset com informações fixas
function createDataset(fields, constraints, sortFields) {
    // Exemplo:
    
    // JDBC/REST/SOAP
    // Datasets Fluig
    // Definir dataset fixo
    
    var dataset = DatasetBuilder.newDataset();
    
    // Criar Colunas
    dataset.addColumn("Sigla");                                             // Primeira Coluna
    dataset.addColumn("Estado");                                            // Segunda Coluna
    dataset.addColumn("Capital");                                           // Terceira Coluna
    dataset.addColumn("Area");                                              // Quarta Coluna
    
    // Criar as linhas
    dataset.addRow(new Array("AM","Amazonas","Manaus","123123"));           // Primeira Linha
    dataset.addRow(new Array("PA","Pará","Belém","5432343"));               // Segunda Linha
    dataset.addRow(new Array("MT", "Mato Grosso", "Cuiabá", "13456553"));   // Terceira Linha
    dataset.addRow(new Array("TO","Tocantins","Palmas","633552"));          // Quarta Linha
    dataset.addRow(new Array("PI","Piauí","Teresina","42332"));             // Quinta Linha
    
    return dataset;
}

// Dataset Offline
// Definir como será para o armazenamento do celular
function onMobileSync(user) {
    
}