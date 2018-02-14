package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
@Service
public class UserServiceImpl implements UserService
{

    private List<User> users = new ArrayList<>();


    @Autowired
    public UserServiceImpl()
    {
    }

    @PostConstruct
    private void populateSampleData()
    {
        users.add( new User( "test@mail.com", "password", "Andres", "Perez", "" ) );
    }


    @Override
    public List<User> getUsers()
    {   
        return users;
    }

    @Override
    public User getUser( int id )
    {
        /*for(int i=0;i<users.size();i++){
            if(users.get(i).getId()==id) return users.get(i);
        }*/
        
        return users.get(id);
    }

    @Override
    public User createUser( User user )
    {    
        for(int i=0;i<users.size();i++){
            if(users.get(i).getId()==user.getId() || users.get(i).getEmail() == user.getEmail()) return null;
        }
        
        user.setId(users.size());
        users.add(user);
        return users.get( users.size()-1 );
    }

    @Override
    public User findUserByEmail( String email )
    {
        for(int i=0;i<users.size();i++){
            if(users.get(i).getEmail()==email) return users.get(i);
        }
        
        return null;
    }

    @Override
    public User findUserByEmailAndPassword( String email, String password )
    {
        return users.get( 0 );
    }

    @Override
    public Boolean registerUser(User user) {        
        return createUser(user)!=null;
    }

}
