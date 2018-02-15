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
        populateSampleData();
    }

    @PostConstruct
    private void populateSampleData()
    {
        System.out.println("===================   PUPULATE SAMPLE DATA");
        users.add( new User( "xyz", "xyz", "", "test@test.com", "password" ) );
        users.add( new User( "123", "123", "", "test@test.com", "123" ) );
    }


    @Override
    public List<User> getUserList()
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
    public User addUser( User user )
    {            
        user.setId(users.size());
        users.add(user);
        return users.get( users.size()-1 );
    }

    @Override
    public User findUserByEmail( String email )
    {
        for(int i=0;i<users.size();i++){
            if(users.get(i).getEmail()==email) {
                User retUser = users.get(i);
                retUser.setPassword("****"); //para que en la pantalla se vean 'punticos'
                return retUser;
            }
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
        return addUser(user)!=null;
    }

}
