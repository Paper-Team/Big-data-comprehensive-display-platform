package com.huatec.datahome.controller;

import com.huatec.datahome.domain.*;
import com.huatec.datahome.services.EmploymentService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 就业分析
 * controller层
 *
 * @author HF
 * @date 2018-05-02
 */
@Controller
@RequestMapping("employment")
public class EmploymentController {

    private final EmploymentService employmentService;

    public EmploymentController(EmploymentService employmentService){
        this.employmentService = employmentService;

    }

    /**
     *
     * 专业学校本科、高职、男生女生数量
     *
     * @return 专业学生数量
     */
    @GetMapping("employmentNum")
    @ResponseBody
    public EmploymentDO employmentNum(@RequestParam String majorName) {

        return employmentService.employmentNum(majorName);
    }

    /**
     * 毕业生就业结构（近3年）
     *
     * @param majorName 专业名称
     * @return 毕业生就业结构
     */
    @GetMapping("structureNum")
    @ResponseBody
    public List<KeyStrValIntDO> structureNum(@RequestParam String majorName){

        return employmentService.structureNum(majorName);
    }

    /**
     * 每年毕业生薪资与行业薪资对比表
     *
     * @param majorName 专业名称
     * @return 专业毕业生数量
     */
    @GetMapping("salaryCompared")
    @ResponseBody
    public List<SalaryComparedDO> salaryCompared(@RequestParam String majorName){

        return employmentService.salaryCompared(majorName);
    }

    /**
     * 毕业生平均薪资与行业薪资跟踪
     *
     * @param majorName 专业名称
     * @return 薪资跟踪
     */
    @GetMapping("graduateSalary")
    @ResponseBody
    public List<GraduateSalaryDO> graduateSalary(@RequestParam String majorName) {
        return employmentService.graduateSalary(majorName);
    }

    /**
     * 毕业生就业比例
     *
     * @param majorName 专业名称
     * @return 每年就业比例
     */
    @GetMapping("employmentRadio")
    @ResponseBody
    public List<KeyStrValDoubleDO> employmentRadio(@RequestParam String majorName){
        return employmentService.employmentRadio(majorName);
    }

    /**
     * 毕业生能力分析
     *
     * @param majorName 专业名称
     * @return 毕业生能力分析
     */
    @GetMapping("graduateAbility")
    @ResponseBody
    public List<GraduateAbilityDO> graduateAbility(@RequestParam String majorName) {

        return employmentService.graduateAbility(majorName);
    }

    /**
     * 毕业生就业地图
     *
     * @param majorName
     * @return
     */
    @GetMapping("graduateEmployment")
    @ResponseBody
    public List<GraduateEmploymentDO> graduateEmployment(@RequestParam String majorName) {
        return employmentService.graduateEmployment(majorName);
    }
}
