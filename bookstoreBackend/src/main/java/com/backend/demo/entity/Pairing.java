package com.backend.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "pairing")
public class Pairing {
    @Column(name = "BOOK_ID")
    private int bookId;
    @Id
    @Column(name ="USER_NAME")
    private String userName;
    @Column(name = "NUMBER")
    private int number;

    public Pairing(int bookId, String userName, int number) {
        this.bookId = bookId;
        this.userName = userName;
        this.number = number;
    }

    public Pairing() {

    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
