package com.huatec.datahome.controller;

import com.huatec.datahome.domain.HuatecTeacherDO;
import com.huatec.datahome.domain.KeyListValMapDO;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.KeyStrValLongDO;
import com.huatec.datahome.services.SmartLearningTeaService;
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
@RequestMapping("smartLearningTea")
public class SmartLearningTeaController {
    private final SmartLearningTeaService smartLearningTeaService;

    @Autowired
    SmartLearningTeaController(SmartLearningTeaService smartLearningTeaService){
        this.smartLearningTeaService = smartLearningTeaService;
    }

    /**
     * 智慧学习基础
     * @return
     */
    @RequestMapping(value = "smartLearningBase", method = RequestMethod.GET)
    @ResponseBody
    List<HuatecTeacherDO> smartLearningBase(){
        return smartLearningTeaService.smartLearningBase();
    };

    /**
     * 最近30天教师登陆人次
     * @return
     */
    @RequestMapping(value = "teacherLogin", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValIntDO> teacherLogin(){
        return smartLearningTeaService.teacherLogin();
    };

    /**
     * 精品必修
     * @return
     */
    @RequestMapping(value = "courseNum", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValIntDO> courseNum(){
        return smartLearningTeaService.courseNum();
    }

    /**
     * 课程信息
     * @return
     */
    @RequestMapping(value = "courseInfo", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValIntDO> courseInfo(){
        return smartLearningTeaService.courseInfo();
    }

    /**
     * 数字化资源占比
     * @return
     */
    @RequestMapping(value = "resourcePercent", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValIntDO> resourcePercent(){
        return smartLearningTeaService.resourcePercent();
    }

    /**
     * 最近30天新建课程数量
     * @return
     */
    @RequestMapping(value = "createCourse", method = RequestMethod.GET)
    @ResponseBody
    List<Map<String, Object>> createCourse(){
        return smartLearningTeaService.createCourse();
    }

    /**
     * 今天在线教师小时数量
     * @return
     */
    @RequestMapping(value = "onlineTeaNum", method = RequestMethod.GET)
    @ResponseBody
    List<KeyStrValLongDO> onlineTeaNum(){
        return smartLearningTeaService.onlineTeaNum();
    }
}
