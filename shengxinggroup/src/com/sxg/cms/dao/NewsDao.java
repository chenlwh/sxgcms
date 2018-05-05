package com.sxg.cms.dao;

import java.util.List;

import com.sxg.cms.entity.News;

public interface NewsDao {
	public void save(News user); 
	public List<News> list(); 

}
