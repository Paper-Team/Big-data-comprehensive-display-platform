package com.huatec.datahome.services.impl;

import com.huatec.datahome.dao.SmartLearningStuDao;
import com.huatec.datahome.domain.HuatecStudentDO;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.KeyStrValLongDO;
import com.huatec.datahome.services.SmartLearningStuService;
import com.huatec.datahome.utils.DataChangeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * 专业运营
 * @author fc
 * @date 2018/4/28
 */

@Service
public class SmartLearningStuServiceImpl implements SmartLearningStuService {

    private final SmartLearningStuDao smartLearningStuDao;

    @Autowired
    SmartLearningStuServiceImpl(SmartLearningStuDao smartLearningStuDao){
        this.smartLearningStuDao = smartLearningStuDao;
    }


    /**
     * 智慧学习学生基础
     *
     * @return
     */
    @Override
    public List<HuatecStudentDO> smartLearningBase() {
        return smartLearningStuDao.smartLearningBase();
    }

    /**
     * 最近30天各专业学习人数占比
     *
     * @return
     */
    @Override
    public List<KeyStrValIntDO> majorNum() {
        return smartLearningStuDao.majorNum();
    }

    /**
     * 24小时平均在线情况
     *
     * @return
     */
    @Override
    public List<Map<String, Object>> onlineState() {
        return smartLearningStuDao.onlineState();
    }

    /**
     * 最近30天学习行为记录
     *
     * @return
     */
    @Override
    public List<Map<String, Object>> studyRecord() {
        return smartLearningStuDao.studyRecord();
    }

    /**
     * 接入方式占比
     *
     * @return
     */
    @Override
    public List<KeyStrValIntDO> loginWay() {
        return smartLearningStuDao.loginWay();
    }

    /**
     * 项目部学习热度top5
     *
     * @return
     */
    @Override
    public List<KeyStrValIntDO> studyHot() {
        return smartLearningStuDao.studyHot();
    }

    /**
     * 今天在线学生小时数量
     * @return
     */
    @Override
    public List<KeyStrValLongDO> onlineStuNum(){
        List<KeyStrValLongDO> list = smartLearningStuDao.onlineStuNum();
        List<KeyStrValLongDO> r = DataChangeUtil.fill24Hour(list);
        return r;
    }
}
