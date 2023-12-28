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
    public ResponseEntity<Cart> addItemToCart(@PathVariable Long userId, @PathVariable Long productId, @RequestParam int quantity) {
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
}
