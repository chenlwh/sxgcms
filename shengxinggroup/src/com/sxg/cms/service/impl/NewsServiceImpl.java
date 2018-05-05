package com.sxg.cms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sxg.cms.dao.NewsDao;
import com.sxg.cms.entity.News;
import com.sxg.cms.service.NewsService;

@Service("newsService")
public class NewsServiceImpl implements NewsService {

	@Autowired
    private NewsDao newsDao;

	@Override
	public List<News> list() {
		return newsDao.list();
	}

	@Override
	public void save(News news) {
		newsDao.save(news);
		
	}

}
