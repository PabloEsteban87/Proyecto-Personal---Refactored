package org.factoriaf5.thelordoftherings.videogame;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface VideogameRepository extends JpaRepository<Videogame,Long>{
 
    
}
