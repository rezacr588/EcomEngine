package ecom.engine.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import ecom.engine.api.security.JwtRequestFilter;
import ecom.engine.api.security.JwtUtils;

import org.springframework.boot.web.servlet.FilterRegistrationBean;

@Configuration
public class FilterConfig {

  // Rename this method to ensure uniqueness
  @Bean
  public JwtRequestFilter jwtFilter(JwtUtils jwtUtils) {
    return new JwtRequestFilter(jwtUtils);
  }

  // Ensure this method has a different name
  @Bean
  public FilterRegistrationBean<JwtRequestFilter> jwtFilterRegistrationBean(JwtRequestFilter jwtFilter) {
    FilterRegistrationBean<JwtRequestFilter> registrationBean = new FilterRegistrationBean<>();
    registrationBean.setFilter(jwtFilter);
    registrationBean.addUrlPatterns("/api/cart/*"); // Secure cart routes
    return registrationBean;
  }
}
