package com.sxg.cms.service.impl;

import java.util.Date;
import java.util.List;

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
	
	@Override
	public void save(String id,String name, String password, String accessid) {
		User user = new User();
		if(id!=null&&id.length()>0) {
			user.setId(id);
		}
		user.setUsername(name);
		user.setPassword(password);
		user.setCreatedTime(new Date());
		user.setAccessid(accessid);
		
		userDao.save(user);
		
	}

	@Override
	public List<User> list() {
		return userDao.list();
	}

	@Override
	public void delete(String id) {
		userDao.delete(id);
		
	}

}
