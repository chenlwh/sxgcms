package com.sxg.cms.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.sxg.cms.entity.User;

public class LoginAccessFilter implements Filter{

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;  
        HttpServletResponse resp = (HttpServletResponse) response;  
        String requestPath = req.getServletPath();
        String path = req.getContextPath();  
        String basePath = req.getScheme()+"://"+req.getServerName()+":"+req.getServerPort()+path;  
        HttpSession session = req.getSession(true);  
        String username = (String) session.getAttribute("username");  
        User user = (User) session.getAttribute("user");  
        if (username == null || "".equals(username)) {  
            resp.sendRedirect(basePath+"/login.jsp");  
        }else { 
        	if(requestPath.equals("/admin/user.html")&&!"0".equals(user.getType())) {
        		resp.sendRedirect(basePath+"/login.jsp");  
            }else {
            	chain.doFilter(req, resp);  
            }
            
        }  
	}
	
	public void init(FilterConfig filterConfig) throws ServletException {}
	
	public void destroy() {}

}
