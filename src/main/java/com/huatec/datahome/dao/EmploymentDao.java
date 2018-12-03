package com.huatec.datahome.dao;

import com.huatec.datahome.domain.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 就业分析
 * dao层
 *
 * @author HF
 * @date 2018-05-02
 */
@Mapper
@Repository
public interface EmploymentDao {

    /**
     *
     * 高职、本科、男生、女生数量
     *
     * @param majorName 专业名称
     * @return 高职、本科、男生、女生数量
     */
    EmploymentDO employmentNum(@Param("majorName") String majorName);

    /**
     * 毕业生就业结构（近3年）
     *
     * @param majorName 专业名称
     * @return 毕业生就业结构
     */
    List<KeyStrValIntDO> structureNum(@Param("majorName") String majorName);

    /**
     * 每年毕业生薪资与行业薪资对比表
     *
     * @param majorName 专业名称
     * @return 专业毕业生数量
     */
    List<SalaryComparedDO> salaryCompared(@Param("majorName") String majorName);

    /**
     * 毕业生平均薪资与行业薪资跟踪
     *
     * @param majorName 专业名称
     * @return 薪资跟踪
     */
    List<GraduateSalaryDO> graduateSalary(@Param("majorName") String majorName);

    /**
     * 毕业生就业比例
     *
     * @param majorName 专业名称
     * @return 每年就业比例
     */
    List<KeyStrValDoubleDO> employmentRadio(@Param("majorName") String majorName);

    /**
     * 毕业生能力分析
     *
     * @param majorName 专业名称
     * @return 毕业生能力分析
     */
    List<GraduateAbilityDO> graduateAbility(@Param("majorName") String majorName);

    /**
     * 毕业生就业地图
     *
     * @param majorName 专业名称
     * @return 毕业生就业地图
     */
    List<GraduateEmploymentDO> graduateEmployment(@Param("majorName") String majorName);
}
