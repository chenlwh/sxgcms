package com.sxg.cms.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sxg.cms.entity.Introduce;
import com.sxg.cms.service.IntroduceService;

@Controller

@RequestMapping("/introduce")

public class IntroduceController {

	@Autowired
	private IntroduceService introduceService;
	
	
	@ResponseBody
	@RequestMapping(value = "/list")
	public Map<String,Object> list(@RequestParam("type") String type) {
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			Introduce introduce = introduceService.list(type);
			result.put("suc", "yes");
			result.put("data", introduce);

		} catch (Exception e) {
			result.put("suc", "no");
			result.put("msg", "error");
		}
		return result;

	}
	
	@ResponseBody
	@RequestMapping(value = "/save", method = { RequestMethod.POST })
	public Map<String, Object> save(@RequestParam("id") String id,@RequestParam("content") String content,@RequestParam("type") String type) {
		Map<String, Object> result = new HashMap<String, Object>();
		try {	     			
			Introduce introduce = new Introduce();
			if(id!=null&&id!="") {
				introduce.setId(id);
			}			
			introduce.setContent(content);
			introduce.setType(type);

			introduceService.save(introduce);
			
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