package com.sxg.cms.dao.impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

import com.sxg.cms.dao.UserDao;
import com.sxg.cms.entity.User;

@Repository("userDao")
public class UserDaoImpl extends HibernateDaoSupport implements UserDao {

	// @Resource(name="sessionFactory")
	@Autowired
	public void setSessionFacotry(SessionFactory sessionFacotry) {
		super.setSessionFactory(sessionFacotry);
	}

	@Override
	public User login(String name, String password) {
		String hql = "from User u where u.username=? and u.password=?";
		List<User> list = (List<User>) super.getHibernateTemplate().find(hql, new String[] { name, password });
		if (list.size() > 0) {
			return list.get(0);
		}
		return null;
	}

}
