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
        User usuario1 = new User( "nombre 1", "xyz", "http://scriptmode.com/videostreamingtutorial/img/overview/user-management.png", "xyz", "password" );
        User usuario2 = new User( "nombre 2", "123", "http://scriptmode.com/videostreamingtutorial/img/overview/user-management.png", "user@user.com", "123" );

        addUser(usuario1);
        addUser(usuario2);
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
        
        String u_image = user.getImage(); // IMAGEN USER
        String d_image = "http://scriptmode.com/videostreamingtutorial/img/overview/user-management.png"; // LINK DEFAULT        
        if("".equals(u_image)){
            user.setImage(d_image);
        }
        else{
            user.setImage(u_image);
        }
        user.setId(users.size());        
        users.add(user);
        return users.get( users.size()-1 );
    }

    @Override
    public User findUserByEmail( String email )
    {
        for(int i=0;i<users.size();i++){
            if(email.equals(users.get(i).getEmail())) {
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
       for(int i=0;i<users.size();i++){          
            if(email.equals(users.get(i).getEmail()) && password.equals(users.get(i).getPassword())) {
                User retUser = users.get(i);
                //retUser.setPassword("****"); //para que no retorne el password
                return retUser;
            }
        }
        
        return null;
    }

    @Override
    public Boolean registerUser(User user) {        
        return addUser(user)!=null;
    }

}
