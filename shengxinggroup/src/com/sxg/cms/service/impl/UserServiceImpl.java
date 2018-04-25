package com.sxg.cms.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sxg.cms.dao.UserDao;
import com.sxg.cms.entity.User;
import com.sxg.cms.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
    private UserDao userDao;
	
	@Override
	public User login(String name, String password) {
		return userDao.login(name, password);
	}

}
