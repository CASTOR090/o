USE master IF EXISTS(select * from sys.databases where name='bd_atelie') 
DROP DATABASE bd_atelie
GO 
-- CRIAR UM BANCO DE DADOS
CREATE DATABASE bd_atelie
GO
-- ACESSAR O BANCO DE DADOS
USE bd_atelie
GO

CREATE TABLE Usuario
( 
   id            INT			IDENTITY,
   nome          VARCHAR(100)	NOT NULL,
   email         VARCHAR(100)	UNIQUE NOT NULL,
   senha         VARCHAR(100)	NOT NULL,
   nivelAcesso   VARCHAR(10)    NULL, -- ADMIN ou USER
   foto			 VARBINARY(MAX) NULL,
   dataCadastro	 SMALLDATETIME	NOT NULL,
   statusUsuario VARCHAR(20)    NOT NULL, -- ATIVO ou INATIVO ou TROCAR_SENHA

   PRIMARY KEY (id)
)
GO
INSERT Usuario (nome, email, senha, nivelAcesso, foto, dataCadastro, statusUsuario)
VALUES ('Fulano da Silva', 'fulano@email.com.br', 'MTIzNDU2Nzg=', 'ADMIN', NULL, GETDATE(), 'ATIVO')
INSERT Usuario (nome, email, senha, nivelAcesso, foto, dataCadastro, statusUsuario)
VALUES ('Beltrana de Sá', 'beltrana@email.com.br', 'MTIzNDU2Nzg=', 'USER', NULL, GETDATE(), 'ATIVO')
INSERT Usuario (nome, email, senha, nivelAcesso, foto, dataCadastro, statusUsuario)
VALUES ('Sicrana de Oliveira', 'sicrana@email.com.br', 'MTIzNDU2Nzg=', 'USER', NULL, GETDATE(), 'INATIVO')
INSERT Usuario (nome, email, senha, nivelAcesso, foto, dataCadastro, statusUsuario)
VALUES ('Ordnael Zurc', 'ordnael@email.com.br', 'MTIzNDU2Nzg=', 'USER', NULL, GETDATE(), 'TROCAR_SENHA')
GO

CREATE TABLE Categoria
(
	id	 INT		  IDENTITY,
	nome VARCHAR(100) NOT NULL,  -- QUEIJO, FRANGO, CARNES & FRIOS, LEGUMES, DOCES, ESPECIAS, PEIXE

	PRIMARY KEY(id)
)
GO
INSERT Categoria (nome) VALUES ('CARNES & FRIOS')
INSERT Categoria (nome) VALUES ('DOCES')
INSERT Categoria (nome) VALUES ('ESPECIAS')
INSERT Categoria (nome) VALUES ('FRANGO')
INSERT Categoria (nome) VALUES ('LEGUME')
INSERT Categoria (nome) VALUES ('PEIXE')
INSERT Categoria (nome) VALUES ('QUEIJO')
INSERT Categoria (nome) VALUES ('SUCO')
INSERT Categoria (nome) VALUES ('REFRIGERANTE')
GO

CREATE TABLE Produto
(
	id			 INT		    IDENTITY,
	nome	     VARCHAR(100)	NOT NULL,
	descricao	 VARCHAR(400)	NOT NULL,
	codigoBarras VARCHAR(100)	NULL,
	foto		 VARBINARY(max) NULL,
	preco		 DECIMAL(8,2)	NOT NULL,
	categoria_id INT			NOT NULL,
	statusProduto	 VARCHAR(10)	NOT NULL, -- ATIVO, CARDAPIO ou INATIVO
--	tipoProduto VARCHAR (300) NOT NULL,

	PRIMARY KEY (id),
	FOREIGN KEY (categoria_id) REFERENCES Categoria (id)
)
GO
INSERT Produto (nome, descricao, codigoBarras, foto, preco, categoria_id, statusProduto, TipoProduto) 
VALUES ('Muçarela', 'Base de molho de tomate com cobertura de muçarela, orégano e tomate', '0001', NULL, 29.98, 7, 'ATIVO', 'agulha e linha')
INSERT Produto (nome, descricao, codigoBarras, foto, preco, categoria_id, statusProduto, TipoProduto) 
VALUES ('Calabresa', 'Base de molho de tomate e queijo com cobertura de calabresa', '0002', NULL, 29.98, 1, 'ATIVO', 'agulha e linha')
INSERT Produto (nome, descricao, codigoBarras, foto, preco, categoria_id, statusProduto, TipoProduto) 
VALUES ('Frango com Catupiry', 'Base de molho de tomate com cobertura de frango desfiado com catupiry', '0003', NULL, 37.98, 4, 'ATIVO', 'agulha e linha')
INSERT Produto (nome, descricao, codigoBarras, foto, preco, categoria_id, statusProduto, TipoProduto) 
VALUES ('Marguerita', 'Base de molho de tomate com cobertura de muçarela, manjericão, orégano e tomate', '0004', NULL, 31.98, 7, 'ATIVO', 'agulha e linha')
INSERT Produto (nome, descricao, codigoBarras, foto, preco, categoria_id, statusProduto, TipoProduto) 
VALUES ('Banana com Canela e Leite Condensado', 'Banana picada coberta com Canela em pó em uma base de Leite Condensado', '0005', NULL, 35.99, 2, 'ATIVO', 'agulha e linha')
GO

