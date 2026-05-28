package com.jfsoluciones.backend.api;

import com.jfsoluciones.backend.api.dto.ContactRequest;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class SiteController {

    @Operation(summary = "Estado de la API")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Servicio disponible") })
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> health() {
        return ResponseEntity.ok(Map.of("service", "jf-soluciones-backend", "status", "UP", "timestamp", Instant.now().toString()));
    }

    @Operation(summary = "Enviar mensaje de contacto")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Solicitud recibida") })
    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContact(@Valid @RequestBody ContactRequest request) {
        return ResponseEntity.ok(Map.of("message", "Solicitud recibida. Te contactaremos pronto, " + request.nombre() + "."));
    }
}
