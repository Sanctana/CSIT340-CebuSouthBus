package edu.cebu.southbus.entity;


import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tblpassenger")
public class Passenger {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JoinColumn(name = "ticket_uid", nullable = false)
    @NotNull
    @Size(max = 6)
    @ManyToOne(fetch = FetchType.LAZY)
    private Ticket ticketUid;

    @Column(name = "first_name", nullable = false)
    @NotNull
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name", nullable = false)
    @NotNull
    private String lastName;

    @Column(name = "suffix", nullable = true)
    private String suffix;

    @Column(name = "date_of_birth", nullable = false)
    @NotNull
    private LocalDate dateOfBirth;

    @Column(name = "is_female", nullable = false)
    @NotNull
    private Boolean isFemale;

    @Column(name = "phone_number", nullable = false, length = 20)
    @NotNull
    @Size(max = 20)
    private String phoneNumber;

    @Column(nullable = false, length = 50)
    @NotNull
    @Size(max = 50)
    private String email;

}