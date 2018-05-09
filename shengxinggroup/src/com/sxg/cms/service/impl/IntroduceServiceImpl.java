package com.sxg.cms.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sxg.cms.dao.IntroduceDao;
import com.sxg.cms.entity.Introduce;
import com.sxg.cms.service.IntroduceService;

@Service("introduceService")
public class IntroduceServiceImpl implements IntroduceService {

	@Autowired
    private IntroduceDao introduceDao;

	@Override
	public Introduce list(String type) {
		return introduceDao.list(type);
	}

	@Override
	public void save(Introduce introduce) {
		introduceDao.save(introduce);
		
	}

}
