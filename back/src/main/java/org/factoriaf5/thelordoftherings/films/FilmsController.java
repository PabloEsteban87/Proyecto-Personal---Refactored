package org.factoriaf5.thelordoftherings.films;

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
@RequestMapping("/films")
public class FilmsController {

    private FilmsService service;

    @Autowired
    public FilmsController(FilmsService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Films> create(@RequestBody Films films) {
        Films serviceSaved = service.create(films);
        return ResponseEntity.status(HttpStatus.OK).body(serviceSaved);
    }

    @GetMapping(path = { "/{id}" })
    public ResponseEntity<Films> findOne(@PathVariable("id") Long id) {
        Films findbyid = service.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(findbyid);
    }

    @PutMapping(path = { "/{id}" })
    public ResponseEntity<Films> update(@PathVariable("id") Long id, @RequestBody Films newFilms) {
        Films serviceupdated = service.update(id, newFilms);
        return ResponseEntity.status(HttpStatus.OK).body(serviceupdated);
    }

    @DeleteMapping(path = { "/{id}" })
    public ResponseEntity<Films> delete(@PathVariable("id") Long id, @RequestBody Films films1) {
        Films serviceDeleted = service.delete(id, films1);
        return ResponseEntity.status(HttpStatus.OK).body(serviceDeleted);
    }

    @GetMapping
    public ResponseEntity<List<Films>> findAll() {
        List<Films> serviceGetAll = service.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(serviceGetAll);
    }
}
