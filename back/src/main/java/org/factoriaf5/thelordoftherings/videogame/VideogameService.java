package org.factoriaf5.thelordoftherings.videogame;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VideogameService {

    VideogameRepository repository;

    @Autowired
    public VideogameService(VideogameRepository repository) {
        this.repository = repository;
    }

    public Videogame create(Videogame videogame) {
        return repository.save(videogame);
    }

    public Videogame findById(Long id) {
        return repository.findById(id).orElseThrow();

    }

    public Videogame update(Long id, Videogame newVideogame) {
        Videogame currentVideogame = repository.findById(id).orElseThrow();
        currentVideogame.setTitle(newVideogame.getTitle());
        currentVideogame.setPublicationevent(newVideogame.getPublicationevent());
        currentVideogame.setDescription(newVideogame.getDescription());
        currentVideogame.setImage(newVideogame.getImage());
        return repository.save(currentVideogame);
    }

    public Videogame delete(Long id, Videogame videogames) {
        Videogame videogame1 = repository.findById(id).orElseThrow();
        videogame1.setId(videogames.getId());
        repository.delete(videogame1);
        return videogame1;
    }

    public List<Videogame> getAll() {
        return repository.findAll();
    }
}