CREATE TABLE Mensagem
(
	id	            INT			  IDENTITY,
	dataMensagem    SMALLDATETIME NOT NULL,
	emissor			VARCHAR(100)  NOT NULL,
	email 	        VARCHAR(100)  NOT NULL,
	telefone	    VARCHAR(20)       NULL,
	texto 	        VARCHAR(400)  NOT NULL,
	statusMensagem  VARCHAR(10)   NOT NULL, -- ATIVO ou INATIVO

	PRIMARY KEY (id)
)
GO
INSERT Mensagem (dataMensagem, emissor, email, telefone, texto, statusMensagem) 
VALUES (GETDATE(), 'Ordnael Zurc', 'ordnael@email.com', '(11) 98765-4123', 'Mensagem de teste', 'ATIVO')
INSERT Mensagem (dataMensagem, emissor, email, telefone, texto, statusMensagem) 
VALUES (GETDATE(), 'Maria Onete', 'maria@email.com', null, 'Segunda mensagem de teste', 'ATIVO')
GO

CREATE TABLE Avaliacao
(
	id	            INT			   IDENTITY,
    dataCadastro	SMALLDATETIME  NOT NULL,
	usuario_id		INT			   NOT NULL,
	produto_id		INT			   NOT NULL,
	nota			DECIMAL(3,1)   NOT NULL,
	comentario	    VARCHAR(100)       NULL,
	statusAvaliacao	VARCHAR(10)	   NOT NULL, -- ATIVO ou INATIVO

	PRIMARY KEY (id),
	FOREIGN KEY (usuario_id) REFERENCES Usuario (id),
	FOREIGN KEY (produto_id) REFERENCES Produto (id)
)
GO

CREATE TABLE ProdutoNota
(
	id	              INT			 IDENTITY,
    dataAtualizacao	  SMALLDATETIME  NOT NULL,
	produto_id		  INT			 NOT NULL,
	nota			  DECIMAL(3,1)   NOT NULL,
	statusProdutoNota VARCHAR(10)	 NOT NULL, -- ATIVO ou INATIVO

	PRIMARY KEY (id),
	FOREIGN KEY (produto_id) REFERENCES Produto (id)
)
GO

CREATE TABLE Promocao
(
	id	            INT			   IDENTITY,
	nome			VARCHAR(50)    NOT NULL,
	info			VARCHAR(100)   NOT NULL,
	foto			VARBINARY(MAX)     NULL,
    dataCadastro	SMALLDATETIME  NOT NULL,
	usuario_id		INT			   NOT NULL,
	statusPromocao	VARCHAR(10)	   NOT NULL, -- ATIVO ou INATIVO

	PRIMARY KEY (id),
	FOREIGN KEY (usuario_id) REFERENCES Usuario (id)
)
GO
INSERT Promocao (nome, info, foto, dataCadastro, usuario_id, statusPromocao) 
VALUES ('Compre Duas e Leve Uma', 'Compre duas pizzas grandes e receba apenas uma. Nós queremos contribuir com a sua dieta.', NULL, GETDATE(), 1, 'ATIVO')

SELECT * FROM Usuario
SELECT * FROM Mensagem
SELECT * FROM Categoria
SELECT * FROM Produto
SELECT * FROM Promocao
SELECT * FROM Avaliacao
SELECT * FROM ProdutoNota
SELECT * FROM Servico

/* VERIFICAR CONEXÕES EXISTENTES */
/*
SELECT * FROM sys.dm_exec_sessions
WHERE database_id = DB_ID('bd_pizzaria_3d')
AND host_name IS NOT NULL
AND program_name LIKE 'Microsoft SQL Server Management Studio%'
*/

CREATE TABLE Servico
(
	id			 INT		    IDENTITY,
	nome	     VARCHAR(100)	NOT NULL,
	descricao	 VARCHAR(400)	NOT NULL,
	dataEntrega SmallDateTime  NULL,
	dataEntrada  SmallDateTime NOT NULL,
	preco		 DECIMAL(8,2)	NOT NULL,
	produto_id INT			NOT NULL,
	usuario_id INT			NOT NULL,
	statusServico	 VARCHAR(10)	NOT NULL, -- ATIVO, CARDAPIO ou INATIVO
	tipoRoupa varchar(200) NOT NULL,

	PRIMARY KEY (id),
	FOREIGN KEY (produto_id) REFERENCES Produto (id),
	FOREIGN KEY (Usuario_id) REFERENCES Usuario (id)
)


