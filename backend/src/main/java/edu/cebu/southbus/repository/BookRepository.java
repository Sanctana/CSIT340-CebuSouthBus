package edu.cebu.southbus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.cebu.southbus.entity.Ticket;

@Repository
public interface BookRepository extends JpaRepository<Ticket, String> {
}
