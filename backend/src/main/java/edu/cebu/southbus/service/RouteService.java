package edu.cebu.southbus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.cebu.southbus.repository.RouteRepository;
import edu.cebu.southbus.dto.RouteDTO;

@Service
public class RouteService {

	@Autowired
	private RouteRepository routeRepository;

	public List<RouteDTO> getAllRoutes() {
		return routeRepository.findAllRoutes();
	}
}
