package br.itb.projeto.pizzaria3e.rest.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.itb.projeto.pizzaria3e.model.entity.Produto;
import br.itb.projeto.pizzaria3e.model.entity.Promocao;
import br.itb.projeto.pizzaria3e.rest.exception.ResourceNotFoundException;
import br.itb.projeto.pizzaria3e.service.PromocaoService;

@RestController
@RequestMapping("/promocao")
public class PromocaoController {

	private PromocaoService promocaoService;
	//Source -> Generate Constructor using Fields...
	
	public PromocaoController(PromocaoService promocaoService) {
		super();
		this.promocaoService = promocaoService;
	}
	
	@GetMapping("/test")
	public String getTest() {
		return "Olá, Promocao!";
	}
	
	@GetMapping("/findById/{id}")
	public ResponseEntity<Promocao> findById(@PathVariable long id){
		
		Promocao promocao = promocaoService.findById(id);
		
		if(promocao != null) {
			return new ResponseEntity<Promocao>(promocao, HttpStatus.OK);
		} else {
			throw new ResourceNotFoundException("Promoção não encontrado!");
		}
	}
	
}
