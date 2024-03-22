package com.backend.demo.controllers;

import com.backend.demo.entity.Pairing;
import com.backend.demo.repo.PairingProcess;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PairingController {
    private final PairingProcess pairingProcess;

    public PairingController(PairingProcess pairingProcess) {
        this.pairingProcess = pairingProcess;
    }
    @PostMapping("/addCart")
    @CrossOrigin(origins = "*")
    @Transactional
    String addToCart(@RequestBody Pairing pairing){
        int bookId=pairing.getBookId();
        String userName=pairing.getUserName();
        int number=pairing.getNumber();
        String bookName=pairing.getBookName();
        Optional<Pairing> pairingOptional=pairingProcess.findPairingByBookIdAndUserName(bookId,userName);
        try {
        if(pairingOptional.isEmpty()){
            pairingProcess.save(pairing);
            return "success";
        }
        pairingProcess.findPairingByBookIdAndUserName(bookId,userName).map(
                newPairing->{
                    newPairing.setBookId(bookId);
                    newPairing.setUserName(userName);
                    newPairing.setNumber(number+pairingOptional.get().getNumber());
                    newPairing.setBookName(bookName);
                    return pairingProcess.save(newPairing);
                }
        );
        return "success";
    } catch (Exception e){
            e.printStackTrace();
            return "error";
        }

    }
    @GetMapping("/getCart/{userName}")
    @CrossOrigin(origins = "*")
    List<Pairing> getAllItems(@PathVariable String userName){return pairingProcess.findPairingsByUserName(userName);}

}
