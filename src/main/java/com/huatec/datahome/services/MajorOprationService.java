package com.huatec.datahome.services;

import com.huatec.datahome.domain.KeyStrValDoubleDO;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.KeyStrValLongDO;
import com.huatec.datahome.domain.TitlePageNumDO;

import java.util.List;
import java.util.Map;

/**
 * 专业运营
 * @author fc
 * @date 2018/4/28
 */

public interface MajorOprationService {
    /**
     * 专业运营基础
     * @return
     */
    List<TitlePageNumDO> majorOprationBase();

    /**
     * 专业就业率
     * @return
     */
    List<KeyStrValDoubleDO> majorEmploymentRate();

    /**
     * 工程师行业背景
     * @return
     */
    List<KeyStrValIntDO> engineerBackground();

    /**
     * 根据省份获取学校信息
     * @param province 省名
     * @return
     */
    List<Map<String, Object>> queryProvinceSchoolList(String province);

    /**
     * 根据省份获取学校数量
     * @param
     * @return
     */
    List<KeyStrValLongDO> queryProvinceSchoolNumberList();
}
