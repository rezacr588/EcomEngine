package ecom.engine.api.service;

import ecom.engine.api.model.Cart;
import ecom.engine.api.model.CartItem;
import ecom.engine.api.model.Product;
import ecom.engine.api.repository.CartRepository;
import ecom.engine.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public Cart addItemToCart(Long userId, Long productId, int quantity) {
        // Find or create a cart for the user
        Cart cart = cartRepository.findByUserId(userId)
                .orElseGet(() -> new Cart(/* user */)); // Ensure a Cart is always obtained

        // Initialize the items list if it's null - important for new carts
        if (cart.getItems() == null) {
            cart.setItems(new ArrayList<>());
        }

        // Find the product to be added
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Create and add a new CartItem
        CartItem cartItem = new CartItem();
        cartItem.setCart(cart);
        cartItem.setProduct(product);
        cartItem.setQuantity(quantity);

        cart.getItems().add(cartItem);

        // Save the updated cart
        return cartRepository.save(cart);
    }

    // Method to get a user's cart
    public Optional<Cart> getCartByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    public Cart updateCartItem(Long userId, Long itemId, int quantity) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        CartItem cartItem = cart.getItems().stream()
                .filter(item -> item.getId().equals(itemId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Cart item not found"));

        if (quantity > 0) {
            cartItem.setQuantity(quantity);
        } else {
            cart.getItems().remove(cartItem);
        }

        return cartRepository.save(cart);
    }

    public Cart removeCartItem(Long userId, Long itemId) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        cart.getItems().removeIf(item -> item.getId().equals(itemId));

        return cartRepository.save(cart);
    }

    public void clearCart(Long userId) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        cart.getItems().clear();

        cartRepository.save(cart);
    }

    // Business logic as required...

}
