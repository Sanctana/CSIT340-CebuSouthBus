package edu.cebu.southbus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.cebu.southbus.entity.Advertise;

@Repository
public interface AdvertiseRepository extends JpaRepository<Advertise, Integer> {

}
