package edu.cebu.southbus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.cebu.southbus.repository.RouteRepository;
import edu.cebu.southbus.dto.RouteDTO;
import edu.cebu.southbus.mapper.RouteMapper;

@Service
public class RouteService {

	@Autowired
	private RouteRepository routeRepository;

	public List<RouteDTO> getAllRoutes() {
		return routeRepository.findAll().stream()
				.map(RouteMapper::toDTO)
				.toList();
	}
}
