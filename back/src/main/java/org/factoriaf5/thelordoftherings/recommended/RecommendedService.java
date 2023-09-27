package org.factoriaf5.thelordoftherings.recommended;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecommendedService {
    RecommendedRepository repository;

    @Autowired
    public RecommendedService(RecommendedRepository repository) {
        this.repository = repository;
    }

    public Recommended create(Recommended recommended) {
        return repository.save(recommended);
    }

    public List<Recommended> getAll() {
        return repository.findAll();
    }

}
