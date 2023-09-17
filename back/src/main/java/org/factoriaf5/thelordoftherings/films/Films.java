package org.factoriaf5.thelordoftherings.films;

import java.sql.Date;

import jakarta.persistence.*;


@Entity
@Table(name = "films")
public class Films {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_film")
    private Long id;
    
    @Column(name = "title")
    private String title;
    
    @Column(name = "publicationevent")
    private Date publicationevent;

    @Column(name = "description", columnDefinition="TEXT")
    private String description;

    
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "video")
    private String video;
    
    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    @Column(name = "image")
    private String image;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getPublicationevent() {
        return publicationevent;
    }

    public void setPublicationevent(Date publicationevent) {
        this.publicationevent = publicationevent;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
