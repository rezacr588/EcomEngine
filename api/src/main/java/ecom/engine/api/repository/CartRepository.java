package ecom.engine.api.repository;

import ecom.engine.api.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    // Find a cart by the user's ID
    // Assuming there's a 'user' field in the Cart entity with a unique identifier
    Optional<Cart> findByUserId(Long userId);

    // Add any additional custom query methods you may need
}
