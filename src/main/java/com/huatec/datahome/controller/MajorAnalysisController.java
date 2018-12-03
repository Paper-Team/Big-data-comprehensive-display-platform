package com.huatec.datahome.controller;

import com.huatec.datahome.domain.DoubleCreateDO;
import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.MajorAdmissionDO;
import com.huatec.datahome.domain.MajorBasicDO;
import com.huatec.datahome.services.MajorAnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 专业分析
 * controller层
 *
 * @author HF
 * @date 2018-04-28
 */
@Controller
@RequestMapping("majorAnalysis")
public class MajorAnalysisController {

    private MajorAnalysisService majorAnalysisService;

    @Autowired
    public MajorAnalysisController(MajorAnalysisService majorAnalysisService){
        this.majorAnalysisService = majorAnalysisService;

    }

    /**
     * 获取专业数量
     *
     *
     * @return 所有专业名称
     */
    @RequestMapping("majorNames")
    @ResponseBody
    List<String> getMajorNum(){
        return majorAnalysisService.getMajorNum();
    }

    /**
     * 获取基本信息
     *
     * @param majorName 专业名称
     * @return 专业基本信息
     */
    @RequestMapping("baseInfo")
    @ResponseBody
    MajorBasicDO getMajorBaseInfo(@RequestParam("majorName") String majorName){
        return majorAnalysisService.getMajorBaseInfo(majorName);
    }

    /**
     * 获取基本信息
     *
     * @param majorName 专业名称
     * @return 专业基本信息
     */
    @RequestMapping("employmentPosition")
    @ResponseBody
    List<KeyStrValIntDO> getEmploymentPosition(@RequestParam("majorName") String majorName){
        return majorAnalysisService.getEmploymentPosition(majorName);
    }

    /**
     * 获取专业每年高职本科数量
     *
     * @param majorName 专业名称
     * @return 专业基本信息
     */
    @RequestMapping("gradeDistributed")
    @ResponseBody
    List<MajorAdmissionDO> getGradeDistributed(@RequestParam("majorName") String majorName){
        return majorAnalysisService.gradeDistributed(majorName);
    }

    /**
     * 双创产品分析
     *
     * @param majorName 专业名称
     * @return 专业基本信息
     */
    @RequestMapping("doubleCreate")
    @ResponseBody
    List<DoubleCreateDO> getDoubleCreate(@RequestParam("majorName") String majorName){
        return majorAnalysisService.getDoubleCreate(majorName);
    }


}
