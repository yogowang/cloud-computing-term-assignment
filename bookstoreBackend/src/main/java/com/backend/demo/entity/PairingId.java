package com.backend.demo.entity;


import java.io.Serializable;

public class PairingId implements Serializable {
    private int bookId;
    private String userName;

    public PairingId() {
    }

    public PairingId(int bookId, String userName) {
        this.bookId = bookId;
        this.userName = userName;
    }
}
