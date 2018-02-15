package com.eci.cosw.springbootsecureapi.model;

/**
 * @author Santiago Carrillo 8/21/17.
 */
public class User {

    private int id;

    private String name;

    private String lastname;

    private String image;

    private String email;

    private String password;

    public User() {
    }

    public User(String name, String lastname, String image, String email, String password) {
        this.name = name;
        this.lastname = lastname;
        this.image = image;
        this.email = email;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", email='" + email + '\'' + ", password='" + password + '\'' + ", firstname='"
                + name + '\'' + '}';
    }
}
