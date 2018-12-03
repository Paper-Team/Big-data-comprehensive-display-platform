package com.huatec.datahome.services.impl;

import com.huatec.datahome.dao.MajorOprationDao;
import com.huatec.datahome.domain.KeyStrValDoubleDO;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.KeyStrValLongDO;
import com.huatec.datahome.domain.TitlePageNumDO;
import com.huatec.datahome.services.MajorOprationService;
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
public class MajorOprationServiceImpl implements MajorOprationService{

    private final MajorOprationDao majorOprationDao;

    @Autowired
    MajorOprationServiceImpl(MajorOprationDao majorOprationDao){
        this.majorOprationDao = majorOprationDao;
    }

    /**
     * 专业运营基础
     *
     * @return
     */
    @Override
    public List<TitlePageNumDO> majorOprationBase() {
        return majorOprationDao.majorOprationBase();
    }

    /**
     * 专业就业率
     *
     * @return
     */
    @Override
    public List<KeyStrValDoubleDO> majorEmploymentRate() {
        return majorOprationDao.majorEmploymentRate();
    }

    /**
     * 工程师行业背景
     *
     * @return
     */
    @Override
    public List<KeyStrValIntDO> engineerBackground() {
        return majorOprationDao.engineerBackground();
    }

    /**
     * 根据省份获取学校信息
     * @return
     */
    @Override
    public List<Map<String, Object>> queryProvinceSchoolList(String province){
        return majorOprationDao.queryProvinceSchoolList(province);
    }

    /**
     * 根据省份获取学校数量
     *
     * @return
     */
    @Override
    public List<KeyStrValLongDO> queryProvinceSchoolNumberList() {
        return majorOprationDao.queryProvinceSchoolNumberList();
    }


}
