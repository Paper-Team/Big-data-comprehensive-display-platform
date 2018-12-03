package com.huatec.datahome.domain;

import com.alibaba.fastjson.JSON;

/**
 * 每年高职和本科学生数量
 *
 * @author HF
 * @date 2018-04-28
 */
public class MajorAdmissionDO {

    /**
     * 专业名称
     */
    private String majorName;

    /**
     * 年级
     */
    private String grade;

    /**
     * 本科数量
     */
    private Integer undergraduate;

    /**
     * 专业数量
     */
    private Integer vocational;


    public String getMajorName() {
        return majorName;
    }

    public void setMajorName(String majorName) {
        this.majorName = majorName;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Integer getUndergraduate() {
        return undergraduate;
    }

    public void setUndergraduate(Integer undergraduate) {
        this.undergraduate = undergraduate;
    }

    public Integer getVocational() {
        return vocational;
    }

    public void setVocational(Integer vocational) {
        this.vocational = vocational;
    }

    @Override
    public String toString() {
        return JSON.toJSONString(this);
    }
}
