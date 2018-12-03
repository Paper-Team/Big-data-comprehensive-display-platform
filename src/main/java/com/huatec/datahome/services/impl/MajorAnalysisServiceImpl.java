package com.huatec.datahome.services.impl;

import com.huatec.datahome.dao.MajorAnalysisDao;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.DoubleCreateDO;
import com.huatec.datahome.domain.MajorAdmissionDO;
import com.huatec.datahome.domain.MajorBasicDO;
import com.huatec.datahome.services.MajorAnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 专业分析
 * service实现层
 *
 * @author HF
 * @date 2018-04-28
 */
@Service
public class MajorAnalysisServiceImpl implements MajorAnalysisService{


    private MajorAnalysisDao majorAnalysisDao;

    @Autowired
    public MajorAnalysisServiceImpl(MajorAnalysisDao majorAnalysisDao){
        this.majorAnalysisDao = majorAnalysisDao;

    }

    /**
     * 获取专业数量
     *
     *
     * @return 所有专业名称
     */
    @Override
    public List<String> getMajorNum() {
        return majorAnalysisDao.getMajorNum();
    }

    /**
     * 获取基本信息
     *
     * @param majorName 专业名称
     * @return 专业基本信息
     */
    @Override
    public MajorBasicDO getMajorBaseInfo(String majorName) {
        return majorAnalysisDao.getMajorBaseInfo(majorName);
    }

    /**
     * 专业就业人俗分布
     *
     * @param majorName 专业名称
     * @return 就业分布
     */
    @Override
    public List<KeyStrValIntDO> getEmploymentPosition(String majorName) {
        return majorAnalysisDao.getEmploymentPosition(majorName);
    }

    /**
     * 获取专业每年高职本科数量
     *
     * @param majorName 专业名称
     * @return 专业基本信息
     */
    @Override
    public List<MajorAdmissionDO> gradeDistributed(String majorName) {
        return majorAnalysisDao.gradeDistributed(majorName);
    }

    /**
     * 双创产品分析
     *
     * @param majorName 专业名称
     * @return 专业基本信息
     */
    @Override
    public List<DoubleCreateDO> getDoubleCreate(String majorName) {
        return majorAnalysisDao.getDoubleCreate(majorName);
    }
}
