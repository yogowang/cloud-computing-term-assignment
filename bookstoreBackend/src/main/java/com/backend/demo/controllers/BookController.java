package com.backend.demo.controllers;

import com.backend.demo.entity.Book;
import com.backend.demo.repo.BookProcess;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {
    private final BookProcess bookProcess;

    public BookController(BookProcess bookProcess) {
        this.bookProcess = bookProcess;
    }
    @GetMapping("/fetchAllBook")
    @CrossOrigin(origins = "*")
    List<Book> fetch(){
        return bookProcess.findAll();
    }
    @PostMapping("/addBook")
    @CrossOrigin(origins = "*")
    String addBook(@RequestBody Book book){
        try {
            bookProcess.save(book);
            return "success";
        }catch (Exception e){
            e.printStackTrace();
            return "error";
        }
    }
    @PostMapping("/removeBook/{bookId}")
    @CrossOrigin(origins = "*")
    @Transactional
    String removeBook(@PathVariable int bookId){
        try {
            bookProcess.deleteBookByBookId(bookId);
            return "success";
        }catch (Exception e){
            e.printStackTrace();
            return "error";
        }
    }
}
