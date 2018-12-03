package com.huatec.datahome.controller;

import com.huatec.datahome.domain.HuatecStudentDO;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.KeyStrValLongDO;
import com.huatec.datahome.services.SmartLearningStuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * 专业运营
 * @author fc
 * @date 2018/4/28
 */

@Controller
@RequestMapping("smartLearningStu")
public class SmartLearningStuController {
    private final SmartLearningStuService smartLearningStuService;

    @Autowired
    SmartLearningStuController(SmartLearningStuService smartLearningStuService){
        this.smartLearningStuService = smartLearningStuService;
    }

    /**
     * 智慧学习学生基础
     * @return
     */
    @RequestMapping(value = "smartLearningBase", method = RequestMethod.GET)
    @ResponseBody
    List<HuatecStudentDO> smartLearningBase(){
        return smartLearningStuService.smartLearningBase();
    };

    /**
     * 最近30天各专业学习人数占比
     * @return
     */
    @RequestMapping(value = "majorNum", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValIntDO> majorNum(){
        return smartLearningStuService.majorNum();
    };

    /**
     * 24小时平均在线情况
     * @return
     */
    @RequestMapping(value = "onlineState", method = RequestMethod.GET)
    @ResponseBody
    List<Map<String, Object>> onlineState(){
        return smartLearningStuService.onlineState();
    }

    /**
     * 最近30天学习行为记录
     * @return
     */
    @RequestMapping(value = "studyRecord", method = RequestMethod.GET)
    @ResponseBody
    List<Map<String, Object>> studyRecord(){
        return smartLearningStuService.studyRecord();
    }

    /**
     * 接入方式占比
     * @return
     */
    @RequestMapping(value = "loginWay", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValIntDO> loginWay(){
        return smartLearningStuService.loginWay();
    }

    /**
     * 项目部学习热度top5
     * @return
     */
    @RequestMapping(value = "studyHot", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValIntDO> studyHot(){
        return smartLearningStuService.studyHot();
    }

    /**
     * 今天在线学生小时数量
     * @return
     */
    @RequestMapping(value = "onlineStuNum", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValLongDO> onlineStuNum(){
        return smartLearningStuService.onlineStuNum();
    }
}
