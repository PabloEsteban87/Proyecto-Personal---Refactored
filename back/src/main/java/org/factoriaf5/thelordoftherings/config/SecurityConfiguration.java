package org.factoriaf5.thelordoftherings.config;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
        @Bean
        SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

                http
                                .cors(withDefaults())
                                .csrf(csfr -> csfr.disable())
                                .formLogin(form -> form.disable())
                                .logout(out -> out
                                                .logoutUrl("/api/v1/logout")
                                                .deleteCookies("JSESSIONID"))
                                .authorizeHttpRequests(auth -> auth
                                                .requestMatchers(HttpMethod.PUT).permitAll()
                                                .requestMatchers(HttpMethod.POST).permitAll()
                                                .requestMatchers(HttpMethod.GET).permitAll()
                                                .requestMatchers("/books/**").permitAll()
                                                .requestMatchers("/recommended/**").permitAll()
                                                .requestMatchers("/viewform").permitAll()
                                                .requestMatchers("/games/**").permitAll()
                                                .requestMatchers("/user/**").permitAll()
                                                .requestMatchers("/register").permitAll())
                                .httpBasic(withDefaults())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED));

                return http.build();
        }

        @Bean
        CorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration configuration = new CorsConfiguration();
                configuration.setAllowCredentials(true);
                configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
                configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                configuration.setAllowedHeaders(Arrays.asList("*"));
                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);
                return source;
        }
}
