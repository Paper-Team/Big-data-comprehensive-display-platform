package com.huatec.datahome.services;

import com.huatec.datahome.domain.HuatecTeacherDO;
import com.huatec.datahome.domain.KeyListValMapDO;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.KeyStrValLongDO;

import java.util.List;
import java.util.Map;

/**
 * 智慧学习
 * @author fc
 * @date 2018/4/28
 */

public interface SmartLearningTeaService {
    /**
     * 智慧学习基础
     * @return
     */
    List<HuatecTeacherDO> smartLearningBase();

    /**
     * 最近30天教师登陆人次
     * @return
     */
    List<KeyStrValIntDO> teacherLogin();

    /**
     * 精品必修
     * @return
     */
    List<KeyStrValIntDO> courseNum();

    /**
     * 课程信息
     * @return
     */
    List<KeyStrValIntDO> courseInfo();

    /**
     * 数字化资源占比
     * @return
     */
    List<KeyStrValIntDO> resourcePercent();

    /**
     * 最近30天新建课程数量
     * @return
     */
    List<Map<String, Object>> createCourse();

    /**
     * 今天在线教师小时数量
     * @return
     */
    List<KeyStrValLongDO> onlineTeaNum();
}
