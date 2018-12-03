package com.huatec.datahome.controller;

import com.huatec.datahome.domain.KeyStrValDoubleDO;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.KeyStrValLongDO;
import com.huatec.datahome.domain.TitlePageNumDO;
import com.huatec.datahome.services.MajorOprationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 专业运营
 * @author fc
 * @date 2018/4/28
 */

@Controller
@RequestMapping("majorOpration")
public class MajorOprationController {
    private final MajorOprationService majorOprationService;

    @Autowired
    MajorOprationController(MajorOprationService majorOprationService){
        this.majorOprationService = majorOprationService;
    }

    /**
     * 专业运营基础
     * @return
     */
    @RequestMapping(value = "majorOprationBase", method = RequestMethod.GET)
    @ResponseBody
    List<TitlePageNumDO> majorOprationBase(){
        return majorOprationService.majorOprationBase();
    }

    /**
     * 专业就业率
     * @return
     */
    @RequestMapping(value = "majorEmploymentRate", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValDoubleDO> majorEmploymentRate(){
        return majorOprationService.majorEmploymentRate();
    }

    /**
     * 工程师行业背景
     * @return
     */
    @RequestMapping(value = "engineerBackground", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValIntDO> engineerBackground(){
        return majorOprationService.engineerBackground();
    }

    // 根据省份获取学校信息
    @RequestMapping(value = "getProvinceSchoolList", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String, Object>> getProvinceSchoolList(String province) {
        List<Map<String, Object>> list = majorOprationService.queryProvinceSchoolList(province);
        return list;
    }


    /**
     * 根据省份获取学校数量
     *
     * @return
     */
    @RequestMapping(value = "queryProvinceSchoolNumberList", method = RequestMethod.GET)
    @ResponseBody
    public List<KeyStrValLongDO> queryProvinceSchoolNumberList() {
        List<KeyStrValLongDO> list = majorOprationService.queryProvinceSchoolNumberList();
        return list;
    }
}
