package com.sxg.cms.service;

import java.util.List;

import com.sxg.cms.entity.News;

public interface NewsService {
	public void save(News user); 
	public List<News> list(); 
}
