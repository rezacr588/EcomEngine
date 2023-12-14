package ecom.engine.api.exception;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String message) {
        super(message);
    }

    // You can also add other constructors if needed
    // For example, to include the cause of the exception
    public UserNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
