package edu.cebu.southbus.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.AccessLevel;

@Entity
@Table(name = "tblroute")
@Getter
@Setter
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Integer id;

    @Column(nullable = false)
    @NotNull
    private String destination;

    @Column(nullable = false)
    @NotNull
    private Integer distance;

    @Column(name = "min_duration", nullable = false)
    @NotNull
    private Integer minDuration;

    @Column(name = "max_duration", nullable = false)
    @NotNull
    private Integer maxDuration;

    @Column(nullable = false)
    @NotNull
    private Integer schedule; // every <int> minutes

    @Column(name = "min_fare", nullable = false)
    @NotNull
    private Integer minFare;

    @Column(name = "max_fare", nullable = false)
    @NotNull
    private Integer maxFare;

    @OneToMany(mappedBy = "route")
    @JsonIgnore
    private List<BusSchedule> buses;
}