package org.factoriaf5.thelordoftherings.recommended;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/recommended")
public class RecommendedController {
    private RecommendedService service;

    @Autowired
    public RecommendedController(RecommendedService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Recommended> create(@RequestBody Recommended recommended) {
        Recommended serviceSaved = service.create(recommended);
        return ResponseEntity.status(HttpStatus.OK).body(serviceSaved);
    }

    @GetMapping
    public ResponseEntity<List<Recommended>> findAll() {
        List<Recommended> serviceGetAll = service.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(serviceGetAll);
    }
}
