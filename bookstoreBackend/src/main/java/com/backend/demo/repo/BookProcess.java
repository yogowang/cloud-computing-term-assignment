package com.backend.demo.repo;

import com.backend.demo.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookProcess extends JpaRepository<Book,Long> {
}
