package edu.cebu.southbus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.cebu.southbus.dto.response.AdvertiseResponse;
import edu.cebu.southbus.service.AdvertiseService;

@RestController
@RequestMapping("/advertises")
public class AdvertiseController {
	@Autowired
	private AdvertiseService touristService;

	@GetMapping
	public List<AdvertiseResponse> getAllTourists() {
		return touristService.getAllTourists();
	}
}
