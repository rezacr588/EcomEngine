package ecom.engine.api.repository;

import ecom.engine.api.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    List<User> findByLastName(String lastName);

    List<User> findByActiveTrue();

    Page<User> findAll(Pageable pageable);

    @Query("SELECT u FROM User u WHERE u.email LIKE %:email%")
    List<User> searchByEmail(String email);

    @Modifying
    @Transactional
    @Query("UPDATE User u SET u.active = :active WHERE u.id = :id")
    void setActiveForUser(boolean active, Long id);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    long countByActiveTrue();

    Optional<User> findByResetToken(String resetToken);

}
