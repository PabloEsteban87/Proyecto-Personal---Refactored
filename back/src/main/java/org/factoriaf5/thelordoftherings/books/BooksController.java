package org.factoriaf5.thelordoftherings.books;

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
@RequestMapping("/books")
public class BooksController {

    private BooksService service;

    @Autowired
    public BooksController(BooksService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Books> create(@RequestBody Books books) {
        Books serviceSaved = service.create(books);
        return ResponseEntity.status(HttpStatus.OK).body(serviceSaved);
    }

    @GetMapping(path = { "/{id}" })
    public ResponseEntity<Books> findOne(@PathVariable("id") Long id) {
        Books findbyid = service.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(findbyid);
    }

    @PutMapping(path = { "/{id}" })
    public ResponseEntity<Books> update(@PathVariable("id") Long id, @RequestBody Books newBooks) {
        Books serviceupdated = service.update(id, newBooks);
        return ResponseEntity.status(HttpStatus.OK).body(serviceupdated);
    }

    @DeleteMapping(path = { "/{id}" })
    public ResponseEntity<Books> delete(@PathVariable("id") Long id, @RequestBody Books books1) {
        Books serviceDeleted = service.delete(id, books1);
        return ResponseEntity.status(HttpStatus.OK).body(serviceDeleted);
    }

    @GetMapping
    public ResponseEntity<List<Books>> findAll() {
        List<Books> serviceGetAll = service.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(serviceGetAll);
    }
}
