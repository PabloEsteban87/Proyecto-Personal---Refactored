package org.factoriaf5.thelordoftherings.recommended;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendedRepository extends JpaRepository<Recommended, Long> {

}
