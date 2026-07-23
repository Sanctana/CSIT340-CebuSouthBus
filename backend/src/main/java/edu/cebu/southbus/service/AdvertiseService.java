package edu.cebu.southbus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.cebu.southbus.dto.response.AdvertiseResponse;
import edu.cebu.southbus.mapper.AdvertiseMapper;
import edu.cebu.southbus.repository.AdvertiseRepository;

@Service
public class AdvertiseService {
	@Autowired
	private AdvertiseRepository touristRepository;

	public List<AdvertiseResponse> getAllTourists() {
		return touristRepository.findAll().stream()
				.map(AdvertiseMapper::toResponse)
				.toList();
	}
}
