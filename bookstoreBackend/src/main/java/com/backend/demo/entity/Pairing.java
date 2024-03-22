package com.backend.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "pairing")
@IdClass(PairingId.class)
public class Pairing {
    @Id
    @Column(name = "BOOK_ID")
    private int bookId;
    @Id
    @Column(name ="USER_NAME")
    private String userName;
    @Column(name = "NUMBER")
    private int number;
    @Column(name="BOOK_NAME")
    private String bookName;

    public Pairing(int bookId, String userName, int number, String bookName) {
        this.bookId = bookId;
        this.userName = userName;
        this.number = number;
        this.bookName = bookName;
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

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
}
