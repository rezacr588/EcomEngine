package ecom.engine.api.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.web.filter.GenericFilterBean;

public class JwtRequestFilter extends GenericFilterBean {

  private final JwtUtils jwtUtils;

  public JwtRequestFilter(JwtUtils jwtUtils) {
    this.jwtUtils = jwtUtils;
  }

  @Override
  public void destroy() {
    // Cleanup logic here (if needed)
  }

  @Override
  public void doFilter(jakarta.servlet.ServletRequest request, jakarta.servlet.ServletResponse response,
      jakarta.servlet.FilterChain chain) throws IOException, jakarta.servlet.ServletException {
    HttpServletRequest httpRequest = (HttpServletRequest) request;
    HttpServletResponse httpResponse = (HttpServletResponse) response;

    String authorizationHeader = httpRequest.getHeader("Authorization");

    if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
      String token = authorizationHeader.substring(7);

      if (!jwtUtils.validateToken(token)) {
        httpResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid JWT Token");
        return;
      }
    } else {
      httpResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, "JWT Token is missing");
      return;
    }

    chain.doFilter(request, response);
  }
}
