package com.marticus.em.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marticus.em.entity.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Integer> {

	UserEntity findUsersById(int id);

	UserEntity findUsersByUserName(String userName);

	UserEntity findUsersByUserNameAndPassword(String userName, String password);

}
