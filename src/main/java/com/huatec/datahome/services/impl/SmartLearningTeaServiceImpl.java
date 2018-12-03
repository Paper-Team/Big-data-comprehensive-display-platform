package com.huatec.datahome.services.impl;

import com.huatec.datahome.dao.SmartLearningTeaDao;
import com.huatec.datahome.domain.HuatecTeacherDO;
import com.huatec.datahome.domain.KeyListValMapDO;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.KeyStrValLongDO;
import com.huatec.datahome.services.SmartLearningTeaService;
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
public class SmartLearningTeaServiceImpl implements SmartLearningTeaService {

    private final SmartLearningTeaDao smartLearningTeaDao;

    @Autowired
    SmartLearningTeaServiceImpl(SmartLearningTeaDao smartLearningTeaDao){
        this.smartLearningTeaDao = smartLearningTeaDao;
    }

    /**
     * 智慧学习基础
     *
     * @return
     */
    @Override
    public List<HuatecTeacherDO> smartLearningBase() {
        return smartLearningTeaDao.smartLearningBase();
    }

    /**
     * 最近30天教师登陆人次
     *
     * @return
     */
    @Override
    public List<KeyStrValIntDO> teacherLogin() {
        return smartLearningTeaDao.teacherLogin();
    }

    /**
     * 精品必修
     *
     * @return
     */
    @Override
    public List<KeyStrValIntDO> courseNum() {
        return smartLearningTeaDao.courseNum();
    }

    /**
     * 课程信息
     *
     * @return
     */
    @Override
    public List<KeyStrValIntDO> courseInfo() {
        return smartLearningTeaDao.courseInfo();
    }

    /**
     * 数字化资源占比
     *
     * @return
     */
    @Override
    public List<KeyStrValIntDO> resourcePercent() {
        return smartLearningTeaDao.resourcePercent();
    }

    /**
     * 最近30天新建课程数量
     *
     * @return
     */
    @Override
    public List<Map<String, Object>> createCourse() {
        return smartLearningTeaDao.createCourse();
    }

    /**
     * 今天在线教师小时数量
     * @return
     */
    @Override
    public List<KeyStrValLongDO> onlineTeaNum(){
        List<KeyStrValLongDO> list = smartLearningTeaDao.onlineTeaNum();
        List<KeyStrValLongDO> r = DataChangeUtil.fill24Hour(list);
        return r;
    }
}
