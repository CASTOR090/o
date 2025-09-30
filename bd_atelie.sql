xUSE master IF EXISTS(select * from sys.databases where name='bd_atelie') 
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
   telefone      VARCHAR(100)	NOT NULL,
   nivelAcesso   VARCHAR(10)    NULL, -- ADMIN ou USER
   dataCadastro	 SMALLDATETIME	NOT NULL,
   statusUsuario VARCHAR(20)    NOT NULL, -- ATIVO ou INATIVO ou TROCAR_SENHA

   PRIMARY KEY (id)
)
GO
INSERT Usuario (nome, email, senha, telefone, nivelAcesso, dataCadastro, statusUsuario)
VALUES ('Fulano da Silva', 'fulano@email.com.br', 'MTIzNDU2Nzg=', '987654321','ADMIN', GETDATE(), 'ATIVO') 
INSERT Usuario (nome, email, senha, telefone, nivelAcesso, dataCadastro, statusUsuario)
VALUES ('Beltrana de Sá', 'beltrana@email.com.br', 'MTIzNDU2Nzg=', '987654321','USER', GETDATE(), 'ATIVO')
INSERT Usuario (nome, email, senha, telefone, nivelAcesso, dataCadastro, statusUsuario)
VALUES ('Sicrana de Oliveira', 'sicrana@email.com.br', 'MTIzNDU2Nzg=', '987654321','USER', GETDATE(), 'ATIVO')
INSERT Usuario (nome, email, senha, telefone, nivelAcesso, dataCadastro, statusUsuario)
VALUES ('Ordnael Zurc', 'ordnael@email.com.br', 'MTIzNDU2Nzg=', '987654321', 'USER', GETDATE(), 'ATIVO')
GO

CREATE TABLE Categoria
(
	id	 INT		  IDENTITY,
	nome VARCHAR(100) NOT NULL,  -- QUEIJO, FRANGO, CARNES & FRIOS, LEGUMES, DOCES, ESPECIAS, PEIXE

	PRIMARY KEY(id)
)
GO
INSERT Categoria (nome) VALUES ('VESTIDO')
INSERT Categoria (nome) VALUES ('SAIA')
INSERT Categoria (nome) VALUES ('CAMISA')
INSERT Categoria (nome) VALUES ('CALÇA')
INSERT Categoria (nome) VALUES ('BLUSA E JAQUETA')
INSERT Categoria (nome) VALUES ('CONJUNTO')
INSERT Categoria (nome) VALUES ('ARREMATE')
INSERT Categoria (nome) VALUES ('PERSONALIZAR')
INSERT Categoria (nome) VALUES ('AJUSTE')
GO

CREATE TABLE Produto
(
	id			 INT		    IDENTITY,
	nome	     VARCHAR(100)	NOT NULL,
	tipo		 VARCHAR(20)	NOT NULL, -- ROUPA ou SERVIÇO
	descricao	 VARCHAR(400)	NOT NULL,
	codigoBarras VARCHAR(100)	NULL,
	foto		 VARBINARY(max) NULL,
	preco		 DECIMAL(8,2)	NOT NULL,
	categoria_id INT			NOT NULL,
	statusProduto	 VARCHAR(10)	NOT NULL, -- ATIVO, CARDAPIO ou INATIVO

	PRIMARY KEY (id),
	FOREIGN KEY (categoria_id) REFERENCES Categoria (id)
)
GO
INSERT Produto (nome, tipo, descricao, codigoBarras, foto, preco, categoria_id, statusProduto) 
VALUES ('Muçarela', 'ROUPA', 'Base de molho de tomate com cobertura de muçarela, orégano e tomate', NULL, NULL, 29.98, 2, 'ATIVO')


CREATE TABLE Servico
(
	id			 INT		    IDENTITY,
	nome	     VARCHAR(100)	NOT NULL,
	descricao	 VARCHAR(400)	NOT NULL,
	dataEntrega  SmallDateTime  NULL,
	dataEntrada  SmallDateTime NOT NULL,
	preco		 DECIMAL(8,2)	NOT NULL,
	produto_id	 INT			NOT NULL,
	usuario_id	 INT			NOT NULL,
	statusServico	 VARCHAR(10)	NOT NULL, -- ATIVO ou INATIVO

	PRIMARY KEY (id),
	FOREIGN KEY (produto_id) REFERENCES Produto (id),
	FOREIGN KEY (Usuario_id) REFERENCES Usuario (id)
)


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


CREATE TABLE Promocao
(
	id	            INT			   IDENTITY,
	nome			VARCHAR(50)    NOT NULL,
	descricao			VARCHAR(100)   NOT NULL,
	dataCadastro DateTime NOT NULL,
	foto			VARBINARY(MAX)     NULL,
	preco  DECIMAl (8,2) NOT NULL,
	desconto DECIMAL (8,2) NOT NULL,
	statusPromocao	VARCHAR(10)	   NOT NULL, -- ATIVO ou INATIVO
)
GO
INSERT Promocao (id, nome, descricao,foto, preco, desconto, statusPromocao) 
VALUES ('', '', '', '', '', '', '', '')


SELECT * FROM Usuario
SELECT * FROM Mensagem
SELECT * FROM Categoria
SELECT * FROM Produto
SELECT * FROM Promocao


/* VERIFICAR CONEXÕES EXISTENTES */
/*
SELECT * FROM sys.dm_exec_sessions
WHERE database_id = DB_ID('bd_pizzaria_3d')
AND host_name IS NOT NULL
AND program_name LIKE 'Microsoft SQL Server Management Studio%'
*/

/* 

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
*/


DELETE FROM Produto where id = 1

drop table promocao
