package ecom.engine.api.service;

import ecom.engine.api.model.Product;
import ecom.engine.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Method to add a new product
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    // Method to retrieve all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Method to find a product by ID
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    // Method to update an existing product
    public Product updateProduct(Product product) {
        // Ensure the product exists before updating
        return productRepository.save(product);
    }

    // Method to delete a product
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    // Method to get featured products
    public List<Product> getFeaturedProducts() {
        return productRepository.findByFeaturedIsTrue();
    }
}
