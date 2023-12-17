package ecom.engine.api.service;

import ecom.engine.api.model.Cart;
import ecom.engine.api.model.CartItem;
import ecom.engine.api.model.Product;
import ecom.engine.api.repository.CartRepository;
import ecom.engine.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;

    @Autowired
    public CartService(CartRepository cartRepository, ProductRepository productRepository) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
    }

    // Method to add an item to a cart
    public Cart addItemToCart(Long userId, Long productId, int quantity) {
        // Find or create a cart for the user
        Cart cart = cartRepository.findByUserId(userId).orElse(new Cart(/* user */));
        
        // Find the product to be added
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Create and add a new CartItem
        CartItem cartItem = new CartItem(cart, product, quantity);
        cart.getItems().add(cartItem);

        // Save the updated cart
        return cartRepository.save(cart);
    }

    // Method to get a user's cart
    public Optional<Cart> getCartByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    // Additional methods for updating and deleting cart items

    // Business logic as required...

}
