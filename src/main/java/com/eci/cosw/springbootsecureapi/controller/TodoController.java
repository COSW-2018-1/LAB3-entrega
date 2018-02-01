/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.Todo;
import com.eci.cosw.springbootsecureapi.service.TodoService;
import java.util.List;
import javax.servlet.ServletException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author sergio
 */
@RestController
@RequestMapping( "api" )
public class TodoController {
    
    @Autowired
    private TodoService todoService;
    
    @RequestMapping( value = "/todo", method = RequestMethod.POST )
    public Boolean nuevoTodo( @RequestBody Todo todo ) throws ServletException {
        
        if(todo.getDescription().isEmpty()) {
            throw new ServletException( "Please fill description..." );
        }
        else{
            todoService.addTodo(todo);
        }        
            
        return true;
    }
    
    @RequestMapping( value = "/todo", method = RequestMethod.GET )
    public List<Todo> traerTodo() throws ServletException {
              
        return todoService.getTodoList();
    }
    
}
