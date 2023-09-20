package org.factoriaf5.thelordoftherings.films;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FilmsService {

    FilmsRepository repository;

    @Autowired
    public FilmsService(FilmsRepository repository) {
        this.repository = repository;
    }

    public Films create(Films films) {
        return repository.save(films);
    }

    public Films findById(Long id) {
        return repository.findById(id).orElseThrow();

    }

    public Films update(Long id, Films newFilms) {
        Films currentFilm = repository.findById(id).orElseThrow();
        currentFilm.setTitle(newFilms.getTitle());
        currentFilm.setPublicationevent(newFilms.getPublicationevent());
        currentFilm.setVideo(newFilms.getVideo());
        currentFilm.setImage(newFilms.getImage());
        return repository.save(currentFilm);
    }

    public Films delete(Long id, Films films) {
        Films films1 = repository.findById(id).orElseThrow();
        films1.setId(films.getId());
        repository.delete(films1);
        return films1;
    }

    public List<Films> getAll() {
        return repository.findAll();
    }
}
