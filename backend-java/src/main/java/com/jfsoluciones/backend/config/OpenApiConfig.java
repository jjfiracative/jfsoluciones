package com.jfsoluciones.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI jfSolucionesOpenApi() {
        return new OpenAPI().info(new Info().title("JF Soluciones API").version("v1").description("Documentacion de endpoints del backend JF Soluciones").contact(new Contact().name("JF Soluciones")));
    }
}
