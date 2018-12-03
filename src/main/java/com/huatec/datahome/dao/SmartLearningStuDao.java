package com.huatec.datahome.dao;

import com.huatec.datahome.domain.HuatecStudentDO;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.KeyStrValLongDO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * 专业运营
 * @author fc
 * @date 2018/4/28
 */

@Mapper
@Repository
public interface SmartLearningStuDao {

    /**
     * 智慧学习学生基础
     * @return
     */
    List<HuatecStudentDO> smartLearningBase();

    /**
     * 最近30天各专业学习人数占比
     * @return
     */
    List<KeyStrValIntDO> majorNum();

    /**
     * 24小时平均在线情况
     * @return
     */
    List<Map<String, Object>> onlineState();

    /**
     * 最近30天学习行为记录
     * @return
     */
    List<Map<String, Object>> studyRecord();

    /**
     * 接入方式占比
     * @return
     */
    List<KeyStrValIntDO> loginWay();

    /**
     * 项目部学习热度top5
     * @return
     */
    List<KeyStrValIntDO> studyHot();

    /**
     * 今天在线学生小时数量
     * @return
     */
    List<KeyStrValLongDO> onlineStuNum();
}
