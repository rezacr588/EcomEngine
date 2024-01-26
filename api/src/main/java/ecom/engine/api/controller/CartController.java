package ecom.engine.api.controller;

import ecom.engine.api.model.Cart;
import ecom.engine.api.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    // Add an item to the cart
    @PostMapping("/{userId}/add/{productId}")
    public ResponseEntity<Cart> addItemToCart(@PathVariable Long userId, @PathVariable Long productId,
            @RequestParam int quantity) {
        Cart updatedCart = cartService.addItemToCart(userId, productId, quantity);
        return ResponseEntity.ok(updatedCart);
    }

    // Get the cart for a user
    @GetMapping("/{userId}")
    public ResponseEntity<Cart> getCart(@PathVariable Long userId) {
        return cartService.getCartByUserId(userId)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{userId}/update/{itemId}")
    public ResponseEntity<Cart> updateCartItem(@PathVariable Long userId, @PathVariable Long itemId,
            @RequestParam int quantity) {
        try {
            Cart updatedCart = cartService.updateCartItem(userId, itemId, quantity);
            return ResponseEntity.ok(updatedCart);
        } catch (Exception e) {
            // Handle cases such as item not found or invalid quantity
            return ResponseEntity.badRequest().body(null);
        }
    }

    @DeleteMapping("/{userId}/remove/{itemId}")
    public ResponseEntity<Cart> removeCartItem(@PathVariable Long userId, @PathVariable Long itemId) {
        try {
            Cart updatedCart = cartService.removeCartItem(userId, itemId);
            return ResponseEntity.ok(updatedCart);
        } catch (Exception e) {
            // Handle cases such as item not found
            return ResponseEntity.badRequest().body(null);
        }
    }

    @DeleteMapping("/{userId}/clear")
    public ResponseEntity<Void> clearCart(@PathVariable Long userId) {
        try {
            cartService.clearCart(userId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            // Handle cases such as cart not found
            return ResponseEntity.badRequest().build();
        }
    }

}
