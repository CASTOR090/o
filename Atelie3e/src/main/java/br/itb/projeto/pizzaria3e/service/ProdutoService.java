package br.itb.projeto.pizzaria3e.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.itb.projeto.pizzaria3e.model.entity.Mensagem;
import br.itb.projeto.pizzaria3e.model.entity.Produto;
import br.itb.projeto.pizzaria3e.model.repository.CategoriaRepository;
import br.itb.projeto.pizzaria3e.model.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	private ProdutoRepository produtoRepository;
	private CategoriaRepository categoriaRepository;
		
	public ProdutoService(ProdutoRepository produtoRepository, CategoriaRepository categoriaRepository) {
		super();
		this.produtoRepository = produtoRepository;
		this.categoriaRepository = categoriaRepository;
	}

	public Produto findById(long id) {
		Optional<Produto> produto = produtoRepository.findById(id);

		if (produto.isPresent()) {
			return produto.get();
		}
		return null;
	}
	
	public List<Produto> findAll(){
		List<Produto> produtos = produtoRepository.findAll();
		return produtos;
	}
}
