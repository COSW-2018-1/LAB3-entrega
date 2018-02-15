package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.User;

import java.util.List;

/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
public interface UserService
{
    List<User> getUserList();

    User getUser( int id );

    User addUser( User user );

    User findUserByEmail( String email );

    User findUserByEmailAndPassword( String email, String password );
    
    Boolean registerUser( User user);
}