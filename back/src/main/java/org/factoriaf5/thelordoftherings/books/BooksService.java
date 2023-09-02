package org.factoriaf5.thelordoftherings.books;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BooksService {

    BooksRepository repository;

    @Autowired
    public BooksService(BooksRepository repository) {
        this.repository = repository;
    }

    public Books create(Books books) {
        return repository.save(books);
    }

    public Books findById(Long id) {
        return repository.findById(id).orElseThrow();

    }

    public Books update(Long id, Books newBooks) {
        Books currentBook = repository.findById(id).orElseThrow();
        currentBook.setTitle(newBooks.getTitle());
        currentBook.setPublicationevent(newBooks.getPublicationevent());
        currentBook.setDescription(newBooks.getDescription());
        currentBook.setImage(newBooks.getImage());
        return repository.save(currentBook);
    }

    public Books delete(Long id, Books books) {
        Books books1 = repository.findById(id).orElseThrow();
        books1.setId(books.getId());
        repository.delete(books1);
        return books1;
    }

    public List<Books> getAll() {
        return repository.findAll();
    }
}
