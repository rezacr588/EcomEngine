package ecom.engine.api.dto;

import java.util.List;

public class CartDto {

    private Long cartId;
    private Long userId;
    private List<CartItemDto> items; // Assuming you have a CartItemDto
    private double total; // Total price of items in the cart

    // Constructors
    public CartDto() {
        // Default constructor
    }

    public CartDto(Long cartId, Long userId, List<CartItemDto> items, double total) {
        this.cartId = cartId;
        this.userId = userId;
        this.items = items;
        this.total = total;
    }

    // Standard getters and setters

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<CartItemDto> getItems() {
        return items;
    }

    public void setItems(List<CartItemDto> items) {
        this.items = items;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    // Additional methods as needed...
}
