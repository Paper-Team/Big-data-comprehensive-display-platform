package com.huatec.datahome.services;

import com.huatec.datahome.domain.*;

import java.util.List;

/**
 * 就业分析
 * service层
 *
 * @author HF
 * @date 2018-05-02
 */
public interface EmploymentService {

    /**
     *
     * 高职、本科、男生、女生数量
     *
     * @param majorName 专业名称
     * @return 高职、本科、男生、女生数量
     */
    EmploymentDO employmentNum(String majorName);

    /**
     * 毕业生就业结构（近3年）
     *
     * @param majorName 专业名称
     * @return 毕业生就业结构
     */
    List<KeyStrValIntDO> structureNum(String majorName);

    /**
     * 每年毕业生薪资与行业薪资对比表
     *
     * @param majorName 专业名称
     * @return 专业毕业生数量
     */
    List<SalaryComparedDO> salaryCompared(String majorName);

    /**
     * 毕业生平均薪资与行业薪资跟踪
     *
     * @param majorName 专业名称
     * @return 薪资跟踪
     */
    List<GraduateSalaryDO> graduateSalary(String majorName);

    /**
     * 毕业生就业比例
     *
     * @param majorName 专业名称
     * @return 每年就业比例
     */
    List<KeyStrValDoubleDO> employmentRadio(String majorName);

    /**
     * 毕业生能力分析
     *
     * @param majorName 专业名称
     * @return 毕业生能力分析
     */
    List<GraduateAbilityDO> graduateAbility(String majorName);

    /**
     * 毕业生就业地图
     *
     * @param majorName 专业名称
     * @return 毕业生就业地图
     */
    List<GraduateEmploymentDO> graduateEmployment(String majorName);
}
