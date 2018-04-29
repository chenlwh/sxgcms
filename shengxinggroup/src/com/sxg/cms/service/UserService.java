package com.sxg.cms.service;

import java.util.List;

import com.sxg.cms.entity.User;

public interface UserService {
	public User login(String name,String password); 
	public void save(String id,String name,String password,String accessid); 
	public void delete(String id); 
	public List<User> list(); 
}
