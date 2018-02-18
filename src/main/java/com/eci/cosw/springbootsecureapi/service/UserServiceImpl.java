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
        System.out.println("POPULATE SAMPLE DATA");
        
        User usuario1 = new User( "nombre 1", "xyz", "http://scriptmode.com/videostreamingtutorial/img/overview/user-management.png", "xyz", "password" );
        User usuario2 = new User( "nombre 2", "123", "http://scriptmode.com/videostreamingtutorial/img/overview/user-management.png", "root", "root" );

        addUser(usuario1);
        addUser(usuario2);
    }


    @Override
    public List<User> getUserList()
    {   
        System.out.println("GET USER LIST");
        
        return users;
    }

    @Override
    public User getUser( int id )
    {
        System.out.println("GETUSER");
        
        return users.get(id);
    }

    @Override
    public User addUser( User user )
    {           
        System.out.println("ADDUSER");
        
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
        System.out.println("====== FIND BY EMAIL");
        System.out.println(users.size());
        System.out.println(email);
        
        for(int i=0;i<users.size();i++){
            System.out.println("====== For i - "+ i);
            
            System.out.println(users.get(i));
            
            if(email.equals(users.get(i).getEmail())) {
                System.out.println(true);
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
        System.out.println("FIND BY EMAIL PASSWORD");
        System.out.println(users.size());   
        
        System.out.println("CONTROLLER FIND");
        System.out.println(email);
        System.out.println(password);
       for(int i=0;i<users.size();i++){          
            if(email.equals(users.get(i).getEmail()) && password.equals(users.get(i).getPassword())) {
                return users.get(i);
            }
        }
        
        return null;
    }

    @Override
    public Boolean registerUser(User user) { 
        System.out.println("REGISTRER");
        return addUser(user)!=null;
    }

}
