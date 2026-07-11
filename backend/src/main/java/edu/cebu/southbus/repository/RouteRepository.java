package edu.cebu.southbus.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import edu.cebu.southbus.entity.RouteEntity;

@Repository
public interface RouteRepository extends JpaRepository<RouteEntity, Integer> {
}
