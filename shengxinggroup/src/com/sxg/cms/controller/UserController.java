package com.sxg.cms.controller;

import java.util.HashMap;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.ResponseBody;

import com.sxg.cms.entity.User;

import com.sxg.cms.service.UserService;

@Controller

@RequestMapping("/user")

public class UserController {

	@Autowired

	private UserService userService;

	@RequestMapping(value = "/login")

	public String login(HttpServletRequest request, @RequestParam("username") String username,
			@RequestParam("password") String password) {
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			User user = userService.login(username, password);
			if (user != null) {
				HttpSession session = request.getSession();
				session.setAttribute("user", user);
				session.setAttribute("username", user.getUsername());
				return "main";

			}
			result.put("suc", "yes");
			result.put("data", user);

		} catch (Exception e) {
			result.put("suc", "no");
			result.put("msg", "error");
		}
		return "";

	}

	// @ResponseBody

	// @RequestMapping(value="/login")

	// public Map<String,Object> login(@RequestParam("username")String username,
	// @RequestParam("password") String password) {

	// Map<String,Object> result = new HashMap<String,Object>();

	// try {

	// User user = userService.login(username, password);

	// result.put("suc", "yes");

	// result.put("data", user);

	// }catch(Exception e) {

	// result.put("suc", "no");

	// result.put("msg", "error");

	// }

	// return result;

	//

	// }

}