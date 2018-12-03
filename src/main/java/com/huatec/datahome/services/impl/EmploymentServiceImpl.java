package com.huatec.datahome.services.impl;

import com.huatec.datahome.dao.EmploymentDao;
import com.huatec.datahome.domain.*;
import com.huatec.datahome.services.EmploymentService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 就业分析
 * service层
 *
 * @author HF
 * @date 2018-05-02
 */
@Service
public class EmploymentServiceImpl implements EmploymentService {

    private EmploymentDao employmentDao;

    public EmploymentServiceImpl(EmploymentDao employmentDao){
        this.employmentDao = employmentDao;

    }

    /**
     *
     * 高职、本科、男生、女生数量
     *
     * @param majorName 专业名称
     * @return 高职、本科、男生、女生数量
     */
    @Override
    public EmploymentDO employmentNum(String majorName) {
        return employmentDao.employmentNum(majorName);
    }

    /**
     * 毕业生就业结构（近3年）
     *
     * @param majorName 专业名称
     * @return 毕业生就业结构
     */
    @Override
    public List<KeyStrValIntDO> structureNum(String majorName) {
        return employmentDao.structureNum(majorName);
    }

    /**
     * 每年毕业生薪资与行业薪资对比表
     *
     * @param majorName 专业名称
     * @return 专业毕业生数量
     */
    @Override
    public List<SalaryComparedDO> salaryCompared(String majorName) {
        return employmentDao.salaryCompared(majorName);
    }

    /**
     * 毕业生平均薪资与行业薪资跟踪
     *
     * @param majorName 专业名称
     * @return 薪资跟踪
     */
    @Override
    public List<GraduateSalaryDO> graduateSalary(String majorName) {
        return employmentDao.graduateSalary(majorName);
    }

    /**
     * 毕业生就业比例
     *
     * @param majorName 专业名称
     * @return 每年就业比例
     */
    @Override
    public List<KeyStrValDoubleDO> employmentRadio(String majorName) {
        return employmentDao.employmentRadio(majorName);
    }

    /**
     * 毕业生能力分析
     *
     * @param majorName 专业名称
     * @return 毕业生能力分析
     */
    @Override
    public List<GraduateAbilityDO> graduateAbility(String majorName) {
        return employmentDao.graduateAbility(majorName);
    }

    /**
     * 毕业生就业地图
     *
     * @param majorName 专业名称
     * @return 毕业生就业地图
     */
    @Override
    public List<GraduateEmploymentDO> graduateEmployment(String majorName) {
        return employmentDao.graduateEmployment(majorName);
    }
}
