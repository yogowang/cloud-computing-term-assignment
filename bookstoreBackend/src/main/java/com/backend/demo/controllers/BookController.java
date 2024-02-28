package com.backend.demo.controllers;

import com.backend.demo.entity.Book;
import com.backend.demo.repo.BookProcess;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {
    private final BookProcess bookProcess;

    public BookController(BookProcess bookProcess) {
        this.bookProcess = bookProcess;
    }
    @PostMapping("/fetchAllBook")
    @CrossOrigin(origins = "*")
    List<Book> fetch(){
        return bookProcess.findAll();
    }
}
