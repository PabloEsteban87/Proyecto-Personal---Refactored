package org.factoriaf5.thelordoftherings.videogame;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/videogame")
public class VideogameController {

    private VideogameService service;

    @Autowired
    public VideogameController(VideogameService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Videogame> create(@RequestBody Videogame videogame) {
        Videogame serviceSaved = service.create(videogame);
        return ResponseEntity.status(HttpStatus.OK).body(serviceSaved);
    }

    @GetMapping(path = { "/{id}" })
    public ResponseEntity<Videogame> findOne(@PathVariable("id") Long id) {
        Videogame findbyid = service.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(findbyid);
    }

    @PutMapping(path = { "/{id}" })
    public ResponseEntity<Videogame> update(@PathVariable("id") Long id, @RequestBody Videogame newVideogame) {
        Videogame serviceupdated = service.update(id, newVideogame);
        return ResponseEntity.status(HttpStatus.OK).body(serviceupdated);
    }

    @DeleteMapping(path = { "/{id}" })
    public ResponseEntity<Videogame> delete(@PathVariable("id") Long id, @RequestBody Videogame videogame1) {
        Videogame serviceDeleted = service.delete(id, videogame1);
        return ResponseEntity.status(HttpStatus.OK).body(serviceDeleted);
    }

    @GetMapping
    public ResponseEntity<List<Videogame>> findAll() {
        List<Videogame> serviceGetAll = service.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(serviceGetAll);
    }
}
