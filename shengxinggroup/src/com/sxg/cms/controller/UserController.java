package com.sxg.cms.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@ResponseBody
	@RequestMapping(value="/list")
	public Map<String,Object> list() {
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("data", "123");
		return result;
		
	}
	
	@RequestMapping(value="/test")
	public String test() {
		return "test";
		
	}

}
