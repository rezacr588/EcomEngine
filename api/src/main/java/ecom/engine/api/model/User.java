package ecom.engine.api.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Date;

@Entity
@Table(name = "users") // Customize the table name as necessary
public class User {

    // Example Gender Enum
    public enum Gender {
        MALE, FEMALE, OTHER, PREFER_NOT_TO_SAY;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    @NotBlank(message = "Username is required")
    @Size(min = 4, max = 255, message = "Username must be between 4 and 255 characters")
    private String username;

    @NotBlank(message = "Password is required")
    // Depending on your password encoding strategy, you might want to adjust the max size
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;

    @Column(unique = true, nullable = false)
    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    private boolean active = true;

    private String firstName;
    private String lastName;

    // New fields
    private String phoneNumber; // Ensure you validate this if you plan to use it for SMS notifications, etc.
    
    @Enumerated(EnumType.STRING)
    private Gender gender; // This can be an enum containing values like MALE, FEMALE, OTHER, etc.

    private Date dateOfBirth; // Use java.util.Date or java.time.LocalDate depending on your JPA version
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt; // Automatically set the date when the account is created
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastModified; // Automatically update this field when any change is made
}

