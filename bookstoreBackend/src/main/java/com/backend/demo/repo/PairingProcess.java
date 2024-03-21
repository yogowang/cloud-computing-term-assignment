package com.backend.demo.repo;

import com.backend.demo.entity.Pairing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PairingProcess extends JpaRepository<Pairing,Long> {
    Optional<Pairing> findPairingByBookIdAndUserName(int bookId,String userName);
    List<Pairing> findPairingsByUserName(String userName);
}
