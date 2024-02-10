package com.backend.demo.repo;

import com.backend.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserProcess extends JpaRepository<User,Long> {
Optional<User> findUserByUserName(String userName);
}
