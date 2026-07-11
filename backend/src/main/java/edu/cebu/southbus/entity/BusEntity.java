package edu.cebu.southbus.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "tblbus")
public class BusEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bus_id", nullable = false)
	private Integer id;

	@Column(nullable = false)
	@NotNull
	private Integer capacity;

	@Column(name = "is_aircon", nullable = false)
	@NotNull
	private Boolean isAircon;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "route_id", nullable = false)
	private RouteEntity route;

	@Column(name = "bus_operator", nullable = false)
	@NotNull
	private String busOperator;

}