package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.User;
import com.eci.cosw.springbootsecureapi.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;

/**
 * @author Santiago Carrillo 8/21/17.
 */
@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Token login(@RequestBody User login) throws ServletException {

        String jwtToken;

        if (login.getEmail() == null || login.getPassword() == null) {
            throw new ServletException("Please fill in username and password");
        }

        String username = login.getEmail();
        String password = login.getPassword();

        User user = userService.findUserByEmailAndPassword(username, password);

        System.out.println("CONTROLLER");
        System.out.println(user.getEmail());
        System.out.println(user.getPassword());
        if (user == null) {
            throw new ServletException("Username not found.");
        }

        String pwd = user.getPassword();

        if (!password.equals(pwd)) {
            throw new ServletException("Invalid login. Please check your name and password.");
        }

        jwtToken = Jwts.builder().setSubject(username).claim("roles", "user").setIssuedAt(new Date()).signWith(
                SignatureAlgorithm.HS256, "secretkey").compact();

        return new Token(jwtToken);
    }

    public class Token {

        String access_token;

        public Token(String access_token) {
            this.access_token = access_token;
        }

        public String getAccessToken() {
            return access_token;
        }

        public void setAccessToken(String access_token) {
            this.access_token = access_token;
        }
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public Boolean agregarUsuario(@RequestBody User adduser) throws ServletException {

        if (adduser.getName() == null || adduser.getLastname() == null || adduser.getEmail() == null || adduser.getPassword() == null) {
            throw new ServletException("Please fill all fiels ...");
        }

        if(userService.findUserByEmail(adduser.getEmail())!=null){
            throw new ServletException("Ya existe un usuario con el mismo correo ...");
        }
        
        Boolean result = userService.registerUser(adduser);

        if (!result) {
            throw new ServletException("~A unknow error has occurred~ ...");
        }

        return true;

    }

    @RequestMapping(value = "/listUsers", method = RequestMethod.GET)
    public List<User> traerUsers() {

        return userService.getUserList();

    }

    @RequestMapping(value = "/searchEmailUser", method = RequestMethod.POST)
    public User traerUserCorreo(@RequestBody String email) throws ServletException {

        if (email.isEmpty()) {
            throw new ServletException("Please fill email ...");
        }
       
        User encontrado= userService.findUserByEmail(email);
        
        if(encontrado==null) {
            throw new ServletException("No user found with the email address");
        }        
        
        return encontrado;
    }

}
