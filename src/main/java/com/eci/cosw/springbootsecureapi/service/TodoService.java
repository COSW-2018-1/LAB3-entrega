/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Todo;
import java.util.List;


/**
 *
 * @author sergio
 */
public interface TodoService {
    
    List<Todo> getTodoList();
    
    Todo addTodo( Todo todo );

    
}
