package com.sxg.cms.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

import com.sxg.cms.dao.NewsDao;
import com.sxg.cms.entity.News;

@Repository("newsDao")
public class NewsDaoImpl extends HibernateDaoSupport implements NewsDao {

	@Autowired
	public void setSessionFacotry(SessionFactory sessionFacotry) {
		super.setSessionFactory(sessionFacotry);
	}

	@Override
	public void save(News news) {
		super.getHibernateTemplate().saveOrUpdate(news);
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<News> list() {
		String hql = "from News";
		List<News> list = (List<News>) super.getHibernateTemplate().find(hql);
		return list;
	}


}
