package edu.cebu.southbus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.cebu.southbus.dto.RouteDTO;
import edu.cebu.southbus.service.RouteService;

@RestController
@RequestMapping("/route")
public class RouteController {
	@Autowired
	private RouteService routeService;

	@GetMapping
	public List<RouteDTO> getAllRoute() {
		return routeService.getAllRoutes();
	}
}
