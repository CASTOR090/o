package br.itb.projeto.pizzaria3e.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.itb.projeto.pizzaria3e.model.entity.Produto;
import br.itb.projeto.pizzaria3e.model.entity.Promocao;
import br.itb.projeto.pizzaria3e.model.repository.UsuarioRepository;
import br.itb.projeto.pizzaria3e.model.repository.PromocaoRepository;

@Service
public class PromocaoService {
	
	private PromocaoRepository promocaoRepository;
	private UsuarioRepository usuarioRepository;
		
	public PromocaoService(PromocaoRepository promocaoRepository, UsuarioRepository usuarioRepository) {
		super();
		this.promocaoRepository = promocaoRepository;
		this.usuarioRepository = usuarioRepository;
	}

	public Promocao findById(long id) {
		Optional<Promocao> promocao = promocaoRepository.findById(id);

		if (promocao.isPresent()) {
			return promocao.get();
		}
		return null;
	}
	
	public List<Promocao> findAll(){
		List<Promocao> promocoes = promocaoRepository.findAll();
		return promocoes;
	}
}
