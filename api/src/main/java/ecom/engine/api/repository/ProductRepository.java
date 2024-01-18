package ecom.engine.api.repository;

import ecom.engine.api.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Find products by category
    List<Product> findByCategory(String category);

    // Find a product by name (assuming names are unique)
    Optional<Product> findByName(String name);

    // Find featured products
    List<Product> findByFeaturedIsTrue();

    // Find top 5 products by ID in descending order
    List<Product> findTop5ByOrderByIdDesc();

    // You can add more queries as per your requirements, such as:
    // List<Product> findByPriceBetween(Double minPrice, Double maxPrice);
    // List<Product> findByDescriptionContaining(String keyword);

}
