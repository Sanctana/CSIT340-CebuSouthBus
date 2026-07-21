package edu.cebu.southbus.entity;

import java.util.List;

import edu.cebu.southbus.util.ShortIdGenerator;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Table(name = "tblticket")
@Setter
public class Ticket {

    @Column(nullable = false, length = 6)
    @NotNull
    @Size(max = 6)
    @Id
    @Getter
    private String uid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bus_id", nullable = false)
    @NotNull
    private BusSchedule busSchedule;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "middle_name", nullable = true)
    private String middleName;

    @Column(name = "email_address", nullable = false)
    private String emailAddress;

    @Column(name = "mobile_number", nullable = false)
    private String mobileNumber;

    @Column(name = "payment_method", nullable = false)
    private String paymentMethod;

    @OneToMany(mappedBy = "ticket", fetch = FetchType.LAZY)
    @Getter
    @Accessors(chain = true)
    private List<Passenger> passengers;

    @PrePersist
    private void generateUid() {
        this.uid = ShortIdGenerator.generate(6);
    }
}