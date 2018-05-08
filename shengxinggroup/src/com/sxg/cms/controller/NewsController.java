package com.sxg.cms.controller;

import java.io.File;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.sxg.cms.entity.News;
import com.sxg.cms.entity.User;
import com.sxg.cms.service.NewsService;

@Controller

@RequestMapping("/news")

public class NewsController {

	@Autowired
	private NewsService newsService;
	
	@ResponseBody
	@RequestMapping(value = "/list")
	public Map<String,Object> list() {
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			List <News> list = newsService.list();
			result.put("suc", "yes");
			result.put("data", list);

		} catch (Exception e) {
			result.put("suc", "no");
			result.put("msg", "error");
		}
		return result;

	}
	
	@ResponseBody
	@RequestMapping(value = "/findById")
	public Map<String,Object> findById(@RequestParam("id") String id) {
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			News news = newsService.findById(id);
			result.put("suc", "yes");
			result.put("data", news);

		} catch (Exception e) {
			result.put("suc", "no");
			result.put("msg", "error");
		}
		return result;

	}
	
	@ResponseBody
	@RequestMapping(value = "/save", method = { RequestMethod.POST })
	public Map<String, Object> save(HttpServletRequest request,@RequestParam("imageFile") MultipartFile imageFile,
			@RequestParam(value="id",required=false) String id,@RequestParam("title") String title,
			@RequestParam("content") String content,@RequestParam("accessid") String accessid) {
		Map<String, Object> result = new HashMap<String, Object>();
		try {	     
			String imagePath = "resource/"+UUID.randomUUID().toString()+".png";
			String path = request.getSession().getServletContext().getRealPath("/");
			File vedioPath = new File(path+imagePath);
			imageFile.transferTo(vedioPath);
			User user = (User) request.getSession().getAttribute("user");
			
			News news = new News();
			news.setTitle(title);
			news.setContent(content);
			news.setPicPath(imagePath);
			news.setAccessid(accessid);
			news.setCreatedTime(new Date());
			news.setCreater(user.getShowname());

			newsService.save(news);
			
			result.put("suc", "yes");
			result.put("msg", "保存成功");

		} catch (Exception e) {
			result.put("suc", "no");
			result.put("msg", e.getMessage());
			e.printStackTrace();
		}
		return result;
	}
}