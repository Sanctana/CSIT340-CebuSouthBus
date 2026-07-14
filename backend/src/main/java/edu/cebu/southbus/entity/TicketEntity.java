package edu.cebu.southbus.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "tblticket")
public class TicketEntity {

    @Column(nullable = false, length = 6)
    @NotNull
    @Size(max = 6)
    @Id
    private String uid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bus_id", nullable = false)
    private BusEntity bus;

}