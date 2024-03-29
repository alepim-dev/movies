package com.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dsmovie.DTO.MovieDTO;
import com.dsmovie.DTO.ScoreDTO;
import com.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

	@Autowired
	private ScoreService scoreService;
	
	@PutMapping
	public MovieDTO saveScore( @RequestBody ScoreDTO dto) {
		MovieDTO movieDTO = scoreService.SaveScore(dto);
		return movieDTO;
	}
}
