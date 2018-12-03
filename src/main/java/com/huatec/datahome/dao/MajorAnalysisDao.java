package com.huatec.datahome.dao;

import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.DoubleCreateDO;
import com.huatec.datahome.domain.MajorAdmissionDO;
import com.huatec.datahome.domain.MajorBasicDO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 专业分析
 * dao层
 *
 * @author HF
 * @date 2018-04-28
 */
@Mapper
@Repository
public interface MajorAnalysisDao {

    /**
     * 获取专业数量
     *
     *
     * @return 所有专业名称
     */
    List<String> getMajorNum();

    /**
     * 获取基本信息
     *
     * @param majorName 专业名称
     * @return 专业基本信息
     */
    MajorBasicDO getMajorBaseInfo(String majorName);

    /**
     * 专业就业人俗分布
     *
     * @param majorName 专业名称
     * @return 就业分布
     */
    List<KeyStrValIntDO> getEmploymentPosition(String majorName);

    /**
     * 获取专业每年高职本科数量
     *
     * @param majorName 专业名称
     * @return 专业基本信息
     */
    List<MajorAdmissionDO> gradeDistributed(String majorName);

    /**
     * 双创产品分析
     *
     * @param majorName 专业名称
     * @return 专业基本信息
     */
    List<DoubleCreateDO> getDoubleCreate(String majorName);
}
